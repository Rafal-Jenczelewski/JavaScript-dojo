/**
 * In this exercise, you need to:
 * Write tests for this function.
 *
 * This function generates random (1-50) words of Lorem Ipsum and then inserts testToInsert in given place.
 * TextToInsert is put between characters, not words.
 *
 * Place can have three values:
 * middle (default) - from index 1 to the end
 * pre - before whole LoremIpsum
 * suf - after whole LoremIpsum
 */

import loremIpsum from 'lorem-ipsum'

export const Insert = function (textToInsert, place = "middle") {
    let length = Math.floor(Math.random() * 50 + 1);

    let lorem = loremIpsum({
        count: length,
        units: 'words'
    });

    let parts = splitIntoParts(lorem.split(""), place);
    return parts[0].join("") + textToInsert + parts[1].join("");
};

function splitIntoParts(text, place) {
    if (place === "pre") {
        return [[], text]
    }
    else if (place === "suf") {
        return [text, []]
    }
    else if (place === "middle") {
        let splitPoint = Math.floor(Math.random() * text.length) + 1;

        let firstPart = text.splice(0, splitPoint);
        let secondPart = text.splice(splitPoint);

        return [firstPart, secondPart]
    }
}
