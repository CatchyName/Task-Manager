import React, { useState } from 'react';
import Task from './Task.js';
import Form from './Form.js';

let itasks = [
	{
		text: "Modify the style of this website",
		done: false
	},
	{
		text: "Connect to backend server",
		done: false
	},
	{
		text: "Done and undone tasks",
		done: false
	},
	{
		text: "Cybersecurity?",
		done: false
	},
	{
		text: "Yea, and make a cup of tea",
		done: false
	},
]

const Tasks = () => {

	const [tasks, setTasks] = useState(itasks);

	function addTask(task) {
		if (task.text != '') setTasks([...tasks, task]);
	}

	function removeTask(id) {
		setTasks(tasks.filter((t, i) => i !== id));
	}

	return (
		<>
			<div id="tasks">
				{tasks.map((task, i) => {
					return <Task key={i} taskID={i} task={task} removeTask={removeTask} />
				})}
			</div>
			<Form addTask={addTask} />
		</>
	);
}

export default Tasks;