
import {
	CHANGE_SEARCH_FIELD,
	GET_ROBOTS_PENDING,
	GET_ROBOTS_SUCCESS,
	GET_ROBOTS_FAILED,
} from "./constants";


import * as reducers from './reducers';



describe('searchRobots', () => {

    const initialSearchState = {
        searchfield: ""
    }

    it('it should return the initial state', () => {

        expect(reducers.searchRobots(undefined, {})).toEqual({ searchfield: "" });
    });


    it('it should handle CHANGE_SEARCH_FIELD', () => {

        expect(reducers.searchRobots(initialSearchState,
            { type: CHANGE_SEARCH_FIELD, payload: 'abc' }))
            .toEqual({ searchfield: "abc" });
    });




})






describe('fetchRobots', () => {

    const initialfetchState = {
        robots: [],
        isPending: false,
        error: ""

    }

    it('should return initialState', () => {

        expect(reducers.fetchRobots(undefined, {})).toEqual(initialfetchState);
    });


    it('should handle fetch robots pending', () => {

        expect(reducers.fetchRobots(initialfetchState,
            { type: GET_ROBOTS_PENDING }))
            .toEqual({ ...initialfetchState, isPending: true });
    })


    it('should handle fetch robots success', () => {
        const robots = [{id: 1, name: 'Tamara', email: 'paulorubebe@yahoo.com'}]
        expect(reducers.fetchRobots(initialfetchState,
            { type: GET_ROBOTS_SUCCESS, payload: robots}))
            .toEqual({...initialfetchState, robots, error: ""});
    })
    it('should handle fetch robots failed', () => {

        expect(reducers.fetchRobots(initialfetchState,
            { type: GET_ROBOTS_FAILED, payload: "failed to fetch robots" }))
            .toEqual({ ...initialfetchState, error: "failed to fetch robots", isPending: false });
    })




})