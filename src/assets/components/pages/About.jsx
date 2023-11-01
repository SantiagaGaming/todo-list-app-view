import BaseButton from "../UI/button/BaseButton"
import {Link} from "react-router-dom";

const About=()=>{
return(<>
    <h1>Приложение с листом дел</h1>
    <Link to="/"><BaseButton>На главную</BaseButton></Link>
    </>
    );
};
export default About