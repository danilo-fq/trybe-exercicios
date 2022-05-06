import './App.css';
import Header from './Header'
import PokemonsList from './PokemonsList'

function App() {
  return (
    <main>
      <Header title='PokeDex'/>
      <PokemonsList />
    </main>
  );
}

export default App;
