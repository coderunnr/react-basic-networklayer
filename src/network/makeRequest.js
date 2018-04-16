import axios from 'axios';

const INITIAL_STATE = {
    'Content-type': 'application/json'
};

const requestSuccess = (response, onSuccess) => {
    onSuccess(response.data);
}

const makePOSTRequest = (url, headers, params, onSuccess, onFailure) => {

    headers = [...INITIAL_STATE, headers];

    axios.put(url, params, headers)
    .then(response => requestSuccess(response, onSuccess))
    .catch(error => onFailure(error));
};

const makeGETRequest = (url, params, onSuccess, onFailure) => {

    axios.get(url, params)
    .then(response => requestSuccess(response, onSuccess))
    .catch(error => onFailure(error));
};

export { makeGETRequest, makePOSTRequest };