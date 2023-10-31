import React from 'react';
import classes from'./ItemCard.module.css'
const ItemCard =(item)=>{
    console.log(item);
    return(<card className={classes.baseCard}>
        <h1>{item.Header}</h1><br/>
        <p>{item.Description}</p>
    </card>)
}
export default ItemCard