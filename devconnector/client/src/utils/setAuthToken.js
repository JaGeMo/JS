import axios from 'axios'; // axios allows for setting auth header variables, fetch does const name = (params) => {

const setAuthToken = token => {
  // check token
  if(token) {
    // apply to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // delete if invalid
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;

