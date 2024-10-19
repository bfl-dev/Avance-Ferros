import axios from 'axios';

export default class UserApi {



  static getUser(userId) {
    return axios.get('http://localhost:3000/userHead/' + userId);
  }

  static postUser(user, email, pass) {
    const data = {
      name: user,
      email: email,
      pass: pass
    };
    return axios.post('http://localhost:3000/userHead', data);
  }

  static logUser(email, pass) {
    console.log(email,pass)
    const api_req = 'http://localhost:3000/userHead?email=' + email + '&pass=' + pass;
    console.log(api_req)
    return axios.get(api_req);
  }
}


