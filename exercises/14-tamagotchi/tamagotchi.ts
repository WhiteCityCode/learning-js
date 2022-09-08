/**
 * You have a bunch of pets, each with their own preference when it comes to 
 * food, namely:
 *  
 *   1.  Cats, which eat "mice"
 *   2.  Dogs, which eat "cats" (eew)
 *   3.  Guinea pigs, which eat "fruit"
 *   4.  Chickens, which eat "worms"
 *   5.  Ducks, which eat "bread"
 * 
 * All of these animals are represented by the class `Pet`. If you have an 
 * instance of this class, you can do several things:
 * 
 * const cat = new Pet("cat"); // get a new cat pet
 * console.log(cat.getType()); // prints "cat"
 * console.log(cat.isFed()); // prints "false", the cat wasn't yet fed
 * 
 * cat.feed("fruit"); 
 * console.log(cat.isFed()); // prints "false", cats don't eat fruit
 * cat.feed("mice"); 
 * console.log(cat.isFed()); // prints "true", your cat just ate a mice
 * 
 * Considering the above, implement the function below. It receives an instance
 * of the `Pet` class, and feeds it according to it's type. 
 * 
 * The function shouldn't return anything, only feed the pet. 
 */

import { Pet } from "./pets.ts";

export const feed = (pet: Pet): void => {
  // Food please
}  
