import axios from "axios";

export default class PostService {
    static async getAll() {
        const response = await axios.get('https://localhost:7217/api/todo', {
        })
        return response;
    }
    static async createItem(item){
        const request = await axios.post('https://localhost:7217/api/todo', 
        item
          )
    }
    static async deleteItem(id){
        const request = await axios.delete('https://localhost:7217/api/todo/'+id,{
        })}
    
    static async createItemWithoutAxius(item){
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');
        const options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(item)
        }
        const result = await fetch('https://localhost:7217/api/todo', options);     
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