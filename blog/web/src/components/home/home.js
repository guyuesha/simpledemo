import axios from 'axios'
const getTen = (params = {}) => {
  return axios.get('/articalList', {params: params})
  .then(r => {
    console.log('respons ', r.data)
    return r.data
  })
}
    // axios.post('/post', {name: 'daa'}).then(r => {
    //   console.log('respons ', r)
    // })
export {getTen}
