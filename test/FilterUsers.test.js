import {FilterUsers} from "../src/FilterUsers";
import {results} from "../src/FetchMock";

describe('FilterUsers', () => {
    it('should return all results when given no filters', async () => {
        let users = await FilterUsers();

        expect(users.length).toBe(results.length)
    });

    describe('filtering by age', () => {
        let valuesToTest = [20, 40, 45];

        valuesToTest.forEach(async number => {
            it(`should filter out older than ${number}`, async () => {
                let users = await FilterUsers({age: number});

                for (const user of users) {
                    expect(user.age).toBeLessThanOrEqual(number);
                }
            });
        })
    });

    describe('filtering by name', () => {
        let valuesToTest = ['John', 'Lee', 'Smith'];

        valuesToTest.forEach(async name => {
            it(`should filters out names not containing ${name}`, () => {
                let users = FilterUsers({name});

                for (const user of users) {
                    expect(user.name).toContain(name);
                }
            });
        })
    });

    describe('filtering by gender', () => {
        let valuesToTest = ['male', 'female'];

        valuesToTest.forEach(async gen => {
            it(`should filter out ${gen}s`, () => {
                let users = FilterUsers({gender: gen});

                for (let user of users) {
                    expect(user.gender).toBe(gen);
                }
            });
        })
    })
});