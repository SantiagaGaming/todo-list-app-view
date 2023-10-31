import PostService from "../../../API/PostService";
import ItemCardHolder from "../ItemCardHolder";
import BaseButton from "../UI/button/BaseButton";
import React, { useState, useEffect } from 'react';

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
      <BaseButton onClick ={getAll}>Получить все дела</BaseButton>
      <BaseButton onClick ={(e) => {
            e.preventDefault();
            window.location.href="/createItem"
            }}>Создать новое дело</BaseButton>
            {items.map((item) => (
              <div className='card' key={item.id}>
                <h3>{item.header}</h3>
                <p>{item.description}</p>
              </div>
            ))}
        </div>
    )
}
export default AllItems;
