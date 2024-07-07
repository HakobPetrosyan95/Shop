import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MealList } from "../components/MealList";

export function CategoryPage() {
  const [meals, setMeals] = useState([]);
  const {name} = useParams();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
      .then(response => response.json())
      .then(data => setMeals(data.meals));
  }, [])

  return (
    <div className="CategoryPage">
      <h1>Category - {name}</h1>
      <Link to={-1}>Go back</Link>
      <MealList meals={meals} />
    </div>
  )
}