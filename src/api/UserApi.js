import axios from 'axios';

export default class UserApi {

// TODO: Hacer chequeos para la unicidad de datos.
// TODO: Reordenar y ver que falta.
  static getUser(userId) {
    return axios.get('http://localhost:3000/userHead/' + userId);
  }

  static getUsers() {
    return axios.get('http://localhost:3000/userHead');
  }


  static getDetails() {
    return axios.get('http://localhost:3000/userDetail');
  }

  static postUser( user ) {
    const api_url = 'http://localhost:3000/userHead';
    const data = {
      name: user.name ?? '',
      email: user.email ?? '',
      pass: user.pass,
      points: user.points ?? 0,
      kilometers: user.kilometers ?? 0
    };

    return axios.post(api_url, data);
  }

  static postUserDetails(userId, details) {
    const api_url = 'http://localhost:3000/userDetail';
    const data = {
      id: userId,
      phone: details.phone ?? "",
      names: details.names ?? "",
      lastNames: details.lastNames ?? "",
      trait: details.trait ?? "",
      rut: details.rut ?? "",
      bio: details.bio ?? "",
      address: details.address ?? "",
      city: details.city ?? "",
      commune: details.commune ?? "",
      emergencyContact: details.emergencyContact ?? "",
      emergencyContactName: details.emergencyContactName ?? "",
      birthday: details.birthday ?? "",
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
    return axios.get('http://localhost:3000/userHead?email=' + email + '&pass=' + pass);
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

  static getAdmin(adminID) {
    return axios.get('http://localhost:3000/admin/' + adminID);
  }

  static logAdmin(user, pass) {
    return axios.get('http://localhost:3000/admin?name=' + user + '&pass=' + pass);
  }

  static searchTrains(query) {
    return axios.get('http://localhost:3000/travels?' + query);
  }
  static searchUserHead(query) {
    console.log(query)
    return axios.get('http://localhost:3000/userHead?' + query);
  }
  static searchUserDetail(query) {
    return axios.get('http://localhost:3000/userDetail?' + query);
  }
}


