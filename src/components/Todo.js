import React from 'react';

const Todo = ({ todo, toggleCompleted }) => {
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
				<input
					type="checkbox"
					style={{ marginRight: 10 }}
					onClick={() => toggleCompleted(todo.id)}
				/>
				{todo.task}
				<button
					style={{
						fontWeight: 'bolder',
						backgroundColor: 'red',
						padding: '7px 11px',
						borderRadius: '50%',
						float: 'right',
					}}
				>
					X
				</button>
			</h2>
		</div>
	);
};

export default Todo;
