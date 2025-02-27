import React, {useState} from "react";

function ToDoList() {

    const [tasks, setTasks] = useState(["Take a shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function AddTask() {
        // trim() clears all whitespaces
        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function DeleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            
            // can also handle this way
            // const temp = updatedTasks[index];
            // updatedTasks[index] = updatedTasks[index-1];
            // updatedTasks[index-1] = temp;

            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>To Do List</h1>

            <div className="entrance">
                <input type="text" placeholder="Enter a new task" value={newTask} onChange={handleInputChange}/>
                <button className="add-button" onClick={AddTask}>Add</button>
            </div>

            <ol>
                {tasks.map((tempTask, index) => 
                        <li key={index}>
                            <span> {tempTask} </span>
                            <div className="button-group">
                                <button className="delete-button" onClick={() => DeleteTask(index)}>Delete</button>
                                <button className="up-button" onClick={() => moveTaskUp(index)}>UP ⬆️</button>
                                <button className="down-button" onClick={() => moveTaskDown(index)}>DOWN ⬇️</button>
                            </div>
                        </li>
                    )
                }
            </ol>
        </div>
    );
}

export default ToDoList;