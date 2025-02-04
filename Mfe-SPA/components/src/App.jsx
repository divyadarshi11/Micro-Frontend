import React, { useState } from "react";
import CardDetails from "./components/CardDetails.jsx";
import CardShort from "./components/CardShort.jsx";

const App = () => {
  const [isCardClicked, setIsCardClicked] = useState(false); 

  const cardDetails = {
    image: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/avocado-toast.jpg",
    name: "Avocado Toast",
    cuisine: "Mexican",
    rating: 4.2,
  };

  const cardShortDetails = {
    image: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/avocado-toast.jpg",
    name: "Avocado Toast",
  };

  const handleCardClick = () => {
    setIsCardClicked(true); 
  };

  return (
    <>
      <div onClick={handleCardClick}>
        {!isCardClicked ? (
          <CardShort data={cardShortDetails} />
        ) : (
          <CardDetails data={cardDetails} />
        )}
      </div>
    </>
  );
};

export default App;
