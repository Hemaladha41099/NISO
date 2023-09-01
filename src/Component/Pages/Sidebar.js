import React from 'react'
import {PiListMagnifyingGlassFill}from "react-icons/pi"
import {FaSmileBeam,FaMagic,FaBookOpen,FaLink} from "react-icons/fa"
import {GiArcher,GiDramaMasks,GiBatMask,GiDrippingKnife} from "react-icons/gi"
import {VscAccount} from "react-icons/vsc"
import {GrSettingsOption} from "react-icons/gr"

const Sidebar = () => {
  return (
   <div className='sidebar-content text-black  '>
   
    <nav class="nav flex-column centered">
      <div className='nav-item '>
  <li> <a class="nav-link active text-black " aria-current="page" href="#"><GiDrippingKnife className="icon-Thriller"/>
  <span>Thriller</span></a></li>
  <li><a class="nav-link text-black " href="#"><GiBatMask className='icon-Thriller'/> <span>Horror</span></a></li>
  <li><a class="nav-link text-black" href="#"><PiListMagnifyingGlassFill className="icon-Thriller"/><span>Comedy</span></a></li>
  <li><a class="nav-link text-black" href="#"><GiDramaMasks className="icon-Thriller"/><span>K-dramas</span></a></li>
  <li><a class="nav-link text-black" href="#"><FaSmileBeam className="icon-Thriller"/> <span>Comic</span></a></li>
  <li><a class="nav-link text-black" href="#"><GiArcher className="icon-Thriller"/> <span>Historic</span></a></li>
  <li><a class="nav-link text-black" href="#"><FaMagic className="icon-Thriller"/> <span>Fantasy</span></a></li>
  <li><a class="nav-link text-black" href="#"><FaBookOpen className="icon-Thriller"/> <span>Novels</span></a></li>
  <li><a class="nav-link text-black" href="#"><VscAccount className="icon-Thriller"/> <span>Account</span></a></li>
  <li><a class="nav-link text-black" href="#"><GrSettingsOption className="icon-Thriller"/> <span>settings</span></a></li>
  <li><a class="nav-link text-black" href="#"><FaLink className="icon-Thriller"/> <span>Link</span></a></li>
  </div>
</nav></div>
  );
}

export default Sidebar
// FaFaceLaughSquint