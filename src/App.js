import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/UI/Header.js';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/UI/Search.js';
import axios from 'axios';

const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect( () => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems();
  }, [query]);

  return (
    <div className="App">
      <Header />
      <Search getQuery={(value) => setQuery(value)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
