import { authConstants } from '../actions/constants';

const initState = {
    token: null,
    user: {
        email: '',
        firstName: '',
        lastName: '',
        picture: ' '
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: ''
};


export default (state = initState, action) => {


    switch (action.type) {

        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                // ...action.payload,
                authenticate: true
            }
            break;

        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                authenticate: true,
                authenticating: false
            }
            break;

        case authConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case authConstants.LOGOUT_SUCCESS:
            state = {
                ...initState,
            }
            break;
        case authConstants.LOGOUT_FALIURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;
           
    }
    return state;
}