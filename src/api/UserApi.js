import axios from 'axios';

export default class UserApi {



  static getUser(userId) {
    return axios.get('http://localhost:3000/userHead/' + userId);
  }

  static postUser(user, email, pass) {
    const data = {
      user: user,
      email: email,
      pass: pass
    };
    return axios.post('http://localhost:3000/userHead', data);
  }
}


