import './todo.css';
import React, { useState } from 'react';

import { ToDoList } from './ToDoList.jsx';
import { Clear } from './Clear.jsx';
import { ToDoTime } from './ToDoTime.jsx';
 import { ToDoForm } from './ToDoForm.jsx';

 import { getLocalStorage, setLocalStorage } from './LocalStorage.jsx';

export const ToDo = () => {


const [inputValue, setInputValue] = useState({});

const [todoList, setTodoList] = useState(
    getLocalStorage() || []
);

    const handleChange = (value) => {

        console.log("Input value changed:", value);
      
        setInputValue({id:value, content:value, checked:false});
    }


     setLocalStorage(todoList);

    

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log("Form submitted with value:", inputValue);
        // console.log(e);
        const ifAvailable = todoList.find(item => item.content === inputValue.content);
        if(ifAvailable)
        {
            alert("Task already exists in the list");
            setInputValue({id:"",content:"", checked:"false"});
            return;
        }
         if(!inputValue.content || inputValue.content.trim() === "")
            {
                alert("Please enter a task");
                return
            }
        
        
            setTodoList([...todoList,{id:inputValue.content, content:inputValue.content, checked:false}]);
            // setLocalStorage(todoList);
            setInputValue({id:"", content:"", checked:false});

            console.log(todoList);
            console.log("Task added:", inputValue);
            

           
    }


    const handleClear = () => {

        let res=confirm("Are you sure you want to clear all tasks?");

        if(res===true)
        {
            console.log("Clearing all tasks");
   
            setTodoList([]);
            setInputValue({});
        }
        else
        {
            console.log("Not clearing tasks");
        }

   
    }


    const onHandlecheckButton = (value) => {

        const updatedList=todoList.map(item => {
            if(item.content === value) {
                return {...item, checked: !item.checked};
            }
            else {
            return item;
            }
        });
        setTodoList(updatedList);
        console.log("Checked status updated for:", value);
        console.log("Updated todoList:", updatedList);
    }


    // todoList.map((item, index) => {
    //     console.log(`Item ${index}: ${item}`);
    // });

    const handleDelete = (value) => {

        console.log("Deleting item:", value);

        const updatedList = todoList.filter(item => item.content !== value);
        setTodoList(updatedList);

       
    }
       
    return (
        
        <section className="todo-container">

            <header>
                <h1>ToDo List</h1>
                <ToDoTime />
                </header>
               <ToDoForm  handleChange={handleChange} handleSubmit={handleSubmit} inputValue={inputValue} />

                <div className="myUnOrdList">
                <ul>
                {todoList. map((item) => (
                    <ToDoList key={item.id} toDoItem={item.content} checked={item.checked}  handleDelete={handleDelete} onHandlecheckButton={onHandlecheckButton}/>
))}

</ul>
</div>

    <section>
        <Clear handleClear={handleClear} />
    </section>  


            </section>
    );
}