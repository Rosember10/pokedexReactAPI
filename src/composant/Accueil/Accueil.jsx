import InfoPkm from "../InfoPkm/InfoPkm";
import ListPkm from "../ListPkm/ListPkm";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import introVideo from "../Accueil/video/intro.mp4"
import introVideo2 from "../Accueil/video/video.mov"
import { Link , NavLink} from 'react-router-dom';
import "./Accueil.css";


import React from "react";

export default function Accueil(){
    return(
        <div>
      
        {/* <video src={introVideo2} preload="auto" loop="" muted="" autoplay="" playsinline="" width="600" height="400"  /> */}
        <video autoPlay loop muted  width="600" height="400" >
            <source src={introVideo2} />
        </video>
        </div>
    );
}