# Grass roots

Here begins our actual journey into Data Structures. The static array is the first (and most basic) higher order data type. What is a higher order data type you ask?

Well, they stand in contrast to primitive types. Primitive types (`number`/`string`/`boolean`) are just an abstraction over bytes. Whenever you create a variable (this is true for any programing language), it gets it's own space in memory. where it's value is stored. But, as you know, memory can only hold numbers (0 to 255 in every individual byte). So how does the compiler know what those values represent?

As an aside, please note that whenever you see here (or anywhere else on the internet) the term 'memory', we are refering to RAM memory and not any kind of persistent storage like hard disks. 

# How memory works

You can immagine computer memory as a table where each item has assigned to it an address number. Phisically, each one of these addresses is a circuit that has electricity running through it. It is built using logic gates and you can find more details about how that is achieved in places like [this](https://www.101computing.net/random-access-memory-using-logic-gates/), but currently this is outside of our scope.

The `&` means that the number represents an address, not the actual value of that slot and we call it a 'memory pointer', or just 'pointer'.

|         |         |         |         |         |         |         |         |         |         |
| :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  |
| &0      | &1      | &2      | &3      | &4      | &5      | &6      | &7      | &8      |   &9    |
| &10     | &11     | &12     | &13     | &14     | &15     | &16     | &17     | &18     |   &19   |
| &20     | &21     | &22     | &23     | &24     | &25     | &26     | &27     | &28     |   &29   |
| &30     | &31     | &32     | &33     | &34     | &35     | &36     | &37     | &38     |   &39   |
| &40     | &41     | &42     | &43     | &44     | &45     | &46     | &47     | &48     |   &49   |
| &50     | &51     | &52     | &53     | &54     | &55     | &56     | &57     | &58     |   &59   |
|         |         |         |         |         |         |         |         |         |         |

Each individual address can hold a value between 0 and 255. Why is that? Well you may have heared that a byte is the lowest addressable unit of memory. And one byte is 8 bits. Each bit can be in either one of 2 states (`0` | `1`), meaning it can represent any number between 0 and 1. If we add another bit in front of it, the 2 bits can represent 4 possible states (`00` | `01` | `10` | `11`), or any number betweem 0 and 3. This makes sense, because by adding one bit, we can represent all the previous values with a `0` in front (meaning they stay the same as before) or a `1` in front. This effectively means that, each time we add a bit, we double the ammount of numbers we can represent. And since one bit (the minimum) represents 2 and we keep doubling it for each extra bit, it means that x bits can represent $2^{x}$ values.
A byte is 8 bits, that means $2^{8}$ which is 256, or all the numbers in the range $\langle 0\dots255\rangle$.

But how do we convert from a number to it's binary representation? Quite easy actually. Turns out that binary is just decimal numbers in base 2. You even had an exercise in the algorithms part where you had to convert numbers to base 2. Converting from base 2 to base 10 is just as easy. This is amazing because, while they take a bit more space to write, binary numbers are just numbers, so any math that works in base 10 also works in base 2.

Great! Now when we tell the computer to store the number 4 in a variable, what the compiler does is it takes `4`, turns it to binary (`00000100`, remember we can work only in increments of 8 bits, so the leading `0`s are necesarry, but the compiler will take care of this for you, this is included for completion's sake). After that, it will find the first available memory slot, and store it there, and it will return the address where it's kept.

But how does the compiler know which are the 'free' memory slots? When you write a new value, you don't want to write it in an address that is already in use. This is where memory allocation comes in. The methods through which it does this is a bit out of scope for now, but you can immagine that each address can be marked as 'safe' or 'forbidden' to write into. We will represent fobidden addresses with red.

So when we say:

```typescript
let x = 4;
```

The compiler does the above described conversion process, and goes to look in the memory for a free slot

|         |         |         |         |         |         |         |         |         |         |
| :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  |
| $&0$    | $&1$    | $&2$    | $&3$    | &4      | &5      | &6      | &7      | &8      |   &9    |
| &10     | &11     | &12     | &13     | &14     | &15     | &16     | &17     | &18     |   &19   |
| &20     | &21     | &22     | &23     | &24     | &25     | &26     | &27     | &28     |   &29   |
| &30     | &31     | &32     | &33     | &34     | &35     | &36     | &37     | &38     |   &39   |
| &40     | &41     | &42     | &43     | &44     | &45     | &46     | &47     | &48     |   &49   |
| &50     | &51     | &52     | &53     | &54     | &55     | &56     | &57     | &58     |   &59   |
|         |         |         |         |         |         |         |         |         |         |

It sees that slot &4 is available, so it stores the value there and marks it as forbidden for writing

|         |         |         |         |                                 |         |         |         |         |         |
| :----:  | :----:  | :----:  | :----:  | :----:                          | :----:  | :----:  | :----:  | :----:  | :----:  |
| $&0$    | $&1$    | $&2$    | $&3$    |${\color{red} \&4 - 00000100}$  | &5      | &6      | &7      | &8      |   &9    |
| &10     | &11     | &12     | &13     | &14                             | &15     | &16     | &17     | &18     |   &19   |
| &20     | &21     | &22     | &23     | &24                             | &25     | &26     | &27     | &28     |   &29   |
| &30     | &31     | &32     | &33     | &34                             | &35     | &36     | &37     | &38     |   &39   |
| &40     | &41     | &42     | &43     | &44                             | &45     | &46     | &47     | &48     |   &49   |
| &50     | &51     | &52     | &53     | &54                             | &55     | &56     | &57     | &58     |   &59   |
|         |         |         |         |                                 |         |         |         |         |         |

The compiler then keeps an internal reference that the value for x is to be found at &4 and it will read the value found at  &4 whenever we use x in our code. It also knows to change the value stored at 4 whenever we change the value of x.

Let's see what happens when we modify it.

```typescript
let x = 4;
let y = 6;
x = x + y;
```

We declare a new variable and assign a value to it. The process is the exact same as for x, but y gets the address &5 because &4 is taken by x. It converts 6 to binary and stores it. The memory will look like this.

|         |         |         |         |                                 |                                 |         |         |         |         |
| :----:  | :----:  | :----:  | :----:  | :----:                          | :----:                          | :----:  | :----:  | :----:  | :----:  |
| $&0$    | $&1$    | $&2$    | $&3$    |${\color{red} \&4 - 00000100}$  |${\color{red} \&5 - 00000110}$  | &6      | &7      | &8      |   &9    |
| &10     | &11     | &12     | &13     | &14                             | &15                             | &16     | &17     | &18     |   &19   |
| &20     | &21     | &22     | &23     | &24                             | &25                             | &26     | &27     | &28     |   &29   |
| &30     | &31     | &32     | &33     | &34                             | &35                             | &36     | &37     | &38     |   &39   |
| &40     | &41     | &42     | &43     | &44                             | &45                             | &46     | &47     | &48     |   &49   |
| &50     | &51     | &52     | &53     | &54                             | &55                             | &56     | &57     | &58     |   &59   |
|         |         |         |         |                                 |                                 |         |         |         |         |

The, when we say `x = x + y`, the interpreter looks internally for the references for x and y. It finds that they can be found at addresses &4 and &5 respectively, and then goes on to read the values found at those addresses, and pricceeds to add them. Since we just said that binary notation is just math in base 2, it doesn't have to do any conversions, it just adds `00000100` and `00000110`, which results in `00001010`. It then assigns this new value to the address of x (&4)

|         |         |         |         |                                 |                                 |         |         |         |         |
| :----:  | :----:  | :----:  | :----:  | :----:                          | :----:                          | :----:  | :----:  | :----:  | :----:  |
| $&0$    | $&1$    | $&2$    | $&3$    |${\color{red} \&4 - 00001010}$  |${\color{red} \&5 - 00000110}$  | &6      | &7      | &8      |   &9    |
| &10     | &11     | &12     | &13     | &14                             | &15                             | &16     | &17     | &18     |   &19   |
| &20     | &21     | &22     | &23     | &24                             | &25                             | &26     | &27     | &28     |   &29   |
| &30     | &31     | &32     | &33     | &34                             | &35                             | &36     | &37     | &38     |   &39   |
| &40     | &41     | &42     | &43     | &44                             | &45                             | &46     | &47     | &48     |   &49   |
| &50     | &51     | &52     | &53     | &54                             | &55                             | &56     | &57     | &58     |   &59   |
|         |         |         |         |                                 |                                 |         |         |         |         |

Now, this is all well and good, but what if, for example, we want to work with numbers bigger than 255?

Well, if we want numbers larger than 255, we just use more than 1 byte. If we use 2 bytes, that's 16 bits (also called a `word`). This gives us $2^{16}$ representable values, or, the numbers in the range $\langle 0\dots65536\rangle$. 

Whenever we declare a variable and mark it as `number`, we assign 2 bytes instead of 1. We will represent addresses already in use as ${\color{red} red}$ and addresses that are allocated for the operation being described currently as ${\color{green} green}$. 

```typescript
let x: number;
```

|         |         |         |         |         |         |         |                         |                         |         |
| :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:                  | :----:                  | :----:  |
| $&0$    | $&1$    | $&2$    | $&3$    | &4      | $&5$    | $&6$    | ${\color{green} \&7}$ | ${\color{green} \&8}$ |   &9    |
| &10     | &11     | &12     | &13     | &14     | &15     | &16     | &17                     | &18                     |   &19   |
| &20     | &21     | &22     | &23     | &24     | &25     | &26     | &27                     | &28                     |   &29   |
| &30     | &31     | &32     | &33     | &34     | &35     | &36     | &37                     | &38                     |   &39   |
| &40     | &41     | &42     | &43     | &44     | &45     | &46     | &47                     | &48                     |   &49   |
| &50     | &51     | &52     | &53     | &54     | &55     | &56     | &57                     | &58                     |   &59   |
|         |         |         |         |         |         |         |                         |                         |         |

The interpreter marks addresses &7 and &8 as the places in which we store x, and returns &7 as the starting place. Notice that it skipped &4, even though it was free. This is because when allocating memory, addresses need to be sequential. If we want to allocate 2 bytes, the interpreter needs to find 2 *consecutive* free memory slots. Think about it. If the addresses in which we store our new number are not consecutive, how would we know where to find the others? I mean, sure, the interpreter itself could keep track of each of the addresses for every single variable, but think about it... That would *at least* double the ammount of RAM our program requires. 1 byte for every address (which itself stores 1 byte)

Now, if we want to assign a value to x that is greater than 255, we just convert it to binary and store each byte in it's own memory slot.

```typescript
let x: number;
x = 63010;
```

We turn `63010` to it's binary representation. We obtain `1111011000100010`. We split it in increments of 8 from right to left, padding the leftmost value with `0` if necessary (here it is not), and we get `11110110` and `00100010`. And we store each one in the memory addresses that we just allocated for `x`.

|         |         |         |         |         |         |         |                                    |                                    |         |
| :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:                             | :----:                             | :----:  |
| $&0$    | $&1$    | $&2$    | $&3$    | &4      | $&5$    | $&6$    | ${\color{green} \&7 - 11110110}$  | ${\color{green} \&8 - 00100010}$  |   &9    |
| &10     | &11     | &12     | &13     | &14     | &15     | &16     | &17                                | &18                                |   &19   |
| &20     | &21     | &22     | &23     | &24     | &25     | &26     | &27                                | &28                                |   &29   |
| &30     | &31     | &32     | &33     | &34     | &35     | &36     | &37                                | &38                                |   &39   |
| &40     | &41     | &42     | &43     | &44     | &45     | &46     | &47                                | &48                                |   &49   |
| &50     | &51     | &52     | &53     | &54     | &55     | &56     | &57                                | &58                                |   &59   |
|         |         |         |         |         |         |         |                                    |                                    |         |

And in code, whenever x appears, the interpreter knows it has to read 2 bytes starting from &7. But what if we want a number greater than $2^{16}$? We can obviously store these numbers in 3 bytes, or 4, or 5. Whatever will be able to keep the largest value the software will have to work with. This presents us with a problem though. Even though it's easy enough to represent bigger numbers, how do we know what the maximum value we expect so store in a variable to be? We can't just make every variable take up 12 bytes just because it's possible that someone will need it someday. That means that for all other 99.99% of use cases, most of the memory reserved per variable would go to waste. This is where data types come in. 

Why make assumptions for how big we expect a number to be when we can have the person writing the software say how big he expects it to be. After all, he is the one who knows what those numbers actually represent, he should tell us how many bytes to use. Now, in `Typescript`, we only have the `number` type for numbers, since TS dinamically grows the memory space allocated if a number variable is about to overflow (overflow meaning it exceeds the value it's alloted memory size can represent. Anything greater than 255 for a 1 byte variable would cause an overflow, for example), but in older languages, this is the reason you have different types of integers. In java for example, you have this:

| Data Type  | Size    |
|---         |---      |
| byte       | 1 byte  |
| short      | 2 bytes |
| int        | 4 bytes |
| long       | 8 bytes |

This is the reason you want to state the type of the variable in programming languages, so compilers can then allocate the necessary space for that particular variable. And this is the reason you have to know what values you expect your variables to have. If you are writing code for rockets, you won't have supercomputers on them, so every extra byte you can save is a huge plus. You have to be careful though not to make calculations that result in a value that is greater than what can be stored in that memory space. A programmer found this out the hard way, when a $370 million rocket he wrote the code for, [crashed](https://www.reddit.com/r/ProgrammerHumor/comments/ar0v0c/370_million_for_an_integer_overflow_the_june_4/) because of an integer overflow.

This way, when you say in Java

```java
 int x = 2;
```

The java virtual machine will go in memory and seach for the first 4 free memory slots (4 as per the table above) and will store the value there. 
This happens even in languages like Typescript, where there is just one `number` type, or in languages like python where you don't even have to specify the data type at all. These languages run on the same hardware as the languages where you do have to specify data types. The difference is that in dynamic languages, just as the name suggests, the compiler for that language will determine based on yur code how much space to allocate. As a precaution, it obiously overshoots the quantities, which results in worse performing programs. Ultimately, this is a tradeoff. You want to get rid of as much memory management as possible while still having your software perform decently for your specific domain.

## Baby's first words

So we now we know how the JS interpreter transforms our variables that are numbers into values storable in the memory, great. But... what if we want to represent characters? Each byte of memory can still hold just numbers. This is where [character encoding](https://en.wikipedia.org/wiki/Character_encoding) comes in. We still store numbers, but we assign a letter to each one of those numbers. The most known character encoding (though far from the only one) is [ASCII](https://www.asciitable.com/). The ASCII table (which the interpreter would have internally) tells the interpreter which letter each number refers to. As you can see in the link, ASCII provides codes for all the letters in the english alphabet, plus a handfull of other ones, totaling 256 characters, or exactly 1 byte.

Now, for the reasons mentioned above, TS only has the `string` type, which can be more than 1 character. But let's imagine that we also have a `char` type, which represents just 1 ASCII character.

```typescript
let c: char = "a";
```

Now, the interpreter sees it needs to write something to memory. It sees that it's a `char` with the value "a". It looks up in the ASCII table, and sees that lowercase a is represented by the number `97` which, in binary, is `01100001`. It looks in memory and fints the first free address

|         |         |         |         |                         |         |         |         |         |         |
| :----:  | :----:  | :----:  | :----:  | :----:                  | :----:  | :----:  | :----:  | :----:  | :----:  |
| $&0$    | $&1$    | $&2$    | $&3$    | ${\color{green} \&4}$  | $&5$    | $&6$    | &7      | &8      |   &9    |
| &10     | &11     | &12     | &13     | &14                     | &15     | &16     | &17     | &18     |   &19   |
| &20     | &21     | &22     | &23     | &24                     | &25     | &26     | &27     | &28     |   &29   |
| &30     | &31     | &32     | &33     | &34                     | &35     | &36     | &37     | &38     |   &39   |
| &40     | &41     | &42     | &43     | &44                     | &45     | &46     | &47     | &48     |   &49   |
| &50     | &51     | &52     | &53     | &54                     | &55     | &56     | &57     | &58     |   &59   |
|         |         |         |         |                         |         |         |         |         |         |

It finds that  &4 is free, it marks it as forbidden to be written to, and returns the pointer &4 to be assigned as the address where c is found. It then poceeds to write `01100001` in that address.

|         |         |         |         |                                    |         |         |         |         |         |
| :----:  | :----:  | :----:  | :----:  | :----:                             | :----:  | :----:  | :----:  | :----:  | :----:  |
| $&0$    | $&1$    | $&2$    | $&3$    | ${\color{green} \&4 - 01100001}$  | $&5$    | $&6$    | &7      | &8      |   &9    |
| &10     | &11     | &12     | &13     | &14                                | &15     | &16     | &17     | &18     |   &19   |
| &20     | &21     | &22     | &23     | &24                                | &25     | &26     | &27     | &28     |   &29   |
| &30     | &31     | &32     | &33     | &34                                | &35     | &36     | &37     | &38     |   &39   |
| &40     | &41     | &42     | &43     | &44                                | &45     | &46     | &47     | &48     |   &49   |
| &50     | &51     | &52     | &53     | &54                                | &55     | &56     | &57     | &58     |   &59   |
|         |         |         |         |                                    |         |         |         |         |         |

Now, in addition to the memory location in which to find the variable, the interpreter also retains it's type. So whenever we read it for some reason, it knows how to interpret the numerical value retrieved.
When we say 

```typescript
let c: char = "a";
c = c + 1;
```

The interpreter looks for the variable named c in it's internal storage, and sees that it can be found at address &4. I looks in memory at that address, and sees that the value `01100001` is there.
Now, it sees that we say add 1 to it. But it also sees that c is of the type `char`. Now, at this point it *could* add 1 to the value, because, again, internally, letters are represented as numbers. It chooses not to, because it makes no sense to add a character with a number, and instead it would give us an error saying that we are trying to add a number with something that is not a number. But as you can see, not allowing this is just a choice that the developers of the `Typescript` compiler made. If you write your own language, you could allow this operation, and say that adding a number to a character means adding that number to the characters ascii code. Adding 2 to "a", would mean adding 2 to 97, resulting in 99, or the letter "c". You shouldn't do this however. This was just an example.

Now, we run into the same problem we had with numbers. It's all well and good if we want ASCII characters, but what happens when we want to represent non english characters? Thankfully, the solution is similar. There are different encodings that can represent any random set of characters, using more bytes for the numbers that represent the characters (and thus have a bigger table). What character encoding you or your language uses was and is a pretty big problem in programming. A famous article was written in 2003 by a co-founder of StackOverflow, named ["The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)"](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/). This is a must read for every developer and it covers the more important details, so we will not be exploring this topic further.

Now, we have primitives out of our way. We can store and manipulate numbers and characters of arbitraty length. But what happens when we want to provide a way to work with lists of things?

## Arrays

The easiest (and only) way of storing lists of things in the memory model we used this far is to store them next to eachother. This is for the same reason as in the numbers example when if a number required more bytes, we needed those bytes to be next to eachother. Namely, it's because it would be very memory intensive if for each element of the array we also had to keep a pointer to where in the memory we can find it. It's just easier to store all the elements next to eachother. We can require the user to say the datatype that the array stores (`string`/`number` etc) so we know exactly how much memory we need. This does however present us with a problem. Because, like explained before, the interpreter will look in memory for the first available slot(s) whenever we declare a new variable, and because arrays can have empty slots (you can declare a new array even without specifying all the elements, think ``` var a: number[] = []```), we need to know the *size* of the array at the moment of declaration, so that we can reserve the necessary amount of memory, so that the interpreter doesn't write something in the middle of the array.

Visualize it like so:

|         |         |         |         |         |         |         |         |         |         |
| :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  |
| $&0$    | $&1$    | $&2$    | $&3$    | &4      | $&5$    | $&6$    | &7      | $&8$    |   &9    |
| $&10$   | &11     | &12     | &13     | &14     | &15     | &16     | &17     | &18     |   &19   |
| &20     | &21     | &22     | &23     | &24     | &25     | &26     | &27     | &28     |   &29   |
| &30     | &31     | &32     | &33     | &34     | &35     | &36     | &37     | &38     |   &39   |
| &40     | &41     | &42     | &43     | &44     | &45     | &46     | &47     | &48     |   &49   |
| &50     | &51     | &52     | &53     | &54     | &55     | &56     | &57     | &58     |   &59   |
|         |         |         |         |         |         |         |         |         |         |

We say: 
```typescript
const a: number[] = new Array(5); // this will be []
```

The interpreter sees that we just declared a new, empty array, with a size of 5 and it containts `number`s. This is helpful because, it can deduce that it needs to reserve 10 memory slots for `a`, because each `number` requires 2 bytes and we need to store 5. But the array is empty, so the interpreter just marks the first 10 consecutive slots as closed for writing:

|         |         |         |         |         |         |         |         |         |         |
| :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  |
| $&0$    | $&1$    | $&2$    | $&3$    | &4      | $&5$    | $&6$    | &7      | $&8$    |   &9    |
| $&10$   | ${\color{green} \&11}$      | ${\color{green} \&12}$      | ${\color{green} \&13}$      | ${\color{green} \&14}$      | ${\color{green} \&15}$      | ${\color{green} \&16}$      | ${\color{green} \&17}$      | ${\color{green} \&18}$      |   ${\color{green} \&19}$    |
| ${\color{green} \&20}$      | &21     | &22     | &23     | &24     | &25     | &26     | &27     | &28     |   &29   |
| &30     | &31     | &32     | &33     | &34     | &35     | &36     | &37     | &38     |   &39   |
| &40     | &41     | &42     | &43     | &44     | &45     | &46     | &47     | &48     |   &49   |
| &50     | &51     | &52     | &53     | &54     | &55     | &56     | &57     | &58     |   &59   |
|         |         |         |         |         |         |         |         |         |         |

This way, when after we declare the array, we declare another variable and assigna  value to it:

```typescript
const a: number[] = new Array(5); // this will be []
const b = 350;
```
The interpreter knows not to write the value of b in the slots reserved for a, even if they are empty.

Eeven more so, when we want to read or write in a slot in a, the interpreter knows ***exactly*** where to look. By the same principle, when we say

```typescript
const a: number[] = new Array(5); // this will be []
a[3] = 256
```

256 would take be transformed to the bytes `00000001` and `11111111`. The interpreter keeps the address of the starting address of `a` (just like we did for numbers and characters). But because it knows that the array contains numbers, and each number is 2 bytes, with the starting address of a being `&11`, the third slot of a is 2 * 2 (arrays are 0 indexed) = 4, 11 + 4 = 15, so address slots &15 and &16 are gonna be used to store the item. 

|         |         |         |         |         |         |         |         |         |         |
| :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  |
| $&0$    | $&1$    | $&2$    | $&3$    | &4      | $&5$    | $&6$    | &7      | $&8$    |   &9    |
| $&10$   | ${\color{green} \&11}$      | ${\color{green} \&12}$      | ${\color{green} \&13}$      | ${\color{green} \&14}$      | ${\color{green} \&15 - 00000001}$      | ${\color{green} \&16 - 11111111}$      | ${\color{green} \&17}$      | ${\color{green} \&18}$      |   ${\color{green} \&19}$    |
| ${\color{green} \&20}$      | &21     | &22     | &23     | &24     | &25     | &26     | &27     | &28     |   &29   |
| &30     | &31     | &32     | &33     | &34     | &35     | &36     | &37     | &38     |   &39   |
| &40     | &41     | &42     | &43     | &44     | &45     | &46     | &47     | &48     |   &49   |
| &50     | &51     | &52     | &53     | &54     | &55     | &56     | &57     | &58     |   &59   |
|         |         |         |         |         |         |         |         |         |         |

And when we say

```typescript
const a: number[] = new Array(5); // this will be []
a[3] = 256
console.log(1 + a[3]) // 4
```

By the same logic (2 * 2 + 11 = 15), it knows too look at address &15 and read 2 bytes (because, again, in this case, numbers are 2 bytes).

This is why we say that reading and writing inside a static array is of constant ($\mathcal{O}(1)$) complexity. Regardless of the size of the array, it always takes the same amount of time to figure out what address you need to read/write to, by using the formula above (which could be written as *`s + i * t`*, where `s` is the starting address, `i` is the index and `t` is the size of the data type the array holds). Note that deleting is also considered writing. So, for example, if the reading or writing operation itself takes 1 nanosecond, reading and writing to any index will take 1 nanosecond regardless of if the array is 10 elements long or 1000000000 elements long. 

The search time for an element however, is $\mathcal{O}(n)$, since the worst case scenario is that the item we are searching for is not present in the list, and we have to iterate through every element. Again, if reading takes 1 nanosecond, the operation will take 10 nanoseconds for an array of size 10 and 1000000000 nanoseconds (1 second) for an array with 1000000000 elements.

Having a fixed size is a pretty tough constraint, but as you can see it comes with some benefits too. We will learn more of lists with variable size later (this is a linked list), but this is the first higher order data type and the reason it behaves as it does. In typescript we obviously have dynamic arrays, but we are trying to learn, so you will have to implement one! And every other data type after this one will be implemented based on this one, so be careful!
