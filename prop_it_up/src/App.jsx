import Person from './components/PersonCard'
import './App.css'

function App() {


    return (
		<>
			<Person
				firstName="Jane"
				lastName="Doe,"
				attributes={{ age: 45, hairColor: "Black" }}
				
			/>
			<Person
				firstName="John"
				lastName="Smith,"
				attributes={{ age: 88,  hairColor: "Brown" }}
			/>
			<Person
				firstName="Fillmore"
				lastName="Millard,"
				attributes={{ age: 50, hairColor: "Brown" }}
				
			/>
			<Person
				firstName="Maria"
				lastName="Smith,"
				attributes={{ age: 62 ,  hairColor: "Brown" }}
			/>
		</>
	);
}

export default App
