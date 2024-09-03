import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
fetch("https://pokeapi.co/api/v2/pokemon")
	.then((response) => {
		//do something
	})
	.catch((err) => {
		console.log(err);
	});
