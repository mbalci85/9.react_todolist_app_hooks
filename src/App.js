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

	const toggleCompleted = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<div className="App">
			<h1>TODO LIST</h1>
			<Todos
				todos={todos}
				toggleCompleted={toggleCompleted}
				deleteTodo={deleteTodo}
			/>
		</div>
	);
}

export default App;
