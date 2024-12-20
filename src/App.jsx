import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboardpage from "./DashboardPage/Dashboardpage"
import DnDExample from "./DashboardPage/Dnd/DnDExample"
import Weathercomponent from "./Weather/Weathercomponent"
import LoginPage from "./LoginPage"


function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element = {<LoginPage />} />
    <Route path="/landingpage" element = {<Dashboardpage />} />
    <Route path="/rankingdnd" element ={<DnDExample />} />
    <Route path="/weather" element = {<Weathercomponent />} />
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
