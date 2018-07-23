/**
 * In this exercise, you need to:
 * Modify this function to return object (it WILL NOT be used as constructor) that mimics class with private fields.
 * It should look like this:
 *  {
 *      getFuelLevel(),
 *      driveFor(km)
 *  }
 * GetFuelLevel() - returns how much fuel is left in tank in percent
 * DriveFor(km) - should burn fuel according to fuelBurnForKm
 *
 * This object CANNOT have properties maxFuel, fuelBurtPerKm and currentFuel.
 *
 * Hint: use clousures.
 */

export const Car = function(maxFuel, fuelBurtPerKm) {
    let currentFuel = maxFuel;

    return {
        getFuelLevel: () => (currentFuel/maxFuel * 100) + "%",
        driveFor: km => {
            currentFuel -= fuelBurtPerKm * km;
            if (currentFuel < 0)
                currentFuel = 0;
        }
    }
};