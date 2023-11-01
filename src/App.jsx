import { BrowserRouter } from "react-router-dom"
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
