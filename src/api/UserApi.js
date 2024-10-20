import axios from 'axios';

export default class UserApi {

// TODO: Hacer chequeos para la unicidad de datos.
// TODO: Reordenar y ver que falta.
  static getUser(userId) {
    return axios.get('http://localhost:3000/userHead/' + userId);
  }

  static postUser(user, email, pass) {
    const data = {
      name: user,
      email: email,
      pass: pass,
      points: 0,
      kilometers: 0
    };
    return axios.post('http://localhost:3000/userHead', data);
  }

  static postUserDetails(userId) {
    const api_url = 'http://localhost:3000/userDetail';
    const data = {
      id: userId,
      phone: "0",
      names: "",
      lastNames: "",
      trait: "",
      rut: "",
      bio: "",
      address: "",
      city: "",
      commune: "",
      emergencyContact: "0",
      emergencyContactName: "",
      birthday: "",
      profilePic: "https://picsum.photos/540"
    };
    return axios.post(api_url, data);
  }

  static putUserDetails(userId, details) {
    const api_url = 'http://localhost:3000/userDetail/' + userId;
    return axios.put(api_url, details);
  }

  static putUser(userId, user) {
    const api_url = 'http://localhost:3000/userHead/' + userId;
    return axios.put(api_url, user);
  }

  static logUser(email, pass) {
    console.log(email,pass)
    const api_req = 'http://localhost:3000/userHead?email=' + email + '&pass=' + pass;
    console.log(api_req)
    return axios.get(api_req);
  }

  static getUserDetails(userId) {
    return axios.get('http://localhost:3000/userDetail/' + userId);
  }

  static getTravelsByUser(userId) {
    return axios.get('http://localhost:3000/userTrip?userId=' + userId);
  }

  static getTravels() {
    return axios.get('http://localhost:3000/travels');
  }

  static deleteUser(userId) {
    return axios.delete('http://localhost:3000/userHead/' + userId);
  }
  static deleteUserDetails(userId) {
    return axios.delete('http://localhost:3000/userDetail/' + userId);
  }
}


