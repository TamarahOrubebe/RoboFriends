import {
	CHANGE_SEARCH_FIELD,
	GET_ROBOTS_PENDING,
	GET_ROBOTS_SUCCESS,
	GET_ROBOTS_FAILED,
} from "./constants";


import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import nock from 'nock';




const mockStore = configureMockStore([thunkMiddleware]);


describe('changeSearchField', () => {
    it('should return an action to search robots', () => {

        const text = 'Hello World';
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        };


        expect(actions.changeSearchField(text)).toEqual(expectedAction);
    })
});

    

describe('getRobots', () => {
		

    it('should handle getRobots api call', () => {

        const store = mockStore();

        store.dispatch(actions.getRobots());

        const action = store.getActions();

        const expectedAction = {
            type: GET_ROBOTS_PENDING
        };

        expect(action[0]).toEqual(expectedAction);
    });



    it('should handle getRobots api call', () => {
       
        const mockRobots = [
            {
                id: 1,
                name: 'Tamara',
                email: 'paulorubebe@gmail.com'
            },
            {
                id: 2,
                name: 'Godwin',
                email: 'gideho@gmail.com'
            },

        ]

        const store = mockStore();

        store.dispatch({
            type: GET_ROBOTS_SUCCESS,
            payload: mockRobots,
        });
			
        store.dispatch(actions.getRobots());
        
                const action = store.getActions()[0];

                console.log(action);
                const expectedAction = {
                    type: GET_ROBOTS_SUCCESS,
                    payload: mockRobots,
                };

        expect(action).toEqual(expectedAction);
           

       
    });



    it('should handle getRobots api call', () => {
        const error = "failed to fetch robots";
      
        const store = mockStore();


        store.dispatch({
            type: GET_ROBOTS_FAILED,
            payload: error,
        });

        store.dispatch(actions.getRobots());
        const action = store.getActions()[0];
        
        console.log(action)
        const expectedAction = {
            type: GET_ROBOTS_FAILED,
            payload: error
        }

        
        
        expect(action).toEqual(expectedAction);

        
        
        

       
    });




})