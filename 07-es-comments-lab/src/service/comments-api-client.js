export const BASE_URL = "http://localhost:9000/api/comments";
class CommentsApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  async getAllComments() {
    const rest = await fetch(this.baseUrl);
    const comments = await rest.json();
    return comments;
  }
}
