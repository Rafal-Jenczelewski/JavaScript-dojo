/**
 * In this exercise, you need to:
 * Write a function that will return data about given user from almost the same mock as last time.
 *
 * This function should cache data that was already requested.
 *
 * Return value should be just user object taken from mock.
 */

import {fetch} from './FetchMock'

let cache = {};

export const Cache = async function (name) {
    if (!cache[name]) {
        let response = await fetch();
        let result = await response.json();
        cache[name] = result.results.find(u => u.name === name);
    }

    return cache[name];
};