import React, { useState, useEffect, lazy, Suspense } from "react";
const CardDetails = lazy(() => import("DetailCardInHost/CardDetails"));
const CardShort = lazy(() => import("ShortCardInHost/CardShort"));

const FoodList = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((res) => res.json())
      .then((data) => setItems(data.meals || []));
  }, []);

  const handleCardClick = (item) => {
    setSelectedItem(item); 
  };

  const maxItemsToShow = 7; 

  return (
    <>
      <div className="short-list-container">
        <Suspense fallback={<p>Loading...</p>}>
          {}
          {items.slice(0, maxItemsToShow).map((item) => (
            <CardShort
              key={item.idMeal}
              data={{
                id: item.idMeal,
                name: item.strMeal,
                image: item.strMealThumb,
              }}
              onClick={() => handleCardClick(item)} 
            />
          ))}
        </Suspense>
      </div>

      {}
      {selectedItem && (
        <div className="detail-container">
          <Suspense fallback={<p>Loading...</p>}>
            <CardDetails
              data={{
                id: selectedItem.idMeal,
                name: selectedItem.strMeal,
                image: selectedItem.strMealThumb,
                cuisine: "International", 
                rating: (Math.random() * 5).toFixed(1), 
              }}
            />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default FoodList;
