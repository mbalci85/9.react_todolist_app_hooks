import React, { useState } from 'react';

const AddTodo = ({ addToDo }) => {
	const [addTodo, setAddTodo] = useState('');
	const handleInput = (e) => {
		setAddTodo(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addToDo(addTodo);
		setAddTodo('');
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Enter a task..."
					onChange={handleInput}
					value={addTodo}
				/>
				<button type="submit">Add ToDo</button>
			</form>
		</div>
	);
};

export default AddTodo;
