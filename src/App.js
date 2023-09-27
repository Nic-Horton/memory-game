import './App.css';
import MemoryCard from './components/MemoryCard';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Memory Game</h1>
				<h3 className="Sub-title">Match Cards To Win</h3>
			</header>
			<MemoryCard />
		</div>
	);
}

export default App;
