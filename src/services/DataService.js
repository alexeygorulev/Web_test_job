

const API_URL = "http://localhost:3306";

import axios from "axios";

class DataService {
  getAllUsers() {
    return axios.get(`${API_URL}/users/` )
  }

  setAllUsers(data) {
    return axios.post(`${API_URL}/users/add`, data)
  }

  deleteUser(id) {
    
  }

}


export default new DataService()
