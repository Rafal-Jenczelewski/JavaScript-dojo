import {WordCounter} from "../src/WordCounter";

describe('WordCounter', () => {
    it('should return empty object when given empty array', () => {
        let counter = WordCounter([]);
        expect(Object.keys(counter).length).toEqual(0);
    });

    it('should return object with one property when array is same word many times', () => {
        let words = ['word1', 'word1', 'word1'];
        let counter = WordCounter(words);
        expect(counter).toHaveProperty('word1', 3);
    });

    it('should return object with many properties when array has many words', () => {
        let words = ['word1', 'word2', 'word1', 'word3', 'word2'];
        let counter = WordCounter(words);
        expect(counter).toHaveProperty('word1', 2);
        expect(counter).toHaveProperty('word2', 2);
        expect(counter).toHaveProperty('word3', 1);
    });
})