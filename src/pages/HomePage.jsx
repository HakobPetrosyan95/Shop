import { useEffect, useState } from "react";
import { CategoryList } from "../components/CategoryList";
import { Filter } from "../components/Filter";

export function HomePage() {
const[categories,setCategories] = useState([])
const[filteredCategory,setFilteredCategory]=useState([]);


  useEffect(() => {
    getAllCategories();
  }, [])

  const getAllCategories = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => res.json())
      .then(data => {
        setCategories(data.categories);
        setFilteredCategory(data.categories);
      })
  }

  const filterFunc = (event)=>{
    const newCategories = categories.filter(elem =>{
      return elem.strCategory.toLowerCase().includes(event.target.value.toLowerCase());
    })
    setFilteredCategory(newCategories);
  }

  return (
    <div className="HomePage">
      <Filter filterFunc={filterFunc}/>
      <CategoryList categories={filteredCategory}/>
    </div>
  )
}