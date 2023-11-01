import {Route,Routes} from "react-router-dom";
import AllItems from "./pages/AllItems.jsx";
import CreateItem from "./pages/CreateItem.jsx";
import About from "./pages/About.jsx";
import EditItem from "./pages/EditItem.jsx";
import ShowItem from "./pages/ShowItem.jsx";
const AppRouter = () => {
    return (
<Routes>
  <Route path="/About"element={<About />}/>
    <Route path="/allItems" element={<AllItems />} />
    <Route path="/createItem" element={<CreateItem />} />
    <Route path="/editItem/:id" element={<EditItem />} />
    <Route path="/showItem/:id" element={<ShowItem />} />
    </Routes>
    );
};

export default AppRouter;
