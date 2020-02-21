import React,{useState} from "react"
// import {Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Header from '../components/Header/index';
import SideBar from '../components/SideBar/index.jsx';
import '../components/app.css';

const IndexPage = () => {
  const [bgColor,setBgColor] = useState('#fff');
  const handleColorSelected = (color)=>{
    setBgColor(color);
  }

  return(
  <>
    <Header handleColorSelected={handleColorSelected}/>
    <div className="content" 
      style={{
        background:bgColor
      }}>
      <SideBar/>
    </div>
    <div className="footer">
    </div>
  </>
);
  }

export default IndexPage
