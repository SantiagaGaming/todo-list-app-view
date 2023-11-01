import BaseButton from "../button/BaseButton"
import PostService from "../../../../API/PostService";
const ItemCard=({item, onDelete})=>{

return(
      <li key={item.id}>
        <h1> 
            {item.header}
            </h1>
        <p>{item.description}</p>
        <BaseButton onClick ={event => onDelete(event, item.id)}>Удалить</BaseButton>
      </li>
)
}
export default ItemCard