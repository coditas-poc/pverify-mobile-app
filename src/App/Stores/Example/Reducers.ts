/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import {INITIAL_STATE} from './InitialState';
import {createReducer} from 'reduxsauce';
import {ExampleTypes} from './ActionTypes';

export const fetchUserLoading = (state: any) => ({
  ...state,
  userIsLoading: true,
  userErrorMessage: null,
});

export const fetchUserSuccess = (state: any, {user}: any) => ({
  ...state,
  user: user,
  userIsLoading: false,
  userErrorMessage: null,
});

export const fetchUserFailure = (state: any, {errorMessage}: any) => ({
  ...state,
  user: {},
  userIsLoading: false,
  userErrorMessage: errorMessage,
});

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [ExampleTypes.FETCH_USER_LOADING]: fetchUserLoading,
  [ExampleTypes.FETCH_USER_SUCCESS]: fetchUserSuccess,
  [ExampleTypes.FETCH_USER_FAILURE]: fetchUserFailure,
});
