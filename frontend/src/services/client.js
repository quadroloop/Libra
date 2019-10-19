import axios from 'axios'

let client = axios.create({
  // baseURL: `https://libra-api-hackathon.herokuapp.com/api/`
  baseURL: 'http://c7fdf697.ngrok.io/api/'
})

export default client