# Intro

When you read this, you will have implemented a static array. While that is an achievement, you can probably tell that it comes with it's set of issues. Namely, it is always a fixed size that you have to know beforehand. If it contains fewer elements, that't not really a problem. You just leave empty slots. But what happens when we have more elements than the lists size? We could also just declare arrays with sizes that we know for sure will be greater than what we would ever need in our program, but that's totally wastefull.

We also could declare a new array, move all the elements from the old one to the new one, and call it a day. But that is also very cumbersome, and would also be very inefficient as far as comppute power goes, since moving all those elements around isn't free also.

This is where linked lists come in. 

# Linked List

Conceptually, a linked list is nothing more than a pair (tuple) of values. The first value is the actual *element* of the list, and te second one is a pointer to the memory address where you can find the next element. Let's go back to our memory table.

|         |         |         |         |         |         |         |         |         |         |
| :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  |
| &0      | &1      | &2      | &3      | &4      | &5      | &6      | &7      | &8      |   &9    |
| &10     | &11     | &12     | &13     | &14     | &15     | &16     | &17     | &18     |   &19   |
| &20     | &21     | &22     | &23     | &24     | &25     | &26     | &27     | &28     |   &29   |
| &30     | &31     | &32     | &33     | &34     | &35     | &36     | &37     | &38     |   &39   |
| &40     | &41     | &42     | &43     | &44     | &45     | &46     | &47     | &48     |   &49   |
| &50     | &51     | &52     | &53     | &54     | &55     | &56     | &57     | &58     |   &59   |
|         |         |         |         |         |         |         |         |         |         |

For the sake of this exercise, let's say that the numbers we store in the list require just 1 byte to store, but this would work the same with any arbitrary size number or character (remember the theory for the static array). Let's picture how a LinkedList would work.

```typescript
const llist = new LinkedList<number>();
llist.add(2);
```

This would mark the first 2 free bytes (1 for the value and 1 for the pointer) as locked. And write `00000010` (2) in the first byte

|                                    |                         |         |         |         |         |         |         |         |         |
| :----:                             | :----:                  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  |
|  ${\color{green} \&0 - 00000010}$  |  ${\color{green} \&1}$  | &2      | &3      | &4      | &5      | &6      | &7      | &8      |   &9    |
| &10                                | &11                     | &12     | &13     | &14     | &15     | &16     | &17     | &18     |   &19   |
| &20                                | &21                     | &22     | &23     | &24     | &25     | &26     | &27     | &28     |   &29   |
| &30                                | &31                     | &32     | &33     | &34     | &35     | &36     | &37     | &38     |   &39   |
| &40                                | &41                     | &42     | &43     | &44     | &45     | &46     | &47     | &48     |   &49   |
| &50                                | &51                     | &52     | &53     | &54     | &55     | &56     | &57     | &58     |   &59   |
|                                    |                         |         |         |         |         |         |         |         |         |

Now , in the meantime, let's say that our program uses some other addresses for other variables. We mark them with red

|                                    |                         |         |                        |         |                        |         |         |         |         |
| :----:                             | :----:                  | :----:  | :----:                 | :----:  | :----:                 | :----:  | :----:  | :----:  | :----:  |
|  ${\color{green} \&0 - 00000010}$  |  ${\color{green} \&1}$  | &2      |  ${\color{red} \&3 }$  | &4      |  ${\color{red} \&5 }$  | &6      | &7      | &8      |   &9    |
| &10                                | &11                     | &12     | &13                    | &14     | &15                    | &16     | &17     | &18     |   &19   |
| &20                                | &21                     | &22     | &23                    | &24     | &25                    | &26     | &27     | &28     |   &29   |
| &30                                | &31                     | &32     | &33                    | &34     | &35                    | &36     | &37     | &38     |   &39   |
| &40                                | &41                     | &42     | &43                    | &44     | &45                    | &46     | &47     | &48     |   &49   |
| &50                                | &51                     | &52     | &53                    | &54     | &55                    | &56     | &57     | &58     |   &59   |
|                                    |                         |         |                        |         |                        |         |         |         |         |

When we now want to add a new value to the list

```typescript
llist.add(3);
```

The interpreter would look for the next 2 consecutive free bytes. In our case that would be `&6` and `&7`. It locks them and it would store `00000011` (3) in `&6`

|                                    |                         |         |                        |         |                        |                                    |                         |         |         |
| :----:                             | :----:                  | :----:  | :----:                 | :----:  | :----:                 | :----:                             | :----:                  | :----:  | :----:  |
|  ${\color{green} \&0 - 00000010}$  |  ${\color{green} \&1}$  | &2      |  ${\color{red} \&3 }$  | &4      |  ${\color{red} \&5 }$  |  ${\color{green} \&6 - 00000011}$  |  ${\color{green} \&7}$  | &8      |   &9    |
| &10                                | &11                     | &12     | &13                    | &14     | &15                    | &16                                | &17                     | &18     |   &19   |
| &20                                | &21                     | &22     | &23                    | &24     | &25                    | &26                                | &27                     | &28     |   &29   |
| &30                                | &31                     | &32     | &33                    | &34     | &35                    | &36                                | &37                     | &38     |   &39   |
| &40                                | &41                     | &42     | &43                    | &44     | &45                    | &46                                | &47                     | &48     |   &49   |
| &50                                | &51                     | &52     | &53                    | &54     | &55                    | &56                                | &57                     | &58     |   &59   |
|                                    |                         |         |                        |         |                        |                                    |                         |         |         |

But it would also need to store this address in the first element of the list, so that it knows how to get here. So it turs 6 (the address where we store the second element) to binary, and it stores that in `&1` (the first element's pointer to next). 6 in binary is `00000110`.

|                                    |                                    |         |        |         |        |                                    |                         |         |         |
| :----:                             | :----:                             | :----:  | :----: | :----:  | :----: | :----:                             | :----:                  | :----:  | :----:  |
|  ${\color{green} \&0 - 00000010}$  |  ${\color{green} \&1 - 00000110}$  | &2      | $ &3$  | &4      | $ &5$  |  ${\color{green} \&6 - 00000011}$  |  ${\color{green} \&7}$  | &8      |   &9    |
| &10                                | &11                                | &12     | &13    | &14     | &15    | &16                                | &17                     | &18     |   &19   |
| &20                                | &21                                | &22     | &23    | &24     | &25    | &26                                | &27                     | &28     |   &29   |
| &30                                | &31                                | &32     | &33    | &34     | &35    | &36                                | &37                     | &38     |   &39   |
| &40                                | &41                                | &42     | &43    | &44     | &45    | &46                                | &47                     | &48     |   &49   |
| &50                                | &51                                | &52     | &53    | &54     | &55    | &56                                | &57                     | &58     |   &59   |
|                                    |                                    |         |        |         |        |                                    |                         |         |         |

Let's immagine some more time passes, and our memory would look like this

|                                    |                                    |         |        |         |        |                                    |                         |         |         |
| :----:                             | :----:                             | :----:  | :----: | :----:  | :----: | :----:                             | :----:                  | :----:  | :----:  |
|  ${\color{green} \&0 - 00000010}$  |  ${\color{green} \&1 - 00000110}$  | &2      | $ &3$  | &4      | $ &5$  |  ${\color{green} \&6 - 00000011}$  |  ${\color{green} \&7}$  | $ &8$   |  $ &9$  |
| $ &10$                             | $ &11$                             | &12     | $ &13$ | &14     | $ &15$ | &16                                | &17                     | &18     |   &19   |
| &20                                | &21                                | &22     | &23    | &24     | &25    | &26                                | &27                     | &28     |   &29   |
| &30                                | &31                                | &32     | &33    | &34     | &35    | &36                                | &37                     | &38     |   &39   |
| &40                                | &41                                | &42     | &43    | &44     | &45    | &46                                | &47                     | &48     |   &49   |
| &50                                | &51                                | &52     | &53    | &54     | &55    | &56                                | &57                     | &58     |   &59   |
|                                    |                                    |         |        |         |        |                                    |                         |         |         |

And now we add our 3rd element

```typescript
llist.add(255);
```

255 in binary is `11111111`, and the first 2 free addresses are `&16` and `&17`. We store our data in `&16`.

|                                    |                                    |         |        |         |        |                                    |                         |         |         |
| :----:                             | :----:                             | :----:  | :----: | :----:  | :----: | :----:                             | :----:                  | :----:  | :----:  |
|  ${\color{green} \&0 - 00000010}$  |  ${\color{green} \&1 - 00000110}$  | &2      | $ &3$  | &4      | $ &5$  |  ${\color{green} \&6 - 00000011}$  |  ${\color{green} \&7}$  | $ &8$   |  $ &9$  |
| $ &10$                             | $ &11$                             | &12     | $ &13$ | &14     | $ &15$ |  ${\color{green} \&16 - 11111111}$ |  ${\color{green} \&17}$ | &18     |   &19   |
| &20                                | &21                                | &22     | &23    | &24     | &25    | &26                                | &27                     | &28     |   &29   |
| &30                                | &31                                | &32     | &33    | &34     | &35    | &36                                | &37                     | &38     |   &39   |
| &40                                | &41                                | &42     | &43    | &44     | &45    | &46                                | &47                     | &48     |   &49   |
| &50                                | &51                                | &52     | &53    | &54     | &55    | &56                                | &57                     | &58     |   &59   |
|                                    |                                    |         |        |         |        |                                    |                         |         |         |

But also store `00010000` (16) in `&7`

|                                    |                                    |         |        |         |        |                                    |                                    |         |         |
| :----:                             | :----:                             | :----:  | :----: | :----:  | :----: | :----:                             | :----:                             | :----:  | :----:  |
|  ${\color{green} \&0 - 00000010}$  |  ${\color{green} \&1 - 00000110}$  | &2      | $ &3$  | &4      | $ &5$  |  ${\color{green} \&6 - 00000011}$  |  ${\color{green} \&7 - 00010000}$  | $ &8$   |  $ &9$  |
| $ &10$                             | $ &11$                             | &12     | $ &13$ | &14     | $ &15$ |  ${\color{green} \&16 - 11111111}$ |  ${\color{green} \&17}$            | &18     |   &19   |
| &20                                | &21                                | &22     | &23    | &24     | &25    | &26                                | &27                                | &28     |   &29   |
| &30                                | &31                                | &32     | &33    | &34     | &35    | &36                                | &37                                | &38     |   &39   |
| &40                                | &41                                | &42     | &43    | &44     | &45    | &46                                | &47                                | &48     |   &49   |
| &50                                | &51                                | &52     | &53    | &54     | &55    | &56                                | &57                                | &58     |   &59   |
|                                    |                                    |         |        |         |        |                                    |                                    |         |         |

Now, what would happen if we want to read the 3rd value (index 2) in the list?

```typescript
console.log(llist.get(2)) // prints 255, the 3rd element we added
```

Well, since the interpreter only stores the start address of any variable, it knows that `llist` starts at address `&0`. We will mark the values that the interpreter is currently reading with blue.

|                                   |                                    |         |        |         |        |                                    |                                    |         |         |
| :----:                            | :----:                             | :----:  | :----: | :----:  | :----: | :----:                             | :----:                             | :----:  | :----:  |
|  ${\color{blue} \&0 - 00000010}$  |  ${\color{green} \&1 - 00000110}$  | &2      | $ &3$  | &4      | $ &5$  |  ${\color{green} \&6 - 00000011}$  |  ${\color{green} \&7 - 00010000}$  | $ &8$   |  $ &9$  |
| $ &10$                            | $ &11$                             | &12     | $ &13$ | &14     | $ &15$ |  ${\color{green} \&16 - 11111111}$ |  ${\color{green} \&17}$            | &18     |   &19   |
| &20                               | &21                                | &22     | &23    | &24     | &25    | &26                                | &27                                | &28     |   &29   |
| &30                               | &31                                | &32     | &33    | &34     | &35    | &36                                | &37                                | &38     |   &39   |
| &40                               | &41                                | &42     | &43    | &44     | &45    | &46                                | &47                                | &48     |   &49   |
| &50                               | &51                                | &52     | &53    | &54     | &55    | &56                                | &57                                | &58     |   &59   |
|                                   |                                    |         |        |         |        |                                    |                                    |         |         |

It knows that this is a list of `number`, so each value is 1 byte wide, so in order to find the pointer, it moves 1 byte forward

|                                    |                                   |         |        |         |        |                                    |                                    |         |         |
| :----:                             | :----:                            | :----:  | :----: | :----:  | :----: | :----:                             | :----:                             | :----:  | :----:  |
|  ${\color{green} \&0 - 00000010}$  |  ${\color{blue} \&1 - 00000110}$  | &2      | $ &3$  | &4      | $ &5$  |  ${\color{green} \&6 - 00000011}$  |  ${\color{green} \&7 - 00010000}$  | $ &8$   |  $ &9$  |
| $ &10$                             | $ &11$                            | &12     | $ &13$ | &14     | $ &15$ |  ${\color{green} \&16 - 11111111}$ |  ${\color{green} \&17}$            | &18     |   &19   |
| &20                                | &21                               | &22     | &23    | &24     | &25    | &26                                | &27                                | &28     |   &29   |
| &30                                | &31                               | &32     | &33    | &34     | &35    | &36                                | &37                                | &38     |   &39   |
| &40                                | &41                               | &42     | &43    | &44     | &45    | &46                                | &47                                | &48     |   &49   |
| &50                                | &51                               | &52     | &53    | &54     | &55    | &56                                | &57                                | &58     |   &59   |
|                                    |                                   |         |        |         |        |                                    |                                    |         |         |

In `&1`, it finds `00000110` (6), so it moves to that address next

|                                    |                                    |         |        |         |        |                                    |                                    |         |         |
| :----:                             | :----:                             | :----:  | :----: | :----:  | :----: | :----:                             | :----:                             | :----:  | :----:  |
|  ${\color{green} \&0 - 00000010}$  |  ${\color{green} \&1 - 00000110}$  | &2      | $ &3$  | &4      | $ &5$  |  ${\color{blue} \&6 - 00000011}$   |  ${\color{green} \&7 - 00010000}$  | $ &8$   |  $ &9$  |
| $ &10$                             | $ &11$                             | &12     | $ &13$ | &14     | $ &15$ |  ${\color{green} \&16 - 11111111}$ |  ${\color{green} \&17}$            | &18     |   &19   |
| &20                                | &21                                | &22     | &23    | &24     | &25    | &26                                | &27                                | &28     |   &29   |
| &30                                | &31                                | &32     | &33    | &34     | &35    | &36                                | &37                                | &38     |   &39   |
| &40                                | &41                                | &42     | &43    | &44     | &45    | &46                                | &47                                | &48     |   &49   |
| &50                                | &51                                | &52     | &53    | &54     | &55    | &56                                | &57                                | &58     |   &59   |
|                                    |                                    |         |        |         |        |                                    |                                    |         |         |

By the same logic, moves to the next address to find the pointer

|                                    |                                    |         |        |         |        |                                    |                                   |         |         |
| :----:                             | :----:                             | :----:  | :----: | :----:  | :----: | :----:                             | :----:                            | :----:  | :----:  |
|  ${\color{green} \&0 - 00000010}$  |  ${\color{green} \&1 - 00000110}$  | &2      | $ &3$  | &4      | $ &5$  |  ${\color{green} \&6 - 00000011}$  |  ${\color{blue} \&7 - 00010000}$  | $ &8$   |  $ &9$  |
| $ &10$                             | $ &11$                             | &12     | $ &13$ | &14     | $ &15$ |  ${\color{green} \&16 - 11111111}$ |  ${\color{green} \&17}$           | &18     |   &19   |
| &20                                | &21                                | &22     | &23    | &24     | &25    | &26                                | &27                               | &28     |   &29   |
| &30                                | &31                                | &32     | &33    | &34     | &35    | &36                                | &37                               | &38     |   &39   |
| &40                                | &41                                | &42     | &43    | &44     | &45    | &46                                | &47                               | &48     |   &49   |
| &50                                | &51                                | &52     | &53    | &54     | &55    | &56                                | &57                               | &58     |   &59   |
|                                    |                                    |         |        |         |        |                                    |                                   |         |         |

And finds `00010000` (16), so it moves there

|                                    |                                    |         |        |         |        |                                   |                                    |         |         |
| :----:                             | :----:                             | :----:  | :----: | :----:  | :----: | :----:                            | :----:                             | :----:  | :----:  |
|  ${\color{green} \&0 - 00000010}$  |  ${\color{green} \&1 - 00000110}$  | &2      | $ &3$  | &4      | $ &5$  |  ${\color{green} \&6 - 00000011}$ |  ${\color{green} \&7 - 00010000}$  | $ &8$   |  $ &9$  |
| $ &10$                             | $ &11$                             | &12     | $ &13$ | &14     | $ &15$ |  ${\color{blue} \&16 - 11111111}$ |  ${\color{green} \&17}$            | &18     |   &19   |
| &20                                | &21                                | &22     | &23    | &24     | &25    | &26                               | &27                                | &28     |   &29   |
| &30                                | &31                                | &32     | &33    | &34     | &35    | &36                               | &37                                | &38     |   &39   |
| &40                                | &41                                | &42     | &43    | &44     | &45    | &46                               | &47                                | &48     |   &49   |
| &50                                | &51                                | &52     | &53    | &54     | &55    | &56                               | &57                                | &58     |   &59   |
|                                    |                                    |         |        |         |        |                                   |                                    |         |         |

Since that is the index we asked it for, it would return that value.
As you can see, getting the item at index n requires moving through the list up to that step, in contrast to StaticArray, where getting the item at any index is constant, or $\mathcal{O}(1)$. This also applies to writing (the steps are the same, it would just write the new value instead of reading what is there). This means that LinkedLists have $\mathcal{O}(n)$ read and write complexity. Remember, here $\mathcal{n}$ represents the length of the list, and in big $\mathcal{O}$ notation, we take the worst case scenario into consideration. The worst case scenario in this case is that we want to read/write the last element in the list. So the time it takes to do those operations grows as the list grows. Do note that search time is also $\mathcal{O}(n)$, just like StaticArray, since it presents the same challenges.  Again, if reading takes 1 nanosecond, the operation will take 10 nanoseconds for a list of size 10 and 1000000000 nanoseconds (1 second) for a list with 1000000000 elements.

Let's add another element. While we were reading the above paragraph, the memory layout changed like so:

|                                    |                                    |         |        |         |        |                                    |                                    |         |         |
| :----:                             | :----:                             | :----:  | :----: | :----:  | :----: | :----:                             | :----:                             | :----:  | :----:  |
|  ${\color{green} \&0 - 00000010}$  |  ${\color{green} \&1 - 00000110}$  | $ &2$   |   &3   | &4      | $ &5$  |  ${\color{green} \&6 - 00000011}$  |  ${\color{green} \&7 - 00010000}$  | $ &8$   |  $ &9$  |
| $ &10$                             | $ &11$                             | &12     | $ &13$ | &14     | $ &15$ |  ${\color{green} \&16 - 11111111}$ |  ${\color{green} \&17}$            | &18     |   &19   |
| &20                                | &21                                | &22     | &23    | &24     | &25    | &26                                | &27                                | &28     |   &29   |
| &30                                | &31                                | &32     | &33    | &34     | &35    | &36                                | &37                                | &38     |   &39   |
| &40                                | &41                                | &42     | &43    | &44     | &45    | &46                                | &47                                | &48     |   &49   |
| &50                                | &51                                | &52     | &53    | &54     | &55    | &56                                | &57                                | &58     |   &59   |
|                                    |                                    |         |        |         |        |                                    |                                    |         |         |

We decide to add another item to the list:

```typescript
llist.add(128);
```

128 is `01000000` in binary. The first 2 free memory slots are `&3` `&4`. We write `01000000` (our value) in `&3`, mark `&4` as locked so we can add another pointer if we need to, and add `00000011` in `&17` (the pointer to the next item, the one we just added)

|                                    |                                    |         |                                  |                       |        |                                    |                                    |         |         |
| :----:                             | :----:                             | :----:  | :----:                           | :----:                | :----: | :----:                             | :----:                             | :----:  | :----:  |
|  ${\color{green} \&0 - 00000010}$  |  ${\color{green} \&1 - 00000110}$  | $ &2$   | ${\color{green} \&3 - 01000000}$ | ${\color{green} \&4}$ | $ &5$  |  ${\color{green} \&6 - 00000011}$  |  ${\color{green} \&7 - 00010000}$  | $ &8$   |  $ &9$  |
| $ &10$                             | $ &11$                             | &12     | $ &13$                           | &14                   | $ &15$ |  ${\color{green} \&16 - 11111111}$ |  ${\color{green} \&17- 00000011}$  | &18     |   &19   |
| &20                                | &21                                | &22     | &23                              | &24                   | &25    | &26                                | &27                                | &28     |   &29   |
| &30                                | &31                                | &32     | &33                              | &34                   | &35    | &36                                | &37                                | &38     |   &39   |
| &40                                | &41                                | &42     | &43                              | &44                   | &45    | &46                                | &47                                | &48     |   &49   |
| &50                                | &51                                | &52     | &53                              | &54                   | &55    | &56                                | &57                                | &58     |   &59   |
|                                    |                                    |         |                                  |                       |        |                                    |                                    |         |         |

Notice how elements of the list do not need to be in order in memory. We just find the first sufficiently big space available at the moment of insertion, and store our data and pointer there. Our list can grow to arbitraty legths as long as there is enough free memory.

So how would we delete an item? In the static array is's easy enough, it's just a normal write operation with `null`. Over here though, this is a bit more complex, since each element is like a link in a chain. If we want to remove a link, we need to join it's neighbours together, or we loose all the data after that point. In our example, if we just remove index 1 which is at address `&6`, we lose eveything  after it, since the pointer of index 0 will still point to `&6` even after we delete it. 

Let's call the index we want to delete $\mathcal{i}$. We first have to traverse the list up to $\mathcal{i}$ (just like in the example above in the read and write case), take it's pointer and keep it, then traverse the list again up to index $\mathcal{i}$ - 1 (remember, the list only stores the reference to it's **next** neighbour, so we have no way of going back) and in $\mathcal{i}$ - 1, and set it's pointer to the pointer we found in $\mathcal{i}$. It would look something like this:

```typescript
llist.removeAt(1);
```

`llist` starts at `&0`, first pointer found at `&1`

|                                    |                                   |         |                                  |                       |        |                                    |                                    |         |         |
| :----:                             | :----:                            | :----:  | :----:                           | :----:                | :----: | :----:                             | :----:                             | :----:  | :----:  |
|  ${\color{green} \&0 - 00000010}$  |  ${\color{blue} \&1 - 00000110}$  | $ &2$   | ${\color{green} \&3 - 01000000}$ | ${\color{green} \&4}$ | $ &5$  |  ${\color{green} \&6 - 00000011}$  |  ${\color{green} \&7 - 00010000}$  | $ &8$   |  $ &9$  |
| $ &10$                             | $ &11$                            | &12     | $ &13$                           | &14                   | $ &15$ |  ${\color{green} \&16 - 11111111}$ |  ${\color{green} \&17- 00000011}$  | &18     |   &19   |
| &20                                | &21                               | &22     | &23                              | &24                   | &25    | &26                                | &27                                | &28     |   &29   |
| &30                                | &31                               | &32     | &33                              | &34                   | &35    | &36                                | &37                                | &38     |   &39   |
| &40                                | &41                               | &42     | &43                              | &44                   | &45    | &46                                | &47                                | &48     |   &49   |
| &50                                | &51                               | &52     | &53                              | &54                   | &55    | &56                                | &57                                | &58     |   &59   |
|                                    |                                   |         |                                  |                       |        |                                    |                                    |         |         |

`&1` has `00000110` (6) in it, so we move there

|                                    |                                    |         |                                  |                       |        |                                   |                                    |         |         |
| :----:                             | :----:                             | :----:  | :----:                           | :----:                | :----: | :----:                            | :----:                             | :----:  | :----:  |
|  ${\color{green} \&0 - 00000010}$  |  ${\color{green} \&1 - 00000110}$  | $ &2$   | ${\color{green} \&3 - 01000000}$ | ${\color{green} \&4}$ | $ &5$  |  ${\color{blue} \&6 - 00000011}$  |  ${\color{green} \&7 - 00010000}$  | $ &8$   |  $ &9$  |
| $ &10$                             | $ &11$                             | &12     | $ &13$                           | &14                   | $ &15$ | ${\color{green} \&16 - 11111111}$ |  ${\color{green} \&17- 00000011}$  | &18     |   &19   |
| &20                                | &21                                | &22     | &23                              | &24                   | &25    | &26                               | &27                                | &28     |   &29   |
| &30                                | &31                                | &32     | &33                              | &34                   | &35    | &36                               | &37                                | &38     |   &39   |
| &40                                | &41                                | &42     | &43                              | &44                   | &45    | &46                               | &47                                | &48     |   &49   |
| &50                                | &51                                | &52     | &53                              | &54                   | &55    | &56                               | &57                                | &58     |   &59   |
|                                    |                                    |         |                                  |                       |        |                                   |                                    |         |         |

The element at `&6` is the one we want to remove, so we take the value founda t `&7` (it's pointer), which is `00010000` (16) and we store it. We now traverse the array from the beginning again

|                                   |                                    |         |                                  |                       |        |                                    |                                    |         |         |
| :----:                            | :----:                             | :----:  | :----:                           | :----:                | :----: | :----:                             | :----:                             | :----:  | :----:  |
|  ${\color{blue} \&0 - 00000010}$  |  ${\color{green} \&1 - 00000110}$  | $ &2$   | ${\color{green} \&3 - 01000000}$ | ${\color{green} \&4}$ | $ &5$  |  ${\color{green} \&6 - 00000011}$  |  ${\color{green} \&7 - 00010000}$  | $ &8$   |  $ &9$  |
| $ &10$                            | $ &11$                             | &12     | $ &13$                           | &14                   | $ &15$ |  ${\color{green} \&16 - 11111111}$ |  ${\color{green} \&17- 00000011}$  | &18     |   &19   |
| &20                               | &21                                | &22     | &23                              | &24                   | &25    | &26                                | &27                                | &28     |   &29   |
| &30                               | &31                                | &32     | &33                              | &34                   | &35    | &36                                | &37                                | &38     |   &39   |
| &40                               | &41                                | &42     | &43                              | &44                   | &45    | &46                                | &47                                | &48     |   &49   |
| &50                               | &51                                | &52     | &53                              | &54                   | &55    | &56                                | &57                                | &58     |   &59   |
|                                   |                                    |         |                                  |                       |        |                                    |                                    |         |         |

`&0` is the marks the start of the element at index $\mathcal{i}$ - 1, so we change it's pointer (`&1`) from `00000110` (6) to `00010000` (16):

|                                    |                                   |         |                                  |                       |        |                                    |                                    |         |         |
| :----:                             | :----:                            | :----:  | :----:                           | :----:                | :----: | :----:                             | :----:                             | :----:  | :----:  |
|  ${\color{green} \&0 - 00000010}$  |  ${\color{blue} \&1 - 00010000}$  | $ &2$   | ${\color{green} \&3 - 01000000}$ | ${\color{green} \&4}$ | $ &5$  |  ${\color{green} \&6 - 00000011}$  |  ${\color{green} \&7 - 00010000}$  | $ &8$   |  $ &9$  |
| $ &10$                             | $ &11$                            | &12     | $ &13$                           | &14                   | $ &15$ |  ${\color{green} \&16 - 11111111}$ |  ${\color{green} \&17- 00000011}$  | &18     |   &19   |
| &20                                | &21                               | &22     | &23                              | &24                   | &25    | &26                                | &27                                | &28     |   &29   |
| &30                                | &31                               | &32     | &33                              | &34                   | &35    | &36                                | &37                                | &38     |   &39   |
| &40                                | &41                               | &42     | &43                              | &44                   | &45    | &46                                | &47                                | &48     |   &49   |
| &50                                | &51                               | &52     | &53                              | &54                   | &55    | &56                                | &57                                | &58     |   &59   |
|                                    |                                   |         |                                  |                       |        |                                    |                                    |         |         |

And finally, we mark `&6` and `&7` as safe to write to

|                                    |                                   |         |                                  |                       |        |                                    |                                    |         |         |
| :----:                             | :----:                            | :----:  | :----:                           | :----:                | :----: | :----:                             | :----:                             | :----:  | :----:  |
|  ${\color{green} \&0 - 00000010}$  |  ${\color{blue} \&1 - 00010000}$  | $ &2$   | ${\color{green} \&3 - 01000000}$ | ${\color{green} \&4}$ | $ &5$  | &6                                 | &7                                 | $ &8$   |  $ &9$  |
| $ &10$                             | $ &11$                            | &12     | $ &13$                           | &14                   | $ &15$ |  ${\color{green} \&16 - 11111111}$ |  ${\color{green} \&17- 00000011}$  | &18     |   &19   |
| &20                                | &21                               | &22     | &23                              | &24                   | &25    | &26                                | &27                                | &28     |   &29   |
| &30                                | &31                               | &32     | &33                              | &34                   | &35    | &36                                | &37                                | &38     |   &39   |
| &40                                | &41                               | &42     | &43                              | &44                   | &45    | &46                                | &47                                | &48     |   &49   |
| &50                                | &51                               | &52     | &53                              | &54                   | &55    | &56                                | &57                                | &58     |   &59   |
|                                    |                                   |         |                                  |                       |        |                                    |                                    |         |         |

As you can see, this is pretty complex. As a matter of fact, the complexity of this operation is $\mathcal{O}(2n)$! That is because, in the worst case scenarion, where we delete from the end of the list, we have to go through the entire list *twice*, once to get the last pointer and once again to reach $\mathcal{i}$ - 1. $\mathcal{O}(2n)$! time complexity means that, if reading and writing takes 1 nanosecond, a list with 10 elements will take 20 nanoseconds for a full write operation, while a list with 1000000000 elements will take 2 seconds for the same operation. This would obviously be mitigated if in each element we sore it's previous neighbour. That's actually what a Doubly linked list is. But that means that we use more memory for each element also. Ultimately, it's a tradeoff that you have to consider on a per problem basis.

Now, this is just an explanation of how a linked list would be implemented in a language that actually has this kind of access to memory (say C, C++, Rust, Assembly and others). This is nice information to have, but we obviously don't have that kind of memory control in typescript. As such, your implementation won't be with tuples of pointers, but rather you will use 2 objects. One recursive type that stores the data and it's next neighbour:

```typescript
class Node<T>{
  data: T; // the actual data
  next?: Node<T>; //an optional pointer to the next node. This being null or undefined means that this is the last node in the list

  ...
}
```

The `Node` class we keep internal to the module, and treat it like we treated the array in the first theory document in this series. It means that no one can access it from outside the file it's declared in. Our second class, the actual liked list will contain the head node (the start of the list) as a private property.

```typescript
class LinkedList<T>{
  private _head: Node<T>;
}
```

and will have functions that work on that list. Your task is to provide the basic interface for working with a linked list. This means that you need to provide functios for CRUD (Create/Read/Update/Delete) operations on the node (so functions for CRUD on an indext that they take as a parameter). You also need to provide a way of geting the length of the list, and some helper functions like forAll, traverse, map, filter, reduce, contains and anything else you deem usefull (basically most if not all of the functions that you implemented in StaticArray). You also must provide comments in the style that you had helping you in the previous lesson. While it may be tempting, please try to write all the comments by hand and not just copy paste them. At this point in time, the most important thing you can do is to write as much as you can, regardless of what it is. Also, feel free to create a separate file in which to test your work. Good luck!