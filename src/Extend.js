/**
 * RUN NPM INSTALL BEFORE THIS EX!!!!!!!!!!!!!!!
 *
 * In this exercise, you need to:
 * Write a function that changes prototype of given object to object of class Animal.
 * Animal class has those methods
 *  eat => "I'm eating"
 *  walk => "I'm walking"
 *
 *  This function should return new object without modifying given object.
 */

export const Extend = function(obj) {
    let newObj = {...obj};
    newObj.__proto__ = new Animal();
    return newObj;
};

class Animal {
    eat() {
        return "I'm eating";
    }

    walk() {
        return "I'm walking";
    }
}