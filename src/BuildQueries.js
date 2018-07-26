/**
 * This exercise is real-world example taken from CM Rule Editor rewrite.
 * This function accepts array of rules. A rule is object like this:
 *  {
 *      name: string,
 *      owner: string,
 *      date: Date
 *  }
 *
 *  You need to modify this function so it returns array of strings taken from name and owner of rule.
 *  Every rule should generate two strings in returned array - one for name and one for owner.
 */

export const BuildQueries = function (rules) {
    return rules.map(({name, owner}) => Object.values({name, owner})).reduce((a, b) => a.concat(b), []);
};