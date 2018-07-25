import {Car} from "../src/Car";

describe('Car', () => {
    it('returns object with proper properties', () => {
        let car = Car(100, 10);
        expect(car).toHaveProperty('getFuelLevel');
        expect(car).toHaveProperty('driveFor');

        let keys = Object.keys(car);
        expect(keys.length).toEqual(2);
    });

    it('returns 100% fuel at begging', () => {
        let car = Car(100, 10);
        expect(car.getFuelLevel()).toEqual('100%');
    });

    it('has 10% less fuel after driving for 1 km', () => {
        let car = Car(100, 10);
        car.driveFor(1);
        expect(car.getFuelLevel()).toEqual('90%');
    });

    it('has 0% fuel after driving for 11 km', () => {
        let car = Car(100, 10);
        car.driveFor(11);
        expect(car.getFuelLevel()).toEqual("0%");
    })
})