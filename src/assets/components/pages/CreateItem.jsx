import BaseButton from "../UI/button/BaseButton"
import BaseInput from "../UI/input/BaseInput"
import PostService from "../../../API/PostService.js";
import { useState } from "react";

const CreateItem =()=>{
    const [header,setHeader] = useState('');
    const [text,setText] = useState('');
    const [deleteText,setDeleteText] = useState('');

    const handleHeaderChange=(header) =>{
        setHeader(header);
    }
    const handleDeleteChange=(deleteText) =>{
        setDeleteText(deleteText);
    }
    const handleTextChange=(text) =>{
        setText(text);
    }
   async function fetchData()
    {
        const response = await PostService.getAll();
        console.log(response.data);
    }
    async function deleteData()
    {
        const response = await PostService.deleteItem(deleteText);
    }
    async function addItem()
    {   const newItem = {
        header: header,
        description: text
    };
        const request = await PostService.createItem(newItem);
        alert("Дело создано!");
        setText('');
    }
    return(  
          <div>
        <h1>Создать новое дело</h1>
        <p>Заголвок</p>
    <BaseInput onChange={handleHeaderChange}/>
    <p>Описание</p>
    <BaseInput onChange={handleTextChange}/>
    <br/>
    <BaseButton onClick ={addItem}>Создать</BaseButton>
    <BaseButton onClick ={fetchData}>Получить</BaseButton>
    <p>Удаление поста по номеру</p>
    <BaseInput onChange={handleDeleteChange}/>
    <br/>
    <BaseButton onClick ={deleteData}>Удалить</BaseButton>
    </div>
    );

};
export default CreateItem