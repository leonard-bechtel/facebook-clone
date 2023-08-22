// Simple service to authenticate users

class AuthService {

  constructor(httpClient) {
    this.httpClient = httpClient
  }

  async login(username, password) {
    try {
      const loginData = {
        username,
        password
      }
      const res = await this.httpClient.post("http://localhost:8080/users/login", loginData)
      return res.json()
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}

export default AuthService;