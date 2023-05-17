import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Wellness from "./Pages/Wellness"
import Faqs from "./Pages/Faqs"
import About from "./Pages/About"
import Reqapp from "./Pages/Reqapp"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Patientos from "./Pages/Patientos"
import Footer from "./Components/Footer"
import Birthingclinic from "./Pages/Birthingclinic"
import Immunization from "./Pages/Immunization"
import Familiplanning from "./Pages/Familiplanning"
import Medfam from "./Pages/Medfam"
import Services from "./Pages/Sidebar/Services"
import { Route, Routes } from "react-router-dom"



function App() {
  return( 
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Wellness" element={<Wellness/>}/>
          <Route path="/Faqs" element={<Faqs/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Reqapp" element={<Reqapp/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Patientos" element={<Patientos/>}/>
          <Route path="/Birthingclinic" element={<Birthingclinic/>}/>
          <Route path="/Immunization" element={<Immunization/>}/>
          <Route path="/Familiplanning" element={<Familiplanning/>}/>
          <Route path="/Medfam" element={<Medfam/>}/>
          <Route path="/Birthingclinic" element={<Birthingclinic/>}/>
        </Routes>
        <Footer />
    </>
      
  );
}


export default App;