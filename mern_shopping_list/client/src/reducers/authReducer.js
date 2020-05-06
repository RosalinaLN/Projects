const initState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'USER_LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'USER_LOADED':
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: action.payload
            }
        case 'LOGIN_SUCCESS':
        case 'REGISTER_SUCCESS':
            //set the token
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                ...action.payload   
            }
        case 'AUTH_ERROR':
        case 'LOGIN_FAIL':
        case 'LOGOUT_SUCCESS':
        case 'REGISTER_FAIL':
            //clear the token in the localStorage
            localStorage.removeItem('token');
            return {
                ...state,
                isLoading: true,
                isAuthenticated: false,
                user: null,
                token: null
            }
        default:
            return state
    }
}

export default authReducer;