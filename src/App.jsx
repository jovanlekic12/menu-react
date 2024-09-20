import { useState } from "react";
import Menu from "./menu";
import data from "./data";
import "./App.css";

function App() {
  const [meals, setMeal] = useState(data);

  return (
    <div className="Container">
      <h1 className="title">Our Menu</h1>
      <ul className="list">
        {meals.map((meal) => {
          return <Menu key={meal.id} {...meal}></Menu>;
        })}
      </ul>
    </div>
  );
}

export default App;
