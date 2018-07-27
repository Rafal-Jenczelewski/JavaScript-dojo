/**
 * In this exercise, you need to:
 * Modify this function so it makes a request to random user api to fetch 20 users.
 * You need to then filter those users according to filters added in object passed to function.
 * Those filters go as follows:
 *  gender: can be 'female' or 'male'
 *  name: name should contain given string
 *  age: person should not be older than specified
 *
 * Filter object can contain any number of those filters.
 *
 * To make request:
 *  we would use fetch('randomuser.me/api/?results=20),
 *  but we are in IDE adn do not have access to engine with XHR request,
 *  so instead we will use my mock.
 *
 *  Calling fetch() will return a promise representing typical response of web API.
 *  This promise will resolve to an object with response, but no body.
 *  To get body of response you need to call its json() method, which will return a Promise resolving to
 *  object with field results containing users.
 *
 *  This call will return promise.
 */
import {fetch} from 'FetchMock'

export const FilterUsers = function(filters) {

};
