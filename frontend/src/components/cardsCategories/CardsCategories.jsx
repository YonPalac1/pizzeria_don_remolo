import React from 'react';
import { useDispatch } from 'react-redux';
import { filterCategoryAction, loaderAction } from '../../redux/dataReducer';

export const CardsCategories = ({category}) => {
  const dispatch = useDispatch()

  const handleFilterCategories = (name) => {
    try {
      dispatch(loaderAction(true))
      dispatch(filterCategoryAction(name))
    } catch(err){
      console.log(err)
    }
  }

  return (
    <>
    <div className='categories-cards' onClick={()=>handleFilterCategories(category.name)}>
        <div className={`categorie-card ${category.active ? "active" : "unactive"}`}>
            <span>{category.name}</span>
        </div>
    </div>
    </>
  )
}
