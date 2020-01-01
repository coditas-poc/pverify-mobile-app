import {fetchUser} from 'Actions';

import NavigationService from 'App/Services/NavigationService';

export function startup() {
  return async function(dispatch: (arg0: any) => void) {
    dispatch(fetchUser());

    // Add more operations you need to do at startup here
    // ...

    // When those operations are finished we redirect to the main screen
    NavigationService.navigateAndReset('MainScreen');
  };
}
