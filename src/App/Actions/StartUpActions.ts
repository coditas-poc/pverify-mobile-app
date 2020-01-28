import NavigationService from 'App/Services/NavigationService';
import { Dispatch } from 'react';

export function startup() {
  return async function (dispatch: Dispatch<any>) {
    NavigationService.navigateAndReset('Signupscreen');
  };
}
