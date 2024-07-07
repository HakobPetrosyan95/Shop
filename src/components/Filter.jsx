import React from 'react'

export  function Filter({filterFunc}) {
  return (
    <form className='Filter'>
        <span>Search goods by category name</span>
        <input type='search' onChange={filterFunc}/>
    </form>
  )
}
