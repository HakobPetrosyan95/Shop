import React from 'react'
import MealItem from './MealItem'

export  function MealList({meals}) {
  return (
    <div className='MealList'>
        {
            meals.map(elem=> <MealItem key={elem.idMeal} {...elem}/>)
    
        }
    </div>
  )
}
