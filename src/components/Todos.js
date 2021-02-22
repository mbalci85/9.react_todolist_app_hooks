import React from 'react';
import Todo from './Todo';

const Todos = ({ todos, toggleCompleted }) => {
	return (
		<div>
			{todos.map((todo) => (
				<Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />
			))}
		</div>
	);
};

export default Todos;
