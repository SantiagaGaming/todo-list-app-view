import axios from "axios";

export default class PostService {
    static async getAll() {
        const response = await axios.get('https://localhost:7096/api/todo', {
        })
        return response;
    }

    static async getById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response;
    }

    static async getCommentsByPostId() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${1}/comments`)
        return response;
    }
}