import {Extend} from "../src/Extend";

describe('Extend', () => {
    it('should return obj with same properties', () => {
        let obj = {a: 1};
        let newObj = Extend(obj);

        console.log(newObj);
    });
})