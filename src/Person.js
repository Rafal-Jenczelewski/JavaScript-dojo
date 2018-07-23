/**
 * In this exercise you need to modify this function so it functions as constructor.
 * It needs to return object like this:
 * {
 *  firstName,
 *  secondName,
 *  age,
 *  isLegalAge
 *  }
 * Properties firstName, secondName and age should be taken from call.
 * Property isLegalAge should be function returning true when age is over 18, false otherwise.
**/
export const Person = function(firstName, secondName, age) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
    this.isLegalAge = () => age > 18;
};
