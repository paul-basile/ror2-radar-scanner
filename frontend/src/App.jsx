
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './css/App.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import SavedItems from './components/SavedItems.jsx';

import { ITEMS } from './data/items.js';

function App() { 
  /* load previously saved item IDs once */
  const [savedItems, setSavedItems] = useState(() => {
    try {
      const stored = localStorage.getItem('savedItems');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  /* save changes to localStorage with useEffect */
  useEffect(() => {
    localStorage.setItem(
      'savedItems',
      JSON.stringify(savedItems)      /* local storage can only save in strings, so we must stringify/parse the items to save/show them */
    );
  }, [savedItems]);

  /* add or remove an item */
  const toggleSaveItem = (itemId) => {
    setSavedItems((previousItems) => {
      if (previousItems.includes(itemId)) {                 /* filters out matching ids, removing the saved item */
        return previousItems.filter((id) => id !== itemId);
      }

      return [...previousItems, itemId];                    /* returns new saved items list without impacted the previous state, ... means that */
    });
  };

  return (
    <div>
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                savedItems={savedItems}
                toggleSaveItem={toggleSaveItem}               /* keeps save status for saved items on the Home page */
              />
            }
          />

          <Route
            path="/saved-items"
            element={
              <SavedItems
                items={ITEMS.filter((item) =>
                  savedItems.includes(item.id)                /* displays saved items, puts them into state */
                )}
                savedItems={savedItems}
                toggleSaveItem={toggleSaveItem}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;