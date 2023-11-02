import BaseButton from "../UI/button/BaseButton"
import BaseInput from "../UI/input/BaseInput"
import PostService from "../../../API/PostService.js";
import { useState,useEffect} from "react";
import {useParams} from 'react-router-dom';
import {isNotEmptySpace} from "../InputNullCheck";

const EditItem =()=>{
    const {id} = useParams();
    const [header,setHeader] = useState('');
    const [text,setText] = useState('');

    useEffect(() => {
        getItem();
      }, []);

    async function getItem()
{
   const response = await PostService.getById(id);
   const item = response.data;
   setHeader(item.header);
   setText(item.description);
} 
    const handleHeaderChange=(header) =>{
        setHeader(header);
    }
    const handleTextChange=(text) =>{
        setText(text);
    }
    async function editItem()
    {
        if(!isNotEmptySpace(header)||!isNotEmptySpace(text) )
        alert("Поля не могут быть пустыми!");
        else{   
        const editedItem = {
        id,
        header: header,
        description: text}
        const request = await PostService.editItem(editedItem);
        alert(`Дело с заголовом ${header} и текстом ${text} отредактирвано!`);
    }
    }

    return(  
          <div>
        <h1>Редактировать дело</h1>
        <p>Заголвок</p>
    <BaseInput onChange={handleHeaderChange} inputValue={header}/>
    <p>Описание</p>
    <BaseInput onChange={handleTextChange}inputValue={text}/>
    <br/>
    <BaseButton onClick ={editItem}>Редактировать</BaseButton>
    </div>
    );

};
export default EditItem