import { useState } from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';
import { useEffect } from 'react';

const generateDeck = () => {
	const symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
	const deck = [];

	for (let i = 0; i < 16; i++) {
		deck.push({ isFlipped: false, symbol: symbols[i % 8] });
	}
	shuffle(deck);
	return deck;
};

const shuffle = (arr) => {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
};

function App() {
	const [deck, setDeck] = useState([]);
	const [pickedCards, setPickedCards] = useState([]);

	useEffect(() => {
		setDeck(generateDeck());
	}, [setDeck]);

	let cardsJSX = deck.map((card, index) => {
		return (
			<MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} key={index} />
		);
	});

	return (
		<div className="App">
			<header className="App-header">
				<h1>Memory Game</h1>
				<h3 className="Sub-title">Match Cards To Win</h3>
			</header>
			<div>{cardsJSX.slice(0, 4)}</div>
			<div>{cardsJSX.slice(4, 8)}</div>
			<div>{cardsJSX.slice(8, 12)}</div>
			<div>{cardsJSX.slice(12, 16)}</div>
		</div>
	);
}

export default App;
