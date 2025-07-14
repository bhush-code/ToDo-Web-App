import React, { useState } from 'react';
import './toggle.css'
export const ToggleSwitch = () => {

    const [isOn, setIsOn] = useState(false);

    return (
       <div className="switch"  tabIndex="0"
      role="button"
     onKeyDown={()=> setIsOn(!isOn)}>
        <div className={`toggle ${isOn ? "on" : "off"}`}>
              <p>{isOn? "ON":"OFF"}</p>
        </div>
        
       </div>
    );
}