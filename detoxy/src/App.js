import React from 'react';
import './App.css';
import {ReactComponent as Logo} from './assets/Detoxy_Logo.svg';
import SearchBar from './components/searchbar/searchbar';
import CompoundCard from './components/compound-card/compound-card';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js'


const supabase = createClient('https://uyzlmhwxpgjmdrdfehci.supabase.co', process.env.REACT_APP_SUPABASE_KEY)

function App() {
  const [compounds, setCompounds] = useState([]);
  const [searchTermArray, setSearchTermArray] = useState([]);

  const fetchIngredients = async (ingredients) => {
    try {
      let results = []
      for (const name of searchTermArray) {
        const { data, error } = await supabase
          .from('kosmetikinhaltsstoffe')
          .select('*')
          .ilike('name', `%${name}%`)
          
        if (data) {
          results.push(...data);
        }
      }
      return results;
    } catch (err) {
        console.error('Fehler beim Abrufen der Inhaltsstoffe:', err);
        return [];
    }
};

  const handleSearch = (searchString) => {
    setSearchTermArray(splitSearchTerm(searchString, detectSeparator(searchString)));
    fetchIngredients(searchTermArray).then((data) => {
      setCompounds(data);
    });
    console.log(searchTermArray)
    console.log(compounds);
  };

  const detectSeparator = (searchTerm) => {
    const separators = [',', ';', '|', '/'];
    return separators.find(sep => searchTerm.includes(sep)) || ',';
  };

  const splitSearchTerm = (searchTerm, mode = ',') => {
    if (searchTerm === '') {
      return [];
    }
    const searchTermArray = searchTerm.split(mode).map(term => term.trim());
    return searchTermArray;
  };

  return (
    <div className="App">
      <Logo className="App-logo" />
       
        <SearchBar handleSearch={handleSearch}></SearchBar> 
        
        {compounds && compounds.length > 0 && (
          <div className='results'>
            {compounds.map((compound) => (
              <CompoundCard
                key={compound.id}
                title={compound.name}
                chemClass={compound.chemischefamilie}
                positiveAttributes={compound.positiveeigenschaften}
                negativeAttributes={compound.negativeeigenschaften}
              />
            ))}
    </div>
  )}
</div>
  );
}

export default App;
