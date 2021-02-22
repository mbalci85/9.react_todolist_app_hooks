import React, { useState } from 'react';

const AddTodo = () => {
	const [addTodo, setAddTodo] = useState('');
	return (
		<div>
			<form>
				<input type="text" placeholder="Enter a task..." />
				<button type="submit">Add ToDo</button>
			</form>
		</div>
	);
};

export default AddTodo;
