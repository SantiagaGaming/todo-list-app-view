import { BrowserRouter } from "react-router-dom"
import CreateItem from "./assets/components/pages/CreateItem"
import NavBar from "./assets/components/pages/NavBar"
import AppRouter from "./assets/components/AppRouter"


const App=()=> {
  return (
      <BrowserRouter>
      <NavBar/>
      <AppRouter/>
      </BrowserRouter>
  )
}

export default App
