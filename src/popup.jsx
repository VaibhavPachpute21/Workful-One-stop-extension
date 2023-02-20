import React from "react";
import { render } from "react-dom";
import Time from './Components/Time/Time'


function Popup(){
    return(
        <div>
            <Time/>
        </div>
    );
}

render(<Popup/>,document.getElementById("react-target"))