import ExampleCreators from 'Stores/Example/ActionTypes';
import {userService} from 'Services';

export function fetchUser() {
  return async function(dispatch: (arg0: any) => void) {
    dispatch(ExampleCreators.fetchUserLoading());
    try {
      const user = await userService.fetchUser();
      if (user) {
        dispatch(ExampleCreators.fetchUserSuccess(user));
      }
    } catch (e) {
      dispatch(
        ExampleCreators.fetchUserFailure(
          'There was an error while fetching user informations.',
        ),
      );
    }
  };
}
