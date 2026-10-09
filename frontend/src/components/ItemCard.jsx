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
                <button className="save-btn" onClick={onAddClick}>
                    +
                </button>
            </div>
            <div className="item-info">
                <h3>{item.name}</h3>
                <p>{item.category}</p>
            </div>
        </div>
    )
}

export default ItemCard