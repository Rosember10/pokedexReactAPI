
import "./Accueil.css";

import audio from "./audio/theme.mp3"
import React from "react";

export default function Accueil() {

    



    return (
        <div>

            {/* <video src={introVideo2} preload="auto" loop="" muted="" autoplay="" playsinline="" width="600" height="400"  /> */}
            {/* <video autoPlay loop muted width="600" height="400" >
                <source src={introVideo2} />
            </video> */}

            {/* <audio controls autoplay /> */}

            <source src={audio} type="audio/mpeg" />



        </div>
    );
}