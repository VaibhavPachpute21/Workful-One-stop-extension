import React from "react";
import { render } from "react-dom";
import Greet from "./Components/Greet/Greet";
import Time from './Components/Time/Time'


function Popup(){
    return(
        <div>
            <Greet/>
            <Time/>
            
        </div>
    );
}

render(<Popup/>,document.getElementById("react-target"))