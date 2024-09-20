import { useState } from "react";
import Menu from "./menu";
import Categories from "./categories";
import data from "./data";
import "./App.css";
const allCategories = ["All", ...new Set(data.map((meal) => meal.category))];
function App() {
  const [meals] = useState(data);
  const [filteredMeals, setFilteredMeals] = useState(meals);

  const filterItems = (category) => {
    if (category === "All") {
      setFilteredMeals(meals);
      return;
    }
    const newItems = meals.filter((meal) => meal.category === category);
    setFilteredMeals(newItems);
  };

  return (
    <div className="Container">
      <h1 className="app__title">Our Menu</h1>
      <Categories
        categories={allCategories}
        filterItems={filterItems}
      ></Categories>
      <ul className="list">
        {filteredMeals.map((meal) => {
          return <Menu key={meal.id} {...meal}></Menu>;
        })}
      </ul>
    </div>
  );
}

export default App;
