import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterCategoryAction, nameCategoryAction, loaderAction } from '../../../redux/dataReducer';
import { animateScroll as scroll, Link } from 'react-scroll'
import { Link as Li, useLocation } from 'react-router-dom';
import { filterCategoryAction, nameCategoryAction, loaderAction } from '../../../redux/dataReducer';

export const Item = ({ category }) => {

    const location = useLocation().pathname // Get route

    const [flag, setFlag] = useState(false)

    useEffect(() => {
        const ROUTE = '/';
        if (location !== ROUTE) {
            setFlag(true)
        }
    }, [location]);

    const dispatch = useDispatch()

    const handleFilterCategories = (value) => {
        scroll.scrollMore(1300)
        value = value.toLowerCase()
        try {
            dispatch(loaderAction(true))
            dispatch(filterCategoryAction(value))
            dispatch(nameCategoryAction(value))

        } catch (err) {
            console.log(err)
        }
    }
    const ScrollDown = <Link onClick={() => handleFilterCategories(category)} smooth={true} duration={500} delay={1000}>{category}</Link>
    const goHome = <Link onClick={() => handleFilterCategories(category)} smooth={true} duration={500} delay={1000}><Li to="/" >{category}</Li> </Link>

    return (
        <>
            {flag === false ?
                ScrollDown
                :
                goHome
            }
        </>
    )



}



