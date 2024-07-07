import React from 'react'
import { useNavigate } from 'react-router-dom'

export  function CategoryItem({
    idCategory,
    strCategory,
    strCategoryThumb,
    strCategoryDescription,
}) {

    const navigate = useNavigate();


  return (
    <div className='CategoryItem' onClick={()=>navigate(`/category/${strCategory}`)}>
        <img src={strCategoryThumb} alt="strCategoryThumb" />
        <h2>id: {idCategory}</h2>
        <h3>Category: {strCategory}</h3>
        <p>Description: {strCategoryDescription.length > 40 ? strCategoryDescription.slice(0,40) + "..." : strCategoryDescription}</p>
    </div>
  )
}
