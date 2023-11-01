import React from 'react';
import ItemCard from '../itemCard/ItemCard';
const ItemsCards =({items, onDeleteItem,onEditItem,onShowItem})=>{
    const listItems = items.map((item) =>
<ItemCard
 key={item.id}
  item={item}
   onDelete={event => onDeleteItem(event, item.id)}
   onEdit={event => onEditItem(event, item.id)}
   onShow ={event=> onShowItem(event, item.id)}
     />
    );
    return (
      <ul>{listItems}</ul>
    );
}
export default ItemsCards