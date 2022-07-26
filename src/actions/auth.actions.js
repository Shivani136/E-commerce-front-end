import axios from "../helpers/axios";
import { authConstants } from "./constants";

export const login = (user) => {
    console.log(user)
    return async (dispatch) => {
      dispatch({ type: authConstants.LOGIN_REQUEST, })
        const res = await axios.post('admin/signin', {
            ...user
        })
       if (res.status === 200) {
            const { token, user } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem( 'user',JSON.stringify(user));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        }
        else {
            if (res.status === 400) {
                dispatch({
                    type: authConstants.LOGIN_FALIURE,
                    payload: { error: res.data.error }
                });
            }
        }

    }
}

 export const isUserLoggedIn = () => {
            return async dispatch => {
                const token = localStorage.getItem('token')
                const user =JSON.parse(localStorage.getItem('user')) 
                if(token) {
                    dispatch({
                        type: authConstants.LOGIN_SUCCESS,
                        payload: {
                            token, 
                            user
                        }
                    });
                } else {
                    dispatch({
                        type: authConstants.LOGIN_FALIURE,
                        payload: { error: 'Failed to Login' }
                    });
                }
            }
        }

        export const signout = () => {
            return async dispatch =>{
                localStorage.clear();
                dispatch({
                    type: authConstants.LOGOUT_REQUEST,
                    
                })
            }

        }
