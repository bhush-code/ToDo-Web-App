export const ToDoForm = ({ handleChange,handleSubmit, inputValue})=>
{

    return(
    <section className="form">
        <form onSubmit={handleSubmit} className="todo-form">
             <div>
                <input type="text" className="todo-input"  placeholder='Enter task' autoComplete="off" value={inputValue.content} onChange={(e)=>handleChange(e.target.value)}/>
            </div>
             <div>
                <button type='submit' className="todo-btn"> Add Task</button>
            </div>
        </form>

    </section>
    );
}