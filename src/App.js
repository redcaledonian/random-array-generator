import './App.css';
import ChunkArray from './components/ChunkArray';

function App() {
  return (
    <div className='vertical-center'>
      <div class='container'>
        <h1>Array Generator</h1>
        <ChunkArray />
        <p>Refresh the page to get a new array</p>
      </div>
    </div>
  );
}

export default App;
