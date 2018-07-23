import {Person} from '../src/Person'

describe("Person", () => {
    let firstName = 'Frank';
    let secondName = 'Smith';

    it('creates object with all fields', () => {
        let person = new Person();
        expect(person).toHaveProperty('firstName');
        expect(person).toHaveProperty('secondName');
        expect(person).toHaveProperty('age');
    });

    it('assigns proper values', () => {
        let age = 18;

        let person = new Person(firstName, secondName, age);
        expect(person.firstName).toEqual(firstName);
        expect(person.secondName).toEqual(secondName);
        expect(person.age).toEqual(age);
    });

    it('checksForLegalAge', () => {
       let person = new Person(firstName, secondName, 17);
       expect(person.isLegalAge()).toBe(false);

       person = new Person(firstName, secondName, 18);
       expect(person.isLegalAge()).toBe(true);
    })
});