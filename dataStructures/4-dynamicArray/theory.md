# Dynamic Array

As you can probably tell from the name a Dynamic Array sits somewhere in between a Linked List and a Static Array. You can use both the data types that you created, to provide a new data types that evens out the pros and cons of both of the previous.

Instead of holding a single value in a single node, why don't we just hold Static Array in each node. And every time an array gets filled, we make a new node with a new empty array.

This way we get a bit of both. The read/write/delete/search complexity is $\mathcal{O}(\tfrac{n}{m})$, where $\mathcal{n}$ is the number of elements in the array and $\mathcal{m}$ is the size of the StaticArrays(s) we use to store the data. Think about it. The access time in the static array is always $\mathcal{O}(1)$. So the only time we loose on access is the time we need to cycle to the linked list nodes to find the array where the requested value is stored.

Picture that any operation on the array or the list takes 1 second, and the array that stores the values (the node item) is always of length 10. If we ask for index 2, it takes 2 seconds (1 to lookup the first item in the list, and 1 to access the index in the array). If we ask for index 7, the same is true. Since our arrays are of length 10, anything up to index 9 takes 2 seconds to lookup. If we ask for index 12, it takes 3 seconds. 1 to read the first node, 1 to read the second and 1 to read from the array in the second node. Same if we ask for index 31. It takes 4 seconds, 1 for the first node, 1 for the second, 1 for the third and 1 to read from the array. 

In fact, since the read time from the array is $\mathcal{O}(1)$, we can ignore it. So the ammount of time it takes to find and index is the ammount of time necessary to reach the required node in the linked list. And we can find the required index by rounding down the division of the reqested index by the size of the arrays in the nodes (if each node stores 10 values, 0-9 can be found in the first node, 10-19 in the second, 20-29 in the third, etc).

See if you can build a dynamic array based on the above mentioned (try without the hint first), using only the `StaticArray` and `LinkedList` that you built (this means no javascript arrays and no functions that pertain to javascript arrays. Use only what you yourself built). Continue to provide comments in the JSDoc style, and continue to provide at least CRUD operations and forEach/map/reduce/filter/traverse helpers.

Make the constructor take an optional parameter that will be the size of the StaticArray used to store the values. If that parameter is no provided, set it to a sensible default values. Expose that default value as a static property of the class, should anyone need it.
