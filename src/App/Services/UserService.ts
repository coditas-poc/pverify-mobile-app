import HTTPService from './HttpService';

/**
 * This is an example of a service that connects to a 3rd party API.
 *
 * Feel free to remove this example from your application.
 */

async function fetchUser() {
  // Simulate an error 50% of the time just for testing purposes
  if (Math.random() > 0.5) {
    return new Promise(function(resolve, reject) {
      resolve(null);
    });
  }

  let randomNumber = Math.floor(Math.random() / 0.1) + 1;

  try {
    const response = await HTTPService.get(randomNumber.toString());
    if (response) {
      return response;
    }
  } catch (e) {
    return null;
  }
}

export const userService = {
  fetchUser,
};
