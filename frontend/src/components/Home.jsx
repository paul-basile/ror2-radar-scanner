import ItemCard from '../components/ItemCard,jsx'
import {useState} from 'react'

function Home() {

    const handleSearch = (e) => {
        e.preventDefault();     /* prevents the default state from appearing */
        alert(searchQuery);
        setSearchQuery("");
    }

    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input type="text" 
                    placeholder="Search for items..." 
                    className="search-input" 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} /* onChange, we get e which is the change, then we get e.target.value and set state equal to that */
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="item-grid">
                {items.map(item => (
                    item.title.toLowerCase().startsWith(searchQuery) && ( <ItemCard item={item} key={item.id}/> )
                ))}
            </div>

        </div>
    )
}

export default Home