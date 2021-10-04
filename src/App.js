import './App.css';
import { useState, useEffect } from 'react'
import LiComponent from './LiComponent.js'

function App() {
	const [commentArray, setCommentArray] = useState([])

	useEffect(() => {
		let tempArray = []
		for (let i = 0; i < 10; i++) {
			tempArray.push(`${i} banana cream pie` + (i === 1 ? ', terrible idea, too few' : 's'))
		}
		setCommentArray(tempArray)
	}, [])

	return (
		<div className="App">
			<header className="App-header">
				<h1>Number of banana cream pies you may want to eat in one sitting: </h1>
				<p>Banana cream pie emojis: 🍌🥧
				<img src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Tartine_Banana_Cream_Pie_and_Wedding_Cookies.jpg" alt="Delicious banana cream pie" ></img>
				I used floats for this, it's great!
				</p>
				
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
