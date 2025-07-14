import { MdCheck, MdDeleteForever } from "react-icons/md";
import React, { useState } from "react";

export const ToDoList=({key,toDoItem, checked, handleDelete,onHandlecheckButton})=> {
 //const [isClick, setIsClick] = useState(false);
//  console.log(key);
//  console.log(toDoItem);
return(
    <li className="todo-item" key={key}>
        <span className={`${checked?"strikeon":"strikeoff"}`}>{toDoItem }</span>
        <button className="check-btn " onClick={()=>onHandlecheckButton(toDoItem)} ><MdCheck/></button>
        <button className="delete-btn"  onClick={()=>{handleDelete(toDoItem)}}><MdDeleteForever/></button>
    </li>
)
}