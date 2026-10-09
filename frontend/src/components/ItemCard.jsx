import '../css/HomeAndSearch.css'


function ItemCard({ item, isSaved, toggleSaveItem }) {
  return (
    <div className="item-card">

      <div className="item-image">
        {item.icon ? (
          <img src={item.icon} alt={item.name} />       /* checks for available image */
        ) : (
          <p>No image available</p>
        )}
      </div>

      <div className="button-overlay">
        <button
          type="button"
          className="save-btn"
          onClick={() => toggleSaveItem(item.id)}       /* toggleSaveItem fucntion in App */
          aria-label={
            isSaved
              ? `Remove ${item.name} from saved items`
              : `Save ${item.name}`
          }
        >
          {isSaved ? '✓' : '+'}
        </button>
      </div>

      <div className="item-info">
        <h3>{item.name}</h3>
        <p>{item.category}</p>
        <p>{item.description}</p>
      </div>

    </div>
  );
}

export default ItemCard;