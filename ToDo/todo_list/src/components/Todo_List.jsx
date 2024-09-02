import React from "react";
import Todo_Item from "./Todo_Item";


function Todo_List({tasks, toggleTask, deleteTask}){

	return (
		<ul>
            <li>
			{tasks.map((task, index) => (
				<Todo_Item
					key={task.id || index}
					task={task}
					toggleTask={() => toggleTask(index)}
					deleteTask={() => deleteTask(index)}
				/>
			))}
            </li>
		</ul>
	);
};

export default Todo_List;
