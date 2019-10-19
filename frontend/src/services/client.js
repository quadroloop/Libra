import axios from 'axios'

let client = axios.create({
  baseURL: `http://c7fdf697.ngrok.io/api/`
})

export default client