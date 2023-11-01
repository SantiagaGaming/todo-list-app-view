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
    static async editItem(item){
        const request = await axios.patch('https://localhost:7217/api/todo', 
        item
          )
    }
    static async deleteItem(id){
        const request = await axios.delete('https://localhost:7217/api/todo/'+id,{
        })}
    static async getById(id) {
        const response = await axios.get('https://localhost:7217/api/todo/'+id)
        return response;
    }

}