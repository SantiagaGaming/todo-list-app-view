import BaseButton from "../UI/button/BaseButton"
import BaseInput from "../UI/input/BaseInput"
import PostService from "../../../API/PostService.js";
import { useState,useEffect} from "react";
import {useParams} from 'react-router-dom';

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
   console.log(item.header);
   console.log(item.description);
} 
    const handleHeaderChange=(header) =>{
        setHeader(header);
    }
    const handleTextChange=(text) =>{
        setText(text);
    }
    async function editItem()
    {   const editedItem = {
        id,
        header: header,
        description: text
    };
        const request = await PostService.editItem(editedItem);
        alert(`Дело с заголовом ${header} и текстом ${text} отредактирвано!`);
        clearInputs();
    }
    function clearInputs(){
        setHeader('');
        setText('');
    }
    return(  
          <div>
        <h1>Редактировать дело</h1>
        <p>Заголвок</p>
    <BaseInput onChange={handleHeaderChange}/>
    <p>Описание</p>
    <BaseInput onChange={handleTextChange}/>
    <br/>
    <BaseButton onClick ={editItem}>Редактировать</BaseButton>
    </div>
    );

};
export default EditItem