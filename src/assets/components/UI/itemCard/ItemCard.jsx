import BaseButton from "../button/BaseButton"
const ItemCard=({item, onDelete, onEdit, onShow})=>{

return(
      <li key={item.id}>
        <h1> 
            {item.header}
            </h1>
        <p>{item.description}</p>
        <BaseButton onClick ={event => onShow(event, item.id)}>Посмотреть</BaseButton>
        <BaseButton onClick ={event => onEdit(event, item.id)}>Редактировать</BaseButton>
        <BaseButton onClick ={event => onDelete(event, item.id)}>Удалить</BaseButton>
      </li>
)
}
export default ItemCard