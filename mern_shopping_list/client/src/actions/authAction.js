import axios from 'axios';
import { returnErrors } from './errorAction';

//register a new user
export const register = ({name,email,password}) => dispatch => {
    //header
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //request body
    const body = JSON.stringify({name,email,password})

    axios.post('/api/users', body, config)   //don't forget to send the item
    .then(res => dispatch({
        type: 'REGISTER_SUCCESS',
        payload: res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status,'REGISTER_FAIL'));
        dispatch({
            type: 'REGISTER_FAIL'
        })
    })
}

//login
export const login = ({email,password}) => dispatch => {
    //header
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //request body
    const body = JSON.stringify({email,password})

    axios.post('/api/auth', body, config)   //don't forget to send the item
    .then(res => dispatch({
        type: 'LOGIN_SUCCESS',
        payload: res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status,'LOGIN_FAIL'));
        dispatch({
            type: 'LOGIN_FAIL'
        })
    })
}

//logout
export const logout = () => {
    return {
        type: 'LOGOUT_SUCCESS'
    }
}

//check token and load user
export const loadUser = () => (dispatch, getState) => {
    //user loading
    dispatch({
        type: 'USER_LOADING'
    })

    axios.get('/api/auth/user', tokenConfig(getState))
    .then(res => {
        dispatch({
            type: 'USER_LOADED',
            payload: res.data
        })
    })
    .catch(err => {
        //return some error from errorAction
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: 'AUTH_ERROR'
        })
    })

}

//setup config header and token
export const tokenConfig = (getState) => {
    //get token from localStorage
    const token = getState().auth.token;  //this is from state -> auth (remember we set auth in rootReducer) -> token (from authReducer)

    //header
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
}