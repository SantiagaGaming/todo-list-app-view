import PostService from "../../../API/PostService";
import BaseButton from "../UI/button/BaseButton";

const AllItems=()=>{
async function getAll()
{
    const response = await PostService.getAll();
    return responce;
}
    return<div>
      <BaseButton onClick ={getAll}>Получить посты</BaseButton>
    </div>
}
export default AllItems;
