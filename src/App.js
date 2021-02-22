import './App.css';
import React, { useState } from 'react';
import { uuid } from 'uuidv4';
import Todos from './components/Todos';

function App() {
	const [todos, setTodos] = useState([
		{
			id: uuid(),
			task: 'Go',
			completed: false,
		},
		{
			id: uuid(),
			task: 'Do',
			completed: false,
		},
		{
			id: uuid(),
			task: 'Come',
			completed: false,
		},
	]);
	return (
		<div className="App">
			<h1>TODO LIST</h1>
			<Todos todos={todos} />
		</div>
	);
}

export default App;
