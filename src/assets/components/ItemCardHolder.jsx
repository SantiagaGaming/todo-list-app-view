import React from 'react';
import ItemCard from "./UI/itemCard/ItemCard"

const ItemCardHolder=(props)=>{
    console.log(props)
    if(!props.length)
    {
      return(   
         <h1>
      Посты не найдены
      </h1>)}
    items = props.map((item)=>{
        <ul>
            <ItemCard key={item.Id} item={item}/>
            </ul>})
return(
<div>
{items}
</div>
)
}
export default ItemCardHolder