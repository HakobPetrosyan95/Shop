import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MealItem({idMeal,strMeal,strMealThumb}) {
  const navigate =useNavigate();

  return (
    <div className='MealItem' onClick={()=> navigate(`/recipe/${idMeal}`)}>
        <img src={strMealThumb} alt='strMealThumb'/>
        <p><b>id:</b>{idMeal}</p>
        <p><b>Name:</b>{strMeal}</p>
        <b>Detali...</b>
    </div>
  )
}
