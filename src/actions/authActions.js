import {axiosWithAuth} from '../helpers/axiosWithAuth'
import { returnErrors } from './errorActions';

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
    if(token){
        config.headers['x-auth-token'] = token;
    }

    axiosWithAuth()
        .get('', config)
            .then( res => dispatch({
                type: USER_LOADED,
                payload: res.data
            }))
            .catch( err =>{
                dispatch(returnErrors(err.res.data, err.res.status))
                dispatch({
                    type: AUTH_ERROR
                })
            })

}