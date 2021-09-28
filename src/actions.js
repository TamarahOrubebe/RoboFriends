import {
    CHANGE_SEARCH_FIELD,
    GET_ROBOTS_PENDING,
    GET_ROBOTS_SUCCESS,
    GET_ROBOTS_FAILED
} from "./constants"

import { apiCall } from "./Api/ApiCall";


export const changeSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
}
);

export const getRobots = () => (dispatch) => {

    dispatch({ type: GET_ROBOTS_PENDING });
    
     apiCall("https://jsonplaceholder.typicode.com/users")
        .then(robots => dispatch({ type: GET_ROBOTS_SUCCESS, payload: robots }))
        .then(error => dispatch({ type: GET_ROBOTS_FAILED, payload: error }));
    
    
    
}