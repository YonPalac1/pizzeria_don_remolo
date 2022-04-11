import React from 'react';
import { useDispatch } from 'react-redux';
import { filterCategoryAction, nameCategoryAction, loaderAction } from '../../redux/dataReducer';

export const CardsCategories = ({ category, categoryActive }) => {
    const dispatch = useDispatch()

    const handleFilterCategories = (name) => {
        try {
            dispatch(loaderAction(true))
            dispatch(filterCategoryAction(name))
            dispatch(nameCategoryAction(name))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className='categories-cards' onClick={() => handleFilterCategories(category.name)}>
                <div className={`categorie-card ${categoryActive === category.name ? "active" : "unactive"}`}>
                    <span>{category.name}</span>
                </div>
            </div>
        </>
    )
}
