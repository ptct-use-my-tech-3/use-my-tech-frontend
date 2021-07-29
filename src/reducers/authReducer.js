import React from 'react';

export const intitialState ={
    email: '',
    password: '',
    loading: false,
    token: '',
    errorMessage: null
}



export const authReducer = (intitialState, action) => {
    switch(action.type){
        case 'REQUEST_LOGIN':
            return{
                ...intitialState,
                loading: true,
            };
        case 'LOGIN_SUCCESS':
            return{
                ...intitialState,
                email: action.payload.email,
                password: action.payload.password,
                token: action.payload.token,
                loading: false,
            };
        case 'LOGOUT':
            return{
                ...intitialState,
                email: '',
                token: ''
            };
        case 'LOGIN_ERROR':
            return{
                ...intitialState,
                loading: false,
                errorMessage: action.error
            };
        default:
            return{
                intitialState
            }
    }
    
}
