import React from "react";

function Todo_Item({ task, toggleTask, deleteTask }) {
	
	return (
		<ul> 
            <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.text}
            <input type="checkbox" checked={task.completed} onChange={toggleTask}/><button id="delete" onClick={deleteTask}>Delete</button>
            </li>
		</ul>
    
	);
}

export default Todo_Item;