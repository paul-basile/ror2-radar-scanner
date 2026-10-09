
main.jsx
└── StrictMode
    └── BrowserRouter
        └── App.jsx
            │
            ├── useState(savedItems)
            ├── useEffect(localStorage)
            │
            ├── Navbar.jsx
            │   ├── Home Link
            │   └── Saved Items Link
            │
            └── Routes
                │
                ├── "/" → Home.jsx
                │   │
                │   ├── useState(searchQuery)
                │   │
                │   ├── Searchbar.jsx
                │   │   ├── Search Input
                │   │   └── Search Button
                │   │
                │   └── ItemCard.jsx (multiple)
                │       ├── Item Image
                │       ├── Item Name
                │       ├── Item Category
                │       ├── Item Description
                │       └── Save/Unsave Button
                │
                ├── "/saved-items" → SavedItems.jsx
                │   │
                │   └── ItemCard.jsx (saved items)
                │       └── Save/Unsave Button
                │
                └── "*" → Page Not Found
