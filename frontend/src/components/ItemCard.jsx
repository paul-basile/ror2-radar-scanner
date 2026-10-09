import '../css/HomeAndSearch.css'

function ItemCard ({item}) {

    function onAddClick() {
        alert("clicked");
    }

    return (
        <div className="item-card">
            <div className="item-image">
                <img src={item.icon} alt={item.name} />
            </div>
            <div className="button-overlay">
                <button className="save-btn" onClick={onAddClick} aria-label={`Save ${item.name}`}>
                    +
                </button>
            </div>
            <div className="item-info">
                <h3>{item.name}</h3>
                <p className="item-category">{item.category}</p>
                <p className="item-description">{item.description}</p>
            </div>
        </div>
    );
}

export default ItemCard