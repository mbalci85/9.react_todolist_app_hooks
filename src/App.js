import './App.css';
import React, { useState } from 'react';
import { uuid } from 'uuidv4';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import About from './pages/About';

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

	const addToDo = (task) => {
		const newTask = {
			id: uuid(),
			task,
			completed: false,
		};
		setTodos([...todos, newTask]);
	};

	return (
		<Router>
			<div className="App">
				<h1 style={{ margin: 20, fontWeight: 'bolder', fontSize: 50 }}>
					TODO LIST
				</h1>
				<Link
					to="/"
					exact
					style={{ textDecoration: 'none', marginBottom: 10 }}
				>
					Home |{' '}
				</Link>
				<Link
					to="/about"
					style={{ textDecoration: 'none', marginBottom: 10 }}
				>
					About
				</Link>
				<br />
				<br />
				<Switch>
					<Route
						path="/"
						exact
						render={() => (
							<React.Fragment>
								<AddTodo addToDo={addToDo} />
								{todos.length !== 0 ? (
									<Todos
										todos={todos}
										toggleCompleted={toggleCompleted}
										deleteTodo={deleteTodo}
									/>
								) : (
									<h2
										style={{
											color: 'coral',
											marginTop: 100,
											fontWeight: 'bolder',
										}}
									>
										No Task to Show
									</h2>
								)}
							</React.Fragment>
						)}
					/>
					<Route path="/about" component={About} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
