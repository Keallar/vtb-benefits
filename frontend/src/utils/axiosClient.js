import axios from 'axios';



export const cinfiguredAxios = (config = {}) => {
  const headers = {'Content-Type': 'application/json'}
  if(config.user != undefined) {
    headers['Authorization'] = config.user.token
  }
  const instance = axios.create({
    url: '/api/v1',
    proxy: {
      protocol: 'http',
      host: 'localhost',
      port: 80
    }
  })

  return instance
}