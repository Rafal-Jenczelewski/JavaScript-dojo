import {Cache} from "../src/Cache";

describe('Cache', () => {
    it('should return proper user', async () => {
        let user = await Cache('John Moore');

        expect(user).toEqual({
            name: "John Moore",
            age: 20,
            gender: 'male'
        })
    });

    it('should return undefined in case of empty string', async () => {
        let user = await Cache('');

        expect(user).toBeFalsy();
    });

    it('should return undefined when asked about nonexistent user', async () => {
        let user = await Cache('asdasda');

        expect(user).toBeFalsy();
    });

    it('should return same user two times if asked', async () => {
        let user1 = await Cache('John Lee');
        let user2 = await Cache('John Lee');

        expect(user1).toBe(user2);
    });

    it('should download user only once', async () => {
        let user = await Cache('Maura Smith');
        user = await Cache('Maura Smith');
        expect(user).toEqual({
            name: "Maura Smith",
            age: 12,
            gender: 'female'
        })
    }, 1100);
});