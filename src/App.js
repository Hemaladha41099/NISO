import Homepage from "./Component/Pages/Homepage/Homepage";
import Productpage from "./Component/Pages/Productpage/Productpage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./Component/Pages/Productpage/About";
import Landingpage from "./Component/Landingpage";
import Header from "./Component/Pages/Header";
import "./App.css"
import Home from "./Component/Pages/Home";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="" element={<Home/>} />
          <Route path="Home" element={<Landingpage/>} />
          <Route path="Participation" element={<Homepage/>} />
          <Route path="course" element={<Productpage/>} />
          <Route path="About" element={<About/>} />
          {/* <Route path="Cart" element={<Cart/>} /> */}
        </Routes>
      </BrowserRouter>
      </div>
  );
}


export default App