import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
export  function DetailPage() {
    const [meal,setMeal] = useState([])
    const {id} = useParams();
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.meals[0])
            setMeal(data.meals[0]);
        })
    }, [])
    return (
        <div className="DetailPage">
            <img src={meal.strMealThumb} alt="strMealThumb" />
            <div className="meal">
                <p><b>id:</b> {meal.idMeal}</p>
                <p><b>Area:</b> {meal.strArea}</p>
                <p><b>Category:</b> {meal.strCategory}</p>
                <p><b>Description:</b> {meal.strInstructions}</p>
                <Link to={meal.strYoutube}>Go to Youtube</Link>
            </div>
        </div>
    )
}