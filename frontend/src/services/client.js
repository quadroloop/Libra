import axios from 'axios'

let client = axios.create({
  // baseURL: `https://libra-api-hackathon.herokuapp.com/api`
  baseURL: 'https://57ca02f3.ngrok.io/api'
})

export default client