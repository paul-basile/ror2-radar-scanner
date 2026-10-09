
import ItemCard from './ItemCard.jsx';
import '../css/ItemCard.css';

function SavedItems({
  items,
  savedItems,
  toggleSaveItem
}) {
  return (
    <div className="saved-items">
      <h1>Saved Items - create your item plan/build here!</h1>

      {items.length === 0 ? (                           /* if items length is not 0, .map() retrieves the items, their save status, etc */
        <p>
          You haven't saved any items yet.
          Return to Home to add some!
        </p>
      ) : (
        <div className="item-grid">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              isSaved={savedItems.includes(item.id)}
              toggleSaveItem={toggleSaveItem}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedItems;