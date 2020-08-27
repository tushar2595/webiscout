import { AuthActionTypes } from '../Action/AuthActions';

const defaultAuthState = {

  user: null,


};

const AuthReducer = (state = { ...defaultAuthState }, action) => {

  switch (action.type) {

    case AuthActionTypes.UPDATE_USER_DATA:

      return {
        ...state,
        user: action.user
      }


    default:
      return { ...state };
  }
}

export default AuthReducer;