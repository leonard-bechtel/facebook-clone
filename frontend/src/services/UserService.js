// Simple service to fetch, update and delete user data

class UserService {

  constructor(httpClient) {
    this.httpClient = httpClient
  }

  async getUsers() {
    try {
      const res = await this.httpClient.get("http://localhost:8080/users")
      return res.json()
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  async getUserById(id) {
    try {
      const res = await this.httpClient.get(`http://localhost:8080/users/${id}`)
      return res.json()
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  async createUser(userData) {
    try {
      const res = await this.httpClient.post("http://localhost:8080/users", userData)
      return res.json()
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  async updateUserById(id, userData) {
    try {
      const res = await this.httpClient.post(`http://localhost:8080/users/${id}`, userData)
      return res.json()
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  async deleteUserById(id) {
    try {
      const res = await this.httpClient.delete(`http://localhost:8080/users/${id}`)
      return res.json()
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}

export default UserService;