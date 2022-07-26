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
};


export default (state = initState, action) => {

    // console.log(action)
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
                    ...initState,
             }
             break;
    }
    return state;
}