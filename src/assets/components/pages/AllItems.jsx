import PostService from "../../../API/PostService";
import BaseButton from "../UI/button/BaseButton";
import React, { useState, useEffect } from 'react';
import ItemsCards from "../UI/itemsCards/ItemsCards";

const AllItems=()=>{
  let response;
  const [items, setItems] = useState([])
  useEffect(() => {
    getAll();
  }, []);
  const handleOnDeleteData=(event,itemId)=>{
    deleteAndRefreshData(itemId); 
  }
async function getAll()
{
    response = await PostService.getAll();
    setItems(response.data)
} 
async function deleteAndRefreshData(id)
{
    const response = await PostService.deleteItem(id);
    getAll();
    alert("Дело удалено!");
}
    return(
      <div className="button-margin">
      <BaseButton onClick ={(e) => {
            e.preventDefault();
            window.location.href="/createItem"
            }}>Создать новое дело</BaseButton>
            <ItemsCards items = {items} onDeleteItem={handleOnDeleteData}/>
        </div>
    )
}
export default AllItems;
