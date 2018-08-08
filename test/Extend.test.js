import {Extend} from "../src/Extend";

describe('Extend', () => {
    it('should return obj with same properties', () => {
        let obj = {a: 1};
        let newObj = Extend(obj);

        expect(newObj).toHaveProperty('a', 1);
    });

    it('should not be the same object', () => {
        let obj = {};
        let newObj = Extend(obj);

        expect(newObj).not.toBe(obj);
    });

    it('should have properties from Animal', () => {
        let obj = {};
        let newObj = Extend(obj);

        expect(newObj).toHaveProperty('eat');
        expect(newObj).toHaveProperty('walk');
    });
});