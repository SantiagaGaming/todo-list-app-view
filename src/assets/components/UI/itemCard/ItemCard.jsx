import BaseButton from "../button/BaseButton"
import PostService from "../../../../API/PostService";
import { useState } from "react";
const ItemCard=({item})=>{
    async function deleteData()
    {
        const response = await PostService.deleteItem(item.id);
        alert("Дело удалено!");
    }

return(
      <li key={item.id}>
        <h1> 
            {item.header}
            </h1>
        <p>{item.description}</p>
        <BaseButton onClick ={deleteData}>Удалить</BaseButton>
      </li>
)
}
export default ItemCard