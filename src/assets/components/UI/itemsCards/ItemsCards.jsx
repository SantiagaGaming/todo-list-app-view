import React from 'react';
import ItemCard from '../itemCard/ItemCard';
const ItemsCards =({items})=>{
    const listItems = items.map((item) =>
<ItemCard key={item.id} item={item}/>
    );
    return (
      <ul>{listItems}</ul>
    );
}
export default ItemsCards