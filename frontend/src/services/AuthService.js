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
      const res = await this.httpClient.post("http://localhost:8080/auth/login", loginData)
      return res.json()
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  async logout() {
    try {
      const res = await this.httpClient.post("http://localhost:8080/auth/logout")
      return res.json()
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  async getLoginStatus() {
    try {
      const res = await this.httpClient.get("http://localhost:8080/auth/get-login-status")
      return res.json()
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}

export default AuthService;