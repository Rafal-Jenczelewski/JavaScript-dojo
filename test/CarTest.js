import {Car} from "../src/Car";

describe('Car', () => {
    let Car = undefined;

    beforeEach(function () {
        car = Car(100, 10);
    });

    it('returns object with proper properties', () => {
        expect(car).toEqual({getFuelLevel: function(){}, driveFor: function(){}})
    });

    it('returns 100% fuel at begging', () => {
        expect(car.getFuelLevel()).toEqual('100%');
    });

    it('has 10% less fuel after driving for 1 km', () => {
        car.driveFor(1);
        expect(car.getFuelLevel()).toEqual('90%');
    });

    it('has 0% fuel after driving for 11 km', () => {
        car.driveFor(11);
        expect(car.getFuelLevel()).toEqual("0%");
    })
})