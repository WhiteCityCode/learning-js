When a user sais:
```typescript
const dArr = new DynamicArray<number>();

...
//add items
...

dArr.get(127)
```

We can get the item at that index by diving 127 to 10 (the size of the array in each node) and round down. That gives us 12.

```typescript
const targetIndex = Math.floor(requestedIndex / 10) // the index we want divided by the length of the arrays stored in nodes. 12 in this case 
const targetArray = llist.get(targetIndex) // this returns the array stored at index 12
```

and to get which index in the static array, we just take the remainder of the same operation and decrement by 1 (since arrays are 0 indexed);

```typescript
const indexInArray = requestedIndex % 10 // 7 
const finalResult = targetArray[indexInArray] // this is the value stored in index 127 in the dynamic array
```
