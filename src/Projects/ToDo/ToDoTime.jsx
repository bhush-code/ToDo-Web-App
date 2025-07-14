import { useState } from "react";

export const ToDoTime=()=>{

    const[datetime, setDatetime]=useState("");
    const  interval=setInterval(()=>{

        const currentDateTime=new Date();
        const formattedDate=currentDateTime.toLocaleDateString();
        const formattedTime=currentDateTime.toLocaleTimeString();
        setDatetime(`${formattedDate} - ${formattedTime}`);
    }

    ,1000);

    return(
        <h2 style={{"textAlign":"center", "fontSize":"20px"}}>{datetime}</h2>
    );
}