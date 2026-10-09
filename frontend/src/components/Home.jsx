
import { useState } from 'react';
import { ITEMS } from '../data/items.js';
import ItemCard from './ItemCard.jsx';
import Searchbar from './Searchbar.jsx';
import '../css/Home.css';

function Home() {

    /* 
        State: something where once it is updated, the component rerenders itself to show the new state. When you're writing something like a form (search), you want
        to have the form elements connected to a piece of state, that which you can use in your component however you want

        searchQuery = name of the state
        setSearchQuery = function that allows you to update the state
        useState() = default value of the state
    */

  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = ITEMS.filter((item) => {            /* results after searching */
    return item.name
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());
  });
    
  /* extracts the items with .map() and filters them based on input */
  return (
    <div className="home">
      <h1>Risk of Rain 2 Items</h1>

      <Searchbar                                            /* separate searchbar component */
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <p className="results-count">
        Showing {filteredItems.length} of {ITEMS.length} items
      </p>

      <div className="item-grid">                           
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (                 /* after a search, filteredItems processes the new input after the arrow function here again and again */
            <ItemCard key={item.id} item={item} />
          ))
        ) : (
          <p>No items found matching "{searchQuery}"</p>
        )}
      </div>
    </div>
  );
}

export default Home;