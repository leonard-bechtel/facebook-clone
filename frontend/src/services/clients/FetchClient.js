// Simple httpClient implementation using the fetch api

const FetchClient = {
  async get(url) {
    return await fetch(url, {
      credentials: "include"
    })
  },

  async post(url, body) {
    return await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
  },

  async delete(url) {
    return fetch(url, {
      method: "DELETE",
      credentials: "include"
    })
  }
}

export default FetchClient;