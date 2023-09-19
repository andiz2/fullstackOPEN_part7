import axios from 'axios'
const baseUrl = 'https://randomuser.me/api?results=30'

const getAll = () => {
  const promise = 
  axios.get(baseUrl)
  .then(response =>{
    const names = response.data.results
    console.log(names)
  })
  return axios.get(baseUrl)
}



export default { 
 getAll: getAll
}