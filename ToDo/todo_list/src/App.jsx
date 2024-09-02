import { useState } from "react";
import Todo_List from "./components/Todo_List";
import Add_To_List from "./components/Add_To_List";
import "./App.css";

function App() {
	const [tasks, setTasks] = useState([])

    //funtion to add a task
    const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
    };

    //funtion to delete a task once created
    const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); 
    };

    //funtion to toggle the checkbox
    const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task) 
    setTasks(newTasks)
    };

	return (
        <>
        <Add_To_List addTask={addTask} />
		<Todo_List TodoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
		</>
	);
}

export default App;
