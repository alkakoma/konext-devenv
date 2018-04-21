import 'whatwg-fetch';

export function getUsers() {
    return get('users');
}

function get(url) {
    return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

<<<<<<< HEAD
function onError(error) {
    console.log(error); //eslint-disable-line no-console
}
=======
function onError (error) {
    console.log(error);  //eslint-disable-line no-console
}
>>>>>>> 8991a9c823cb5f2c862122f7a530e748f403c52c
