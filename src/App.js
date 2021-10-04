import './App.css';
import { useState, useEffect } from 'react'
import LiComponent from './LiComponent.js'

function App() {
	const [commentArray, setCommentArray] = useState([])

	useEffect(() => {
		let tempArray = []
		for (let i = 0; i < 10; i++) {
			tempArray.push(i)
		}
		setCommentArray(tempArray)
	}, [])

	return (
		<div className="App">
			<header className="App-header">
				<h1>My React Netlify Application</h1>
				<p>Here's smore stuff to add to this component 💪</p>
				<ul>
				{ commentArray.map((element, index) => {
					return (
						<LiComponent key={index} element={element} index={index} />
					)
				})}
				</ul>
			</header>
		</div>
	);
}

export default App;
