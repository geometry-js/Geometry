import 'whatwg-fetch';  // this is a polyfill that ensures that fetch works in browsers that doesn't support fetch natively

export function getUsers() {
  return get('users');
}

function get(url) {
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
