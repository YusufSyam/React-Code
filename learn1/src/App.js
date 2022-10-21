import Todo from './components/Todo'

function App() {
	return (
		<div className='appContainer'>
			<h1>My Todos</h1>
			<div className='todoContainer'>
				<Todo text='Todo1'/>
				<Todo text='Todo2'/>
				<Todo text='Todo3'/>
				<Todo text/>
			</div>
		</div>
	);
}

export default App;
