import {useParams} from 'react-router-dom';
import { useState,useEffect} from "react";
import PostService from "../../../API/PostService.js";
const ShowItem =()=>{
    const {id} = useParams();
    const [header,setHeader] = useState('');
    const [text,setText] = useState('');

    useEffect(() => {
        getItem();
      }, []);

    async function getItem()
{
   const response = await PostService.getById(id);
   const item = response.data;
   setHeader(item.header);
   setText(item.description);
   console.log(item.header);
   console.log(item.description);
} 

    return(<>
     <li>
        <h1> 
            {header}
            </h1>
            <p> 
            {text}
            </p>
            </li>
            </>
    );
};
export default ShowItem