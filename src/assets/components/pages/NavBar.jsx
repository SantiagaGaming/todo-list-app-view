import {Link} from "react-router-dom";
const NavBar =()=>{
    return(<div className="navbar">
       <Link to="/about">О сайте</Link>
        <Link to="/allItems">Все дела</Link>
    </div>);
};
export default NavBar;