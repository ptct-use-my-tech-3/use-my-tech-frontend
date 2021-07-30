import {axiosWithAuth} from '../helpers/axiosWithAuth'

import{
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
    REGISTER_SUCCESS,
    REGISTER_ERROR
} from '../actions/types';

//checktoken & load user

export const loadUser = ()=> (dispatch, getState) =>{
    //User Loading
    dispatch({ type: USER_LOADING});

    //Get token from localstorage
    const token = getState().auth.token;

    //header
    const config ={
        headers: {
            "Content-type" : "application/json"
        }
    }

    axiosWithAuth()
        .get('')

}