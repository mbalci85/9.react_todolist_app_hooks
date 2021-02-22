import React from 'react';

const Todo = ({ todo }) => {
	return (
		<div>
			<h2
				style={{
					backgroundColor: '#f3f3f3',
					textAlign: 'left',
					padding: 20,
					textDecoration: todo.completed ? 'line-through' : 'none',
				}}
			>
				<input type="checkbox" style={{ marginRight: 10 }} />
				{todo.task}
			</h2>
		</div>
	);
};

export default Todo;
