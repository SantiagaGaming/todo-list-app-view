import {Link} from "react-router-dom";
import BaseButton from "../UI/button/BaseButton";
const NavBar =()=>{
    return(<div className="navbar">
       <Link to="/about"><BaseButton>О сайте</BaseButton></Link>
        <Link to="/allItems"><BaseButton>Все дела</BaseButton></Link>
    </div>);
};
export default NavBar;