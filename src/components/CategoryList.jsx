import React from 'react'
import { CategoryItem } from './CategoryItem'

export  function CategoryList({categories}) {
  return (
    <div className='CategoryList'>
        {
            categories.map(elem =><CategoryItem key={elem.idCategory}{...elem}/>
               
            )
        }
    </div>
  )
}
