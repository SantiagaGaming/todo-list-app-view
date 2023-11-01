import {Route,Routes} from "react-router-dom";
import AllItems from "./pages/AllItems.jsx";
import CreateItem from "./pages/CreateItem.jsx";
import About from "./pages/About.jsx";
import NavBar from "./pages/NavBar.jsx";
const AppRouter = () => {
    return (
<Routes>
  <Route path="/About"element={<About />}/>
    <Route path="/allItems" element={<AllItems />} />
    <Route path="/createItem" element={<CreateItem />} />
    </Routes>
    );
};

export default AppRouter;
