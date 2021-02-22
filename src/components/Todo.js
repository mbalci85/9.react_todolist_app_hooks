import React from 'react';

const Todo = ({ todo }) => {
	return (
		<div>
			<h2>{todo.task}</h2>
		</div>
	);
};

export default Todo;
