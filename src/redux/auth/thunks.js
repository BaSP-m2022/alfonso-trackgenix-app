import * as actions from './actions';
import firebase from 'helper/firebase';

export const login = (credentials) => {
  return (dispatch) => {
    dispatch(actions.loginPending());
    return firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(async (response) => {
        const token = await response.user.getIdToken();
        const {
          claim: { role }
        } = await response.user.getIdTokenResult();
        return dispatch(actions.loginSuccess({ role, token }));
      })
      .catch((error) => {
        return dispatch(actions.loginError(error.toString()));
      });
  };
};
