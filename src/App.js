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

	const pickCard = (cardIndex) => {
		if (deck[cardIndex].isFlipped === true) {
			return;
		}
		let cardToFlip = { ...deck[cardIndex] };
		cardToFlip.isFlipped = true;

		let newPickedCards = pickedCards.concat(cardIndex);
		let newDeck = deck.map((card, index) => {
			if (cardIndex === index) {
				return cardToFlip;
			}
			return card;
		});

		if (newPickedCards.length === 2) {
			const card1Index = newPickedCards[0];
			const card2Index = newPickedCards[1];
			if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
				setTimeout(() => unflipCards(card1Index, card2Index), 1000);
			}
			newPickedCards = [];
		}

		setDeck(newDeck);
		setPickedCards(newPickedCards);
	};

	const unflipCards = (card1Index, card2Index) => {
		const card1 = { ...deck[card1Index] };
		const card2 = { ...deck[card2Index] };
		card1.isFlipped = false;
		card2.isFlipped = false;
		let newDeck = deck.map((card, index) => {
			if (card1Index === index) {
				return card1;
			}
			if (card2Index === index) {
				return card2;
			}
			return card;
		});
		setDeck(newDeck);
	};

	let cardsJSX = deck.map((card, index) => {
		return (
			<MemoryCard
				symbol={card.symbol}
				isFlipped={card.isFlipped}
				key={index}
				pickCard={() => pickCard(index)}
			/>
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
