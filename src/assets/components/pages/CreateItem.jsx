import BaseButton from "../UI/button/BaseButton"
import BaseInput from "../UI/input/BaseInput"
import PostService from "../../../API/PostService.js";
import { useState } from "react";
import {isNotEmptySpace} from "../InputNullCheck.js";

const CreateItem =()=>{
    const [header,setHeader] = useState('');
    const [text,setText] = useState('');

    const handleHeaderChange=(header) =>{
        setHeader(header);
    }
    const handleTextChange=(text) =>{
        setText(text);
    }
    async function addItem()
    {
         if(!isNotEmptySpace(header)||!isNotEmptySpace(text) )
        alert("Поля не могут быть пустыми!");
        else{
            const newItem = {
                header: header,
                description: text
        }
        const request = await PostService.createItem(newItem);
        alert(`Дело с заголовком ${header} и текстом ${text} создано!`);
        clearInputs();
    }
   
    }
    function clearInputs(){
        setHeader('');
        setText('');
    }
    return(  
          <div>
        <h1>Создать новое дело</h1>
        <p>Заголвок</p>
    <BaseInput onChange={handleHeaderChange}  inputValue={header}/>
    <p>Описание</p>
    <BaseInput onChange={handleTextChange} inputValue={text}/>
    <br/>
    <BaseButton onClick ={addItem}>Создать</BaseButton>
    </div>
    );
};
export default CreateItem