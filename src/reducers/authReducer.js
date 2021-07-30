import { CallEnd } from '@material-ui/icons';
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

const initialState ={
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

export default function(state = initialState, action){
    switch(action.type){
        case USER_LOADING:
            return{
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return{
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
                
            };
        case AUTH_ERROR:
        case LOGIN_ERROR:
        case LOGOUT:
        case REGISTER_ERROR:
            return{
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };
        default:
            return state;
    };
}