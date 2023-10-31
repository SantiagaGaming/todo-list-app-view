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
async function getAll()
{
    response = await PostService.getAll();
    setItems(response.data)
} 
    return(
      <div>
      <BaseButton onClick ={(e) => {
            e.preventDefault();
            window.location.href="/createItem"
            }}>Создать новое дело</BaseButton>
            <ItemsCards items = {items} />
        </div>
    )
}
export default AllItems;
