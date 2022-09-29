/**
 * Your job is to implement a static array. A staic array is an array that has
 * fixed length, which you declare when you instantiate it. Actually, in lower
 * level languages, Static Array is the first array type you implement, and only
 * after can you have Dynamic Arrays (like the one you keep using here in TS,
 * where you don't have to know it's length beforehand).
 *
 * Since it needs to be fixed length, this means that static arrays are sparse.
 * Sparse means that there can be indexes where there is nothing (or undefined).
 *
 * const a = new StaicArray(3) // [undefined, undefined, undefined];
 * a.set(1, 2) // [undefined, 2, undefined];
 * a.set(0, 1) // [1, 2, undefined];
 * a.set(2, 3) // [1, 2, 3];
 * a.unset(1) // [1, undefined, 3];
 */

export class StaticArray {
  /**
   * @func from
   * Static member. Creates a new Static Array with the items, size and type of
   * the provided array
   * @arg {T[]} arr the array from which to build
   * @returns {StaticArray<T>} the new StaticArray
   */
  //------------------------------Your code here--------------------------------
  /**
   * @func getAt
   * Retrieves the item at the specified index, or undefined if it is empty
   * @arg {number} index the index from where to retrieve
   * @returns {T?} Whatever is present at that index
   */
  //------------------------------Your code here--------------------------------
  /**
   * @func setAt
   * Sets the specified index to be the value provided in newValue. If something
   * is already present at index, overwrites it.
   * @arg {number} index the index where to set
   * @arg {T} newValue the value to set at index
   * @returns {boolean} if the operation succeeded
   */
  //------------------------------Your code here--------------------------------
  /**
   * @func removeAt
   * Removes the item at the specified index. If index is currently empty, does
   * nothing.
   * @arg {number} index the index to remove
   * @returns {boolean} if the operation succeeded
   */
  //------------------------------Your code here--------------------------------
  /**
   * @func fillWith
   * Fills the array with the specified value. Any values currently present will
   * be overwritten. Starts at start startIndex, ends at endIndex
   * @arg {T} value the item with which to fill the array
   * @arg {number} startIndex start index (inclusive), default 0
   * @arg {number} endIndex end index (exclusive), default arr.length
   * @returns {boolean} if the operation succeeded
   */
  //------------------------------Your code here--------------------------------
  /**
   * @func fillEmptyWith
   * Fills the empty values in the array with the specified value. Starts at
   * start startIndex, ends at endIndex
   * @arg {T} value the item with which to fill the array
   * @arg {number} startIndex start index (inclusive), default 0
   * @arg {number} endIndex end index (exclusive), default arr.length
   * @returns {boolean} if the operation succeeded
   */
  //------------------------------Your code here--------------------------------
  /**
   * @func clear
   * Clears the array, removing all the items currently present.
   * @returns {boolean} if the operation succeeded
   */
  //------------------------------Your code here--------------------------------
  /**
   * @func forEach
   * Takes the provided function and runs it over every item in the array.
   * @arg {(element: T?, index: number => void} callbackfn the function to run
   * on each element
   */
  //------------------------------Your code here--------------------------------
  /**
   * @func map
   * Takes the provided function and applies it on each individual item in the
   *  array. Returns a new array with the results. This is the immutable version
   *  of traverse
   * @arg {(element: T?, index: number) => U} callbackfn the function to map
   * with
   * @returns {StaticArray<U>} the new array
   */
  //------------------------------Your code here--------------------------------
  /**
   * @func traverse
   * Takes the provided function and modifies the current array by applying the
   *  the function on each element. The is the mutable version of map
   * @arg {(element: T?, index: number) => T?} callbackfn the function to
   * traverse with
   */
  //------------------------------Your code here--------------------------------
  /**
   * @func filter
   * Takes the provided predicate function and returns a new array that contains
   *  only the items that pass the test. This is the immutable version of keep
   * @arg {(element: T?, index: number) => boolean} callbackfn the predicate to
   * test with
   * @returns {StaticArrray<T>} the new array
   */
  //------------------------------Your code here--------------------------------
  /**
   * @func keep
   * Takes the provided predicate function and removes all elements that do not
   * pass the test. This is the mutable version of filter
   * @arg {(element: T?, index: number) => boolean} callbackfn the predicate to
   * test with
   */
  //------------------------------Your code here--------------------------------
  /**
   * @func concat
   * Returns a new array that is the concatenation of this one and the one
   * provided as an argument. This array remains unchanged.
   * @arg {StaticArray<T>} array the array to concatenate with, this has to be
   * of the same type as the array that you call concatenate on.
   * @returns {StaticArray<T>} the new array
   */
  //------------------------------Your code here--------------------------------
  /**
   * @func find
   * Find and return the first element that passes the test provided by the
   * callbackfn predicate, or undefine if none pass
   * @arg {(element: T?, index: number) => boolean} callbackfn predicate
   * @returns {T?} the element
   */
  //------------------------------Your code here--------------------------------
  /**
   * @func findIndex
   * Find and return the index of first element that passes the test provided by
   * the callbackfn predicate, or undefine if none pass
   * @arg {(element: T?, index: number) => boolean} callbackfn predicate
   * @returns {number?} the index
   */
  //------------------------------Your code here--------------------------------
  /**
   * @func findLast
   * Find and return the last element that passes the test provided by the
   * callbackfn predicate, or undefine if none pass
   * @arg {(element: T?, index: number) => boolean} callbackfn predicate
   * @returns {T?} the element
   */
  //------------------------------Your code here--------------------------------
  /**
   * @func findLastIndex
   * Find and return the index of last element that passes the test provided by
   * the callbackfn predicate, or undefine if none pass
   * @arg {(element: T?, index: number) => boolean} callbackfn predicate
   * @returns {number?} the index
   */
  //------------------------------Your code here--------------------------------
  /**
   * @func defragment
   * Defragments the array, removing any empty spaces between items
   * @returns {boolean} whether the operation was successfull
   */
  //------------------------------Your code here--------------------------------
  /**
   * @func includes
   * Determines whether the array contains a certain value among it's entries,
   * returning true or false as appropriate. The second parameter optionally
   * tells the function from which index to start searching, 0 if it's missing
   * @arg {T} searchElement the element to search for
   * @arg {number?} fromIndex the index from which to begin the search
   * @returns {boolean} true if the value is found, false otherwise
   */
  //------------------------------Your code here--------------------------------
  /**
   * @func every
   * Tests whether all elements in the array pass the test implemented by the
   * provided predicate function. Returns a boolean value
   * @arg {(element: T?, index: number) => boolean} callbackfn predicate
   * @returns {boolean} true if callbackfn returns thruthy values for all items
   */
  //------------------------------Your code here--------------------------------
  /**
   * @func some
   * Tests whether at least one element in the array passes the test implemented
   * by the provided predicate function. Returns a boolean value
   * @arg {(element: T?, index: number) => boolean} callbackfn predicate
   * @returns {boolean} true if callbackfn returns thruthy values for at least
   * one element
   */
  //------------------------------Your code here--------------------------------
  /**
   * @func reduce
   * Execute the reducer function on each element in the array, in order,
   * in each iteration passing the previous return value as the current
   * accumulator. The return of the last application will be the return of the
   * reduce function. In the first iteration, initialValue will be the
   * accumulator. If no initialValue is provided, callbackfn will be called
   * starting from the second element, and the first item being the first
   * accumulator. When no initialValue is provided, the return type of reduce
   * will be the same as the type of the items in the array.
   * @arg {(accumulator: U, element: T?, index: number) => U} callbackfn reducer
   * @arg {U?} initialValue the first accumulator. This will determine the data
   *  type of the return
   * @returns {U | T} the return of the last iteration
   */
  //------------------------------Your code here--------------------------------
}
