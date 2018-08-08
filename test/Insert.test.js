import {Insert} from "../src/Insert";

describe('Insert', () => {
    let texts = ["test1", "test2", "test3"];

    it('should insert given text at the end with \'suf\' place', () => {
        texts.forEach((text) => {
            let output = Insert(text, "suf");

            expect(output.indexOf(text)).toEqual(output.length - text.length);
        })
    });

    it('should insert given text at the start with \'pre\' place', () => {
        texts.forEach((text) => {
            let output = Insert(text, "pre");

            expect(output.indexOf(text)).toEqual(0);
        })
    });

    it('should insert given text in the middle with \'middle\' and default place', () => {
        texts.forEach((text) => {
            let output = Insert(text, "middle");

            expect(output.indexOf(text)).toBeGreaterThan(0);

            output = Insert(text, "middle");

            expect(output.indexOf(text)).toBeGreaterThan(0);
        })
    });
});