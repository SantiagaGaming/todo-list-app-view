import BaseButton from "./UI/button/BaseButton"
import BaseInput from "./UI/input/BaseInput"
import PostService from "../../API/PostService.js";

const TodoItemCreator =()=>{
   async function fetchData()
    {
        const response = await PostService.getAll();
        console.log(response.data);
    }
    return(  
          <div>
        <h1>Создать новое дело</h1>
        <p>Заголвок</p>
    <BaseInput/>
    <p>Описание</p>
    <BaseInput />
    <br/>
    <BaseButton onClick ={fetchData}>Создать</BaseButton>
    </div>
    );

};
export default TodoItemCreator