import axios from "../helpers/axios";
import { authConstants, userConstants } from "./constants";

export const signup = (user) => {

    console.log(user)

    return async (dispatch) => {

        dispatch({ type: userConstants.USER_REGISTRATION_REQUEST, })
        const res = await axios.post('admin/signup', {
            ...user
        })
      if (res.status === 200) {
            const { message } = res.data;
            // localStorage.setItem('token', token);
            // localStorage.setItem( 'user',JSON.stringify(user));
            dispatch({
                type: userConstants.USER_REGISTRATION_SUCCESS,
                payload: { message }
            });
        }
        else {
            if (res.status === 400) {
                dispatch({
                    type: userConstants.USER_REGISTRATION__FALIURE,
                    payload: { error: res.data.error }
                });
            }
        }

    }
}