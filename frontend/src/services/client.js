import axios from 'axios'

let client = axios.create({
  baseURL: `https://libra-api-hackathon.herokuapp.com/api/`
})

export default client