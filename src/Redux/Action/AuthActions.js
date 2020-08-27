export const AuthActionTypes = {

  UPDATE_USER_DATA: 'UPDATE_USER_DATA',

}



export const updateUser = (user) => {
  return {
    type: AuthActionTypes.UPDATE_USER_DATA,
    user
  };

}





