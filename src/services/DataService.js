

const API_URL = "http://api/users";

import axios from "axios";

class DataService {
  getAllUsers() {
    return axios.get(`${API_URL}` )
  }

  setAllUsers(data) {
    console.log(data)
    return axios.post(`${API_URL}`, data)


  }

  deleteUser(id) {
    console.log(id)
    return axios.delete(`${API_URL}/${id}`)
  }

}


export default new DataService()
