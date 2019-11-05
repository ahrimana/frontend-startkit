import axios from 'axios'
import {API_ROOT, getCookie } from 'utils'

async function fetch(id){
  const csrf = getCookie ('csrf_access_token')
  const response = await axios.get(
    `${API_ROOT}/blog/${id}`,
    { headers: {'X-CSRF-TOKEN':csrf}},
  )
  return response.data
}

async function create(title){
  const csrf = getCookie ('csrf_access_token')
  const response = await axios.post(
    `${API_ROOT}/blog`,
    { 
      title,
      text: '',
    },
    { headers: {'X-CSRF-TOKEN':csrf}},
  )
  return response.data
}

export default {
  fetch,
  create,
}
