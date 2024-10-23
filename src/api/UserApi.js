import axios from 'axios';
import {convertToMinutes, convertToTime} from "@/api/TimeUtils.js";

export default class UserApi {

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

  static getUserRewards(userId) {
  return axios.get(`http://localhost:3000/userRewards/${userId}`)
    .then(response => response.data.rewards)
    .catch(error => {
      console.error('Error fetching user rewards:', error);
      throw error;
    });
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

  static deleteTravel(travelId) {
    return axios.delete('http://localhost:3000/travels/' + travelId);
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
    return axios.get('http://localhost:3000/userHead?' + query);
  }
  static searchUserDetail(query) {
    return axios.get('http://localhost:3000/userDetail?' + query);
  }

  static getStations() {
    return axios.get('http://localhost:3000/stations');
  }

  static postTravel(details) {
    const api_url = 'http://localhost:3000/travels';
    const data = {
      status: details.status ?? "Pendiente",
      origin: details.origin ?? 0,
      destination: details.destination ?? 0,
      departure: details.departure ?? "1999-01-01",
      arrival: convertToTime(convertToMinutes(details.departure)+convertToMinutes("01:30")),
      date: details.date ?? "1999-01-01",
      passengers: "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    };
    return axios.post(api_url, data);
  }

  static putTravel(travelId,details) {
    const api_url = 'http://localhost:3000/travels/'+travelId;
    const data = {
      status: details.status ?? "Pendiente",
      origin: details.origin ?? 0,
      destination: details.destination ?? 0,
      departure: details.departure ?? "1999-01-01",
      arrival: convertToTime(convertToMinutes(details.departure)-convertToMinutes("01:30")),
      date: details.date ?? "1999-01-01",
      passengers: "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    };
    return axios.put(api_url, data);
  }


  static getTravel(travelId) {
    return axios.get('http://localhost:3000/travels/' + travelId);
  }
}


