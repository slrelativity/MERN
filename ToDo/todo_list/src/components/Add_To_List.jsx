import React, {useState} from 'react'

function Add_To_List({addTask}){
        const [text, setText] = useState('');
        const handleSubmit = (e) => {
        e.preventDefault();

        if (text) { addTask(text);setText('');
        }
};

return (
        <form onSubmit={handleSubmit}>
            <ul>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a new task"
        />
            </ul>
        <button type="submit">Add</button>
        </form>
        );
}

export default Add_To_List;