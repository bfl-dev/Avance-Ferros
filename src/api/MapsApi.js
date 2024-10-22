import axios from 'axios'


export function getKey(){
  return axios.get('http://localhost:3000/key')
}
