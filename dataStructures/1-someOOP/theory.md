# Part 2: Electric Boogaloo

So, you managed to finish most (if not all) of the exercises in the algorithms part of these lessons, and now you want to learn some new data types. Grats!

Unfortunately, before we dive to deep into data structures, we need to learn a bit more about object oriented programming in general and a few typescript features in particular. Some of these things you may have noticed before in the exercises, and some of them completely new. We will add quite a few new technical terms to your vocabulary, so don't worry if you can't remember everything right away, just keep this document as a helper.

You are encouraged to take code you find in this section and play around with it a bit in the `index.ts` file. That will be your playground and more. In the exercises to come, the data types will be quite a bit more complex than what you did up to this point, with some classes having dozens of functions for you to implement (exciting, I know). This means that you will need to test individual parts of your code before the whole thing is ready, so you might as well get used to it now.

Let's get into it!

# Importing and exporting

When you start working on real world projects (and even before), you will notice that the more code you write, the harder it is to keep track of what you wrote and where. You end up spending more time searching for the place you need to change than for writing the change itself. When you reach these kinds of situations, it often makes sense to split the code up a bit, and write it in different files, each file containing code that  refers to a single concept, thus making it easier to know where you have to go when you want to modify something.

Now, *how* to split up code is a whole topic on it's own, and we won't get into it right now. However, it is usefull to know how to do it, for future reference, and, to know what some of those weird keywords you keep seeing mean.

Now if we create a new file and write (say, `greeter.ts`) a function in it

```typescript
const greeter = (name: string): string => {
  return `Hello ${name}`;
};
```

The compiler gives us a warning (`'greeter' is declared but its value is never read.`). And when we try to call the function inside `index.ts`: 

```typescript
const greeting = greeter("John Doe");
console.log(greeting);
```

We get the error `Cannot find name 'greeter'`. It's becoming obvious that the compiler doesn't just know every function we write in any random file. We have to tell it where to find the functions we want to call. We can do that using `import`. Imports are written at the start of every file, and inside the import statement, you have to tell the compiler what you want imported, and where from.

```typescript
import { greeter } from './greeter.ts'

const greeting = greeter("John Doe");
console.log(greeting);
```

You write between curly braces what it is you want from the file that you imported. Please note that the file from which to import must be written relative to the file you are in. If you declared `greeter.ts` inside another folder, you have to give it that path. If it is in the same folder as the file you are importing into, `./` signifies that. Also, the way you write the file names differs from JS interpreter to JS interpreter. In deno, you have to write the extension of the file (`.js` / `.ts`) after the file name in the import. In nodeJS, you d not. You can find out what you need to do if you read the documentation of your interpreter.

But, this gives another error: `Module '"./greeter.ts"' declares 'greeter' locally, but it is not exported`. This tells us that while the compiler found our file, but that it's contents are not exported. You have to say explicitly what you want to export. We fix that with the `export` keyword:

```typescript
export const greeter = (name: string): string => {
  return `Hello ${name}`;
};
```

And now all should work. But, what if we write another function that we want to call? Well, easy. We just export that too, and add it to the import list inside `index.ts`

```typescript
export const greeter = (name: string): string => {
  return `Hello ${name}`;
};

export const discriminatingGreeter = (name: string): string => {
  if (name === "John") {
    return "Hey";
  }

  return `Hello ${name}`;
};
```

```typescript
import { greeter, discriminatingGreeter } from './greeter.ts'

const greeting = greeter("John Doe");
console.log(greeting); // Hello John Doe

const anotherGreeting = discriminatingGreeter("John");
console.log(anotherGreeting); // Hey
```

Easy stuff. But what if the module we want to import has a lot of functions that we want imported. Do we have to add *all* of them to the import list? Fortunately, no. We can import the whole file under an alias, and then use any exported function in that file using the dot notation.

```typescript
import * as variousGreetings from './greeter.ts'

const greeting = variousGreetings.greeter("John Doe");
console.log(greeting);

const anotherGreeting = variousGreetings.discriminatingGreeter("John");
console.log(anotherGreeting); // Hey
```

Nice. What would be even nicer, is if we could use that `as` keyword to give aliases to the functions we import.

```typescript
import { greeter, discriminatingGreeter as dg } from './greeter.ts'

const greeting = greeter("John Doe");
console.log(greeting); // Hello John Doe

const anotherGreeting = dg("John");
console.log(anotherGreeting); // Hey
```

While it is possible, it isn't generally recommended to do so. If you work in a team and eveyone keeps giving random names to the same function, it becomes very old very fast to remember which function is which. Just be aware that it is possible, in case you read some code that does it.

These are the most common use cases you will see, but there are many more ways and tricks to use imports and exports. You will find them all on your iterpreter's documentation should you need it. For deno, you can find it [here](https://deno.land/manual@v1.26.0/examples/import_export).

# Sum types and optionals

In the exercises function signatures, you may have noticed some types defined as:
```typescript
number | string
```

This is called a union type (in functional languages it's called a sum type). The `|` symbol can be read as `or`. In other words, if we say

```typescript
  const a: number | string = "asd"
```
it means tha a can be either a number or a string. We can take this a step further, and limit the values a variable takes a certain subset of a type. If we say:
```typescript
  let a: "low" | "medium" | "high";
```
Then a is defined as a string which can only contain the values described above. As you can immagine, this can be very useful when we want to, say, give some limited configuration options.

Another useful use case of union types is to denote optionality. Immagine you are working on an online marketplace. Market research shows that the more data a user has to fill on registration, the less likely he is to complete the registration, so you ask the user for the bare minimum of information, and you ask for the rest on a per need basis. But this means that, whenever a user places an order, you are never sure if you have his address or not. You could represent this like such:
```typescript
  var address: Address | undefined
```
so now, we can check the value of address and if it is undefined, we know to ask the user to provide his address, and we store it for future use.
```typescript
  var address: Address | undefined = getAddressForUser(userId) // say this retrieves an address from the Database

  if(address){
    ... // proceed with checkout
  } else {
    ...// ask for the user's address
  }
```

Turns out that this specific usecase (denoting optionallity) is so common that Typescript (and other languages too) have added a shortcut for writing it. If you put a questionmark (`?`) at the end of a data type, typescrip will give it that type or `undefined`. You can even use this notation in function signatures.

```typescript
type Address = {
  streetName: string;
  zipCode: number;
  // Some other fields
}

const getAddressForUser = (_userId: number): Address | undefined => {
  // pretend this gets the user's address from the database or returns undefined if ti doesn't find one
  return undefined;
}

const checkout = (address?: Address): void => {
  console.log(address.streetName); // pretend this does the actual checkout
}

const address = getAddressForUser(2);
checkout(address);
```

If you write this code in a typescript file and hover your mouse the address parameter in the checkout function, you should see that `address` is of the type `Address | undefined`. Even more so, if you try to do something with a value marked as optional, Typescript will warn you that the value might not be there. You should see an error in he `console.log()` saying that `Object is possibly 'undefined'`. We need to manually check if the address is there before we can work with it. Fortunately, if we check that the value exists, then the compiler should no longer complain. Change checkout like so:

```typescript
const checkout = (address?: Address): void => {
  if(!address){
    return // we would do the asking part here in a real world program
  }
  console.log(address.streetName); // pretend this does the actual checkout
}
```

and now we can use address as if it was no longer optional. But what happens if we know for sure that the address value exists? Do we need to write if statements all the time even then? Fortunately, no. We can use the `!` sign to tell the compiler that, even if it is marked as optional, because of some external reason, we know for sure that the value exists. If we return to the previous version of the code, and change the address call like so:
```typescript
const checkout = (address?: Address): void => {
  console.log(address!.streetName); // pretend this does the actual checkout
}
```

Now the compiler should no longer complain. While there certainly are valid use cases for this, you should be **EXTREMELY** careful with the `!` notation. It is not a method to avoid writing code when you feel lazy and don't want to handle the case when the value is not present. It should only be used when you are 100% sure that the value will be there (and even then think about it twice, and then think about it again), or when you are debuging code and will write the missing case in te immediate future.

## Default
When defining a function that has optional parameters, it is often the case that, inside, we check to see if the optional parameter has a value, and if not, we give it a (sensible) default value.

```typescript
const applyDiscout = (price: number, discount?: number) => {
  if(!discount) {
    discount = 0.05 // we give 5% discount by default
  }

  return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95
console.log(applyDiscount(100, 0.1)); // 90
```

This use case is actually very common, so there is a way to make it easier. Any argument can have a default value.

```typescript
const applyDiscout = (price: number, discount: number = 0.05) => {
  if(!discount) {
    discount = 0.05 // we give 5% discount by default
  }

  return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95
console.log(applyDiscount(100, 0.1)); // 90
```

You just assign a value that you want if the user does not provide the parameter when he calls the function. Note the lack if an optional (`?`) sign. Parameters that have a default value are optional by default (for the caller, the writer of the function can just treat it as if it always exists). 

# A bit of OOP

In object oriented programming, we define a class as a blueprint for creating objects. In them, we define the properties and behaviours an object should have.

If this sounds complicated, fear not, it's a lot more simple than it seems. A class is just a way to group together variables and methods that conceptually belong to an entity. But it's probably a lot more easier to explain if we learn by actually building something useful.
Let's create a new data structure, very commonly used in more low level programming: a `Stack`.

Stacks are a data structure similar to lists (or arrays), in that they store multiple values of the same type. The difference is that in a stack, you can only add or remove items from the end of the list (this means it works by the LIFO principle: Last In, First Out). We can immagine this as if stacking (get it?) items on top of eachother. the only way to get to the item at the bottom (the first one that was added) is to remove all the items from above it.

You can code along in the `stack.ts` file.

## The basics

We declare  class by using the `class` keyword followed by the class name (with the first letter uppercased) and curly braces:

```typescript
  class Stack {
    // class stuff here
  }
```
We can then add properties to our class. A property is kind of like a variable that is bound to that class. 
```typescript
  class Stack {
    length: number;
  }
```

Finally, the `constructor()` function. This function is called whenever we instantiate the class (but only when we do it with the `new` keyword, there will be other ways to do it later ). It can accept parameters just like any function (though in this particular case it does not, since we always want to start with length 0. You are welcome to try it yourself though!), and returns `void`. It is generally used to set initial values to the properties of the class

```typescript
  class Stack {
    length: number;

    constructor(){
      this.length = 0;
    }
  }
```

This is all well and good, but how do we actually use it. Well, in the initial definition, we said that a class is like a blueprint from which we build objects. You can construct a new object from a class by using the `new` keyword:

```typescript
  const myStack = new Stack();
```

We can access the properties we defined on the class by using the `object.property` notation:

```typescript
  const myStack = new Stack();
  console.log(myStack.length) // this will print 0
```

We can experiment a bit with the constructor also. Let's set it to take a number parameter and set the length property to be that number

```typescript
  class Stack {
    length: number;

    constructor(len: number){
      this.length = len;
    }
  }

  const myStack = new Stack(3);
  console.log(myStack.length) // 3;
```

We can also set a property value with this notation:

```typescript
  const myStack = new Stack();
  console.log(myStack.length); // this will print 0
  myStack.length = 2;
  console.log(myStack.length); // this will print 2
```

These properties are defined on a per object basis. Remember, we said that a class is a blueprint for building objects, so we can build as many objects as we want with this blueprint, and the length property (or any other) will be specific to each object.

```typescript
const myStack = new Stack();
const anotherStack = new Stack();

console.log(myStack.length); // prints 0
console.log(anotherStack.length); // prints 0

anotherStack.length = 5;

console.log(myStack.length); // prints 0
console.log(anotherStack.length); // prints 5
```

Now, this is all well and good, but, while you may see the usefullness in this, you may also (rightfully) think that it is a bit silly to let anyone change the length of the stack whenever and however they want. 

One option could be the `readonly` modifier. If a normal property is like a variable, `readonly` properties are like constants. If you declare a property `readonly`, it can be assigned a value only once, in the `constructor()`:

```typescript
  class Stack {
    readonly length: number;

    constructor(){
      this.length = 0;
    }
  }
```

Now, if we try to modify length, we get an error

```typescript
const myStack = new Stack();
console.log(myStack.length); // 0
myStack.length = 5; // we get the error: Cannot assign to 'length' because it is a read-only property.
```
Unfortunately, this won't do though. Wile yes, you can't change the length from outside the class, you also can't change it from within, and this is bad, since we want our `Stack` tob e of dynamic length.  Thankfully, we can still fix the problem. With the `private` keyword:

```typescript
  class Stack {
    private length: number;

    constructor(){
      this.length = 0;
    }
  }
```

The private keyword makes the property inaccessible from outside the function, so that no one can change it whenever they want. Butt his presents us with a new problem, namely, that now there is no way to know the legth of the object. For this, we can write a function that returns it.

```typescript
  class Stack {
    private length: number;

    constructor(){
      this.length = 0;
    }

    public size = (): number => {
      return this.length
    }
  }

  const newStack = new Stack();
  const stackSize = newStack.size();
  console.log(stackSize) // 0
```

Okay, that's a lot of new keywords there, let's see what they do. First of all, we can define functions that are tied to a class. Because they are declared inside the class, they have acccess to all the variables inside it. So, while the length property is now `private`, and we only have access to it from inside the class, we declare a function that returns the length. This fixes the issues we had before, we can read the length, but we can not change it from outside the class. Such functions that are tied to a class, are called class methods, or simply methods.

```typescript
  public size = (): number => {
    return this.length
  }
```

As you probably assumed, if `private` means that we can not access something from outside the class, a `public` method or property can. In fact, all methods and properties are public by default. That's why earlier we could access the `.length` property without making it explicitly `public`.

Finally, the `this` keyword is used to tell typescript that we are talking about the `length` property of this specific class, as opposed to a random variable with the same name. Whenever writing code inside a class, you should use `this.name` to refer to the properties or methods you declared.

Side note: properties can be both `readonly` and `private`/`public` (only one of the last 2). `private`/`public` define from where we can read them, and `readonly` makes sure we can't (re)write them.

Now, let's make things a bit more fancy. Having just a property named length is not really exciting.

```typescript
  class Stack {
    private length: number;
    private data: number[];

    constructor(){
      this.length = 0;
      this.data = [];
    }

    public size = (): number => {
      return this.length
    }
  }
```

## The data

We will use an array to store our data internally. If we lookup the `Stack` data type, you will see that generally, it has 3 important functions: `push()`, `pop()` and `peek()`. Also, while it is true that arrays have their own `.length` property and we could (and if this was a real world project, we would) use that instead of keeping it ourselves, for the purposes of this exercise we will not be using it in order to better understand how a class would work.

`push()` adds an item to the stack, `pop()` removes an item from the stack and returns it's value, and `peek()` lets up looks at the next item without actually removing it. Let's add the signatures to our class.

```typescript
class Stack {
  private length: number;
  private data: number[];

  constructor() {
    this.length = 0;
    this.data = [];
  }

  public size = (): number => {
    return this.length;
  };

  public push = (val: number): void => {
    // code here
  };

  public pop = (): number | undefined => {
    //code here
    return 0;
  };

  public peek = (): number | undefined => {
    //code here
    return 0;
  };
}
```

Let's handle them one by one. First off, the easiest, `peek()`. You will notice in the signature that peek has a return type of `number | undefined`. This is because our array can be empty, in which case the function won't have anything to return, so we return `undefined`. If there are values in the array, we should return the last value, and since arrays are 0 indexed, the last value is always at index `length - 1`.

```typescript
  public peek = (): number | undefined => {
    const lastIndex = this.length - 1
    return this.data[lastIndex];
  }
```
Now, we can't really test anything at the moment, since the array will always be empty, so we need to implement `push()`. If the array is of length n, then we need to add the item to the index of n + 1. Coincidentally, since arrays are 0 indexed, then the n + 1 index is actually just the size property

```typescript
  public push = (val: number): void => {
    const insertIndex = this.length
    this.data[insertIndex] = val;
  }
```

Let's try it out!

```typescript
const myStack = new Stack();

console.log(myStack.peek()) //undefined, it's ok since we have nothing in the array

myStack.push(1);
console.log(myStack.peek()) // undefined ... wait, what
```

It seems we have a problem here. The first call to `peek()` returns `undefined`, which is ok, since the stack was empty at the moment of calling. However, the second call is after we `push()` 1 into the `Stack`. So why is it returning `undefined` again?

Well, if we look closely at the code, we notice that inside the `peek()` function, we use the `length` property to determine the index at which to read. But `length` is always 0, and because of that, we always return `data[-1]` which is always undefined.
We have to be careful to increment the length property when we add something tot he stack.

```typescript
  public push = (val: number): void => {
    const insertIndex = this.length
    this.data[insertIndex] = val;
    this.length++;
  }
```

And test again now:

```typescript
const myStack = new Stack();

console.log(myStack.peek()) //undefined, it's ok since we have nothing in the array

myStack.push(1);
console.log(myStack.peek()) // 1 

myStack.push(2);
console.log(myStack.peek()) // 2, now it's working properly
```

Finally, the `pop()` method:

```typescript
  public pop = (): number => {
    const removeIndex = this.length - 1;
    const currentLast = this.data[removeIndex]; //we grab a reference of the value before we delete it, or we would lose the actual data.

    delete this.data[removeIndex];
    this.length--;

    return currentLast;
  };
```

The `delete` keyword is used to remove an item from a specific index in an array. Notice how we decremented the `length` property after deleting, otherwise we would have similar problems to what happened when we implemented `push()`. Now, let's test everything.

```typescript
const myStack = new Stack();

console.log(myStack.peek()); //undefined, it's ok since we have nothing in the array

myStack.push(1);
console.log(myStack.peek()); // 1

myStack.push(2);
console.log(myStack.peek()); // 2

console.log(myStack.pop()); // 2, remember, pop() returns the value it deletes
console.log(myStack.peek()); // 1 , since we just deleted 2

console.log(myStack.pop()); // 1
console.log(myStack.peek()); // undefined, since 1 was the last value present
```

We've done it! We now have a Stack class.

Now, you might ask "could we not have done it using just an array?". After all, the array primitive in JS provides all the methods we just implemented, and even if it didn't we could have just used an array and played around with indices instead of this whole OOP stuff. And the answer is... yes!

## Theory time

Classes and objects do not provide any new functionality per se, they just make it easier to group together variables and functions that are related to the same concept, and restrict access to stuff that doesn't fit in our definition of that concept

While the array we hold internally in the `data` property could just be used by itself to achieve the same results, we say that the `Stack` class provides an interface to interact with that array in a certain manner. We define a set of functions that describe the common operations someone might need when working with our class, we implement them, and then we let those functions be the only way someone can interact with the stuff inside. Our `.data` property is `private` and the only way to change what is inside it is through the `push()` and `pop()` functions. So, even though yes, it is an array, it _**behaves**_ like our concept of a `Stack` (this is why we say that methods define the behaviour of an object).

It is also a really nice way of abstracting away code that is hard (or cumbersome) to write. Nothing we did here is very complex, but you can immagine writing this in a lower level language where you have to keep track of memory allocation, or in some more complex classes (like the LinkedList you will implement later) where you might need to provide functionality like sorting. A decent analogy is driving. You don't need a PhD in mechanical physics to drive a car, though you do need it to build one. You just need to know that in order to go faster, you push the gas pedal more, and if you want to go left, you turn the wheel left. In a similar way, methods of objects can hide away very complex algorithms and just provide a simple interface to use them. Take sorting for example. Sorting algorithms can be very complex and not everyone can (or should) implement them. So the class just provides a `.sort()` method, someone with experience writes it, then anyone using the class can just say `object.sort()` and be done.

## Spicing it up

Ok, enough theory. Let's try out some more cool class stuff by adding functionality to our `Stack`.

The first thing that comes to mind is that our stack now only works with numbers. We could maybe write another `StringStack` class that works with strings by having the `.data` field be a string array, and then having `push()` accept a `string` parameter and `pop()` and `peek()` return a `string` value.

```typescript
  class StringStack {
    private length: number;
    private data: string[];

    ...
  }
```

But that would be very cumbersome. Each time we add new stuff to our `Stack`, or whenever we modify it, we need to do the exact same thing to our `StringStack`. And even worse, what if after that, we want a stack that works with `boolean` values. We add a 3rd class to our issues above? And then add a 4th type after that and so on.

This just won't do. If only there was a way to express that our `Stack` can work with multiple data types...

## Generics

Had you worried there for a minute, didn't I? It turns out that this problem is quite common, so there is a solution provided to you out of the box. You can think of generics like variables for data types. They are written between angle brackets (`< >`) after the name of the class, and while not strictly necessary, it is customary to name type variables with single upper case letters (`T`, `U` and `P` being very common). But if you have a lot of them, or the code would read better if you gave them long names, feel free to do so. Okay, let's add it to our class!

```typescript
class Stack<T> {
  private length: number;
  private data: T[];

  constructor() {
    this.length = 0;
    this.data = [];
  }

  ...

  public push = (val: T): void => {
    ...
  };

  public pop = (): T | undefined => {
    ...
  };

  public peek = (): T | undefined => {
    ...
  };
}
```

But what does this all mean? Well, now when we instantiate the class, we need to give it a concrete type.

```typescript
  const myStack = new Stack<number>();
```

Now, wherever our class code had the generic type `T`, our `myStack` object will have concrete type `number`. If you try to use `push()` with something other than a number, the typescript compiler will yell at yo.

```typescript
  const myStack = new Stack<number>();
  myStack.push("str") // this will give the error message "Argument of type 'string' is not assignable to parameter of type 'number'."
```

In fact, if you hover over the `push()` method, it will show it's signature something along the lines of `(val: number) => void`, and this is true for any place where the T variable appeared. 

This obviously works with any other concrete type, like `string` or `boolean`, not only `number`.

```typescript
  const nbStack = new Stack<number>();
  nbStack.push(4);
  console.log(nbStack.peek()) // 4

  const strStack = new Stack<string>();
  strStack.push("asd");
  console.log(strStack.peek()) // asd

  const strStack = new Stack<boolean>();
  strStack.push(false);
  console.log(strStack.peek()) // false
```

In fact, this works with **any** data type, not only primitives.

```typescript
  const tupleStack = new Stack<[string, number]>();
  tupleStack.push(["four", 4]);
  console.log(tupleStack.peek()) // [four, 4]

  const arrayStack = new Stack<number[]>();
  arrayStack.push([1, 2, 3]);
  console.log(arrayStack.peek()) // [1, 2, 3]
```

It even works with other classes we or others define!

```typescript
class Animal {
  public name: string;

  constructor(name?: string){
    this.name = name ? name : "Fluffy";
  }
}

const animalStack = new Stack<Animal>();
animalStack.push(new Animal("Killa"));
console.log(animalStack.peek().name) // Killa
```

Now, this is very cool. But can we avoid having to write the concrete type every time we want to create an object? Unfortunately, yes. At least for now. Most of the times when we declare generics, typescript can infer the type without us telling the compiler explicitly. Consider this example (also, generics are not a feature specific to classes. You can use them in stand alone functions, with the same angle bracket notation)

```typescript

const doStuff = <T> (val: T): T => {
  console.log(val);
  return val;
}

doStuff(3);
```

If you hover over the `doStuff(3)` function call, you will see that the compiler has infered that it is of type `doStuff<number>(val: number) => number`, without us having to explicitly write `doStuff<number>(3)`. This is because it sees that 3 is a number, and since the parameter was of generic type `T`, `T` becomes number everywhere. But our class is a bit different. If you look carefully

```typescript
class Stack<T> {
  private length: number;
  private data: T[];

  constructor() {
    this.length = 0;
    this.data = [];
  }
  ...
}
```

When we say `new Stack()`, the `constructor()` function is called. Immediately after instantiation, the compiler needs to give `T` a concrete type. But inside the constructor, we just set `data` to be an empty array. We don't actually provide a value that typescript can look at and say "Hey, this is a `number` (or `string` or whatever)". So we need to help the compiler a bit, and tell it what we want `T` to be.

## Sugaring

Enough with generics for now. Let's add some more bells and whistles to our class. While `Stack` is complete in terms of what it is conceptually required, we could provide some helper methods that make it easy to do some common stuff that people might want to do. For example, it is conceivable that someone might want to change all the values inside. Now, they could obviously just continually `pop()` it inside a loop and add all the items in an array, modify the items and then `push()` them back in. But that seems really cumbersome. Even more so, on the inside, we have access to the actual array, and it would be easy for us to, say, just `map()` some function over the items. Now, we can't call our function `map`, because `map`, by definition, should return a copy of the collection, and we want to modify it in place. So we will call the method `traverse`.

```typescript
class Stack<T> {
  private length: number;
  private data: T[];

  constructor() {
    this.length = 0;
    this.data = [];
  }
  ...

  public traverse = (fn: (i: T) => T): void => {
    const newData = this.data.map((i) => fn(i));
    this.data = newData;
  };
}

const nbStack = new Stack<number>();
nbStack.push(4);
console.log(nbStack.peek()); // 4
nbStack.traverse((i) => i + 1);
console.log(nbStack.peek()); // 5
```

Notice the signature of what we added: `public traverse = (fn: (i: T) => T): void`. It sais that `traverse` takes a function (called here `fn`), that itself accepts an item of type `T` and returns an item of type `T`. This is the same `T` that we defined at the start of the class, which means that for the `Stack<number>()`, `fn` will be `(i: number): number`. Then it just maps over the current data with that function (and again, in our case, `data` is a `number[]`), and sets the `data` field to be the new value.

Another common use case we could immagine is someone wanting to keep `pop()` ing of the `Stack` till they find a value that has some property, or empty the stack otherwise. Again, this use case, while not very complicated, should be fairly common, so why not just provide an easy way to do it?

```typescript
class Stack<T> {
  private length: number;
  private data: T[];

  constructor() {
    this.length = 0;
    this.data = [];
  }
  ...
  
  public popTill = (fn: (i: T) => boolean): T | undefined => {
    for (let i = 0; i < this.length; i++) {
      const currentValue = this.pop();
      if (fn(currentValue!)) return currentValue;
    }

    return undefined;
  };
}

const nbStack = new Stack<number>();
nbStack.push(4);
nbStack.push(1);
nbStack.push(8);
nbStack.push(5);
nbStack.push(3);
const firstEven = nbStack.popTill((i) => i % 2 === 0);
console.log(firstEven); // 8
console.log(nbStack.peek()); // 1

```

We won't go over the generic stuff again, since it should be clear by now. The things to note here are the following:

- We use the `pop()` method that we have declared earlier (yes, you can do that, you just have to use the `this` keyword). This is for 2 reasons: We have it, and it would be a shame to write it again, and because we know it already works properly. If we had done everything from scratch, and we would have forgotten to decrement `length` for example, we would have got some really weird bugs.
- We use that weird `!` notation you were told at the start to be really careful with. Why? Well, because the return type of `pop()` is `T | undefined`, because you could use `pop()` on an empty `Stack`. But here, `pop()` is used only if there are values in the `Stack`, so it should be safe assume it's never `undefined`.

## Static

Another functionality we could provide, is allowing the user to generate a `Stack` from some predefined values (basically looping with push). It should be a common scenario to have some default data you want to initialize your `Stack` with. Now, we could obviously do that by adding a parameter to the constructor:

```typescript
  ...

  constructor(defaultVal: T[]){
    this.data = defaultVal
  }

  ...
```

But this leaves us in a situation where when we don't want a default value , we have to instantiate the object with an empty array

```typescript
  const myStack = new Stack<number>([]);
```

And that is less than ideal. This means that we should probably add another method that does it. Let's call that method `from()`

```typescript
  ...

  public from = (defaultValue: T[]): Stack<T> => {
    const newStack = new Stack<T>
    for(const val of defaultValue) {
      newStack.push(val);
    }
    return newStack;
  };

  ...
```

And now we can say:

```typescript
  const myStack = new Stack<number>();
  const actualNewStack = myStack.from([1, 2, 3]);
```

This is... bad. We have several glaring issues: 

- First off, we need to create a stack in order to be able to create a stack
- Second, because of the way `T` is transformed into a concrete type, we can only obtain stacks of the same type as the base one.

Thankfully, there is a way we can call a class method without needing an object of that class: *static methods*

```typescript
  ...

  public static from = <U> (defaultValue: U[]): Stack<U> => {
    const newStack = new Stack<U>
    for(const val of defaultValue) {
      newStack.push(val);
    }
    return newStack;
  };
  ...
```

But, if we don't have an object, how do we call it? Well, from the class itself:

```typescript
  const newStack = Stack.from([1, 2, 3]);
```

Things to note here:

- You can declare a static method with the static modifier. Static methods are called on the class itself.
- Since there is no object, you also do not have available all the methods and properties inside `this`. Static methods are basically normal functions that you can tie to a class because it makes code more understandable. If, for example, we had multiple classes for which we want to add a `from()` "constructor" of this form, this is a method to state which one of the `from()` functions you are talking about.
- Also since there is no object, we do not actually have access to the `T` generic. But, we still want to generate `Stack`s of different types. So we make `from()` itself polymorphic, with the generic type `U`. Notice that unlike the `new` keyword, even if we still use generics, here we do not have to provide the concrete type. This is because typescript can infer it from the parameter.

This about covers the basics. Next up, you will have to use the knowledge gained here to implement a new data type: The StaticArray! Do not feel obligated to memorize this. Instead, use this document as a source of inspiration for when you get stuck. 