// Simple httpClient implementation using the fetch api

const FetchClient = {
  async get(url) {
    return await fetch(url, {
      credentials: "same-origin"
    })
  },

  async post(url, body) {
    return await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    })
  },

  async delete(url) {
    return fetch(url, {
      method: "DELETE",
      credentials: "same-origin"
    })
  }
}

export default FetchClient;