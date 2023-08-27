// Simple service to fetch, update and delete posts

class PostService {

  constructor(httpClient) {
    this.httpClient = httpClient
  }

  async getPosts() {
    try {
      const res = await this.httpClient.get("http://localhost:8080/posts")
      return res.json()
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  async getPostById(id) {
    try {
      const res = await this.httpClient.get(`http://localhost:8080/posts/${id}`)
      return res.json()
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  async createPost(postData) {
    try {
      const res = await this.httpClient.post("http://localhost:8080/posts", postData)
      return res.json()
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  async updatePostById(id, postData) {
    try {
      const res = await this.httpClient.post(`http://localhost:8080/posts/${id}`, postData)
      return res.json()
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  async deletePostById(id) {
    try {
      const res = await this.httpClient.delete(`http://localhost:8080/posts/${id}`)
      return res.json()
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}

export default PostService;