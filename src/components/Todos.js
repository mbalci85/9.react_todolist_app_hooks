import React from 'react';
import Todo from './Todo';

const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
	return (
		<div>
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					todo={todo}
					toggleCompleted={toggleCompleted}
					deleteTodo={deleteTodo}
				/>
			))}
		</div>
	);
};

export default Todos;
