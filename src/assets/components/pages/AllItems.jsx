import PostService from "../../../API/PostService";
import BaseButton from "../UI/button/BaseButton";
import React, { useState, useEffect } from 'react';
import ItemsCards from "../UI/itemsCards/ItemsCards";

const AllItems=()=>{
  const [items, setItems] = useState([])

  useEffect(() => {
    getAll();
  }, []);

  const handleOnDeleteData=(event,itemId)=>{
    deleteAndRefreshData(itemId); 
  }
  const handleEditItem= (event,itemId)=>{
    console.log(itemId);
    window.location.href=`/editItem/${itemId}`
  }
  const handleShowItem= (event,itemId)=>{
    window.location.href=`/showItem/${itemId}`
      }
async function getAll()
{
   const response = await PostService.getAll();
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
            <ItemsCards items = {items} onDeleteItem={handleOnDeleteData} onEditItem={handleEditItem} onShowItem={handleShowItem}/>
        </div>
    )
}
export default AllItems;
