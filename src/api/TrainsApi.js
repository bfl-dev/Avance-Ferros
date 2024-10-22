import axios from 'axios'

export function getAllTravels(){
  return axios.get('http://localhost:3000/travels')
}
export function getTravel(id){
  return axios.get('http://localhost:3000/travels/'+id)
}
export function getAllStations(){
  return axios.get('http://localhost:3000/stations')
}

export function getStation(id){
  return axios.get('http://localhost:3000/stations/'+id)
}
