Since you are new to this OOP stuff, you will receive some guidance. You will receive [JSDoc](https://jsdoc.app/index.html) style comments to help you out a bit in knowing what functions to implement and what they should do. From this, you will actually have the benefit of having documentation written for anyone trying to use the classes you create afterwards, because these comments will be displayed when someone hovers over the function names. As you can immagine, this is very usefull for anyone that tries to use what you build, or even for yourself. Even if your function and parameter names are quite descriptive, sometimes it may be hard to understand just from names the details of what it does. For example, you have a `.copy()` method on your class. But does that metod return a [deep](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy) or [shallow](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy) copy? In that case, you would just hover you mouse over the function, and you would see a comment along the lines of `Returns a shallow copy if the data inside`.

Writing these type of comments can be very usefull and you should get used to doing it all the time, even if it is expected that you are the only one that will use these functions. You may find youself not remembering exactly what something does even if you wrote the code yourself, if enough time passes. Your co-workers or anyone who will take over your code will love you for it.

You should probably install the [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) VSCode extension, this will give you highlighting of the comments so you can better distinguish between different parts of the JSDoc style comments.

Comments will be of this shape:

```typescript
/** 
 * @func functionName
 * function description
 * @arg {argType} arg1Name arg description
 * @arg {argType} arg2Name arg description
 * @returns {returnType} return description
 */
```

- `@func functionName` will tell you what your function name should be. It is said that there are only 2 big problems in programming. Cache invalidation and naming things. While this may sound as a joke, it isn't. Naming things can be actually quite hard, so for now, we will be providing the names of the functions and the parameters, just so you get used to naming conventions.

- `function description` will be a *detailed* description of what your function should do. This description will make use of params described in the param section below.

- `@arg {argType} argName arg description ` describes one individual parameter (argument) that your function shuld take. You will have it's data type provided betweem curly braces, and after that you will also have it's name provided (see function name section above). The description section may be omitted if it is considered obvious what it should be, or if it becomes obvious after reading the description. argType can be marked with `?`, meaning that it is an optional parameter (as in, it's data type is `paramType | undefined`).There can be multiple arg sections if the function has multiple parameters, or none if the function takes no parameters. If there are multiple parameters, they should be written in the same order as described in this section

- `@returns {returnType} return description` tells you what data type the function returns and an optional description of what it represents, should that be necessary. returnType can be marked with `?`, meaning that it's an optional type (written as `returnType | undefined`) There can be a maximum of 1 returns sections (you can only return once), or none (the function returns `void`)

Example:

```typescript

type Address = {
  firstName: string;
  ...
  address: Address | undefined
}

...

/**
 * @func getAddressForUser()
 * retrieves the address of the user with the specified id from the database, or undefined if no address is found. If shouldCache parameter is provided, the response from the database will also be cached.
 * @arg {number} userId the id of the user
 * @arg {boolean?} shouldCache
 * @returns {Address?} the address of the user
 */

...
```

will result in:

```typescript
type Address = {
  firstName: string;
  ...
  address: Address | undefined
}

...

/**
 * @func getAddressForUser()
 * retrieves the address of the user with the specified id from the database, or undefined if no address is found. If shouldCache parameter is provided, the response from the database will also be cached.
 * @arg {number} userId the id of the user
 * @arg {boolean?} shouldCache
 * @returns {Address?} the address of the user
 */
public getAddressForUser = 
  (userId: number, shouldCache?: boolean): Address | undefined => {

    const user = getUserById(userId);
    if(shouldCache){
      cacheResponse(user);
    }

    return user.address
};

...
```

Notice how the function is named the same as in `@func`, and the parameters have the name, type and *order* as described in the `@arg` sections, and the return is what is specified in the `@returns` section. The `Address` type and `getUserById()`/`cacheResponse()` functions are used just for demonstration purposes and do not actually exist.