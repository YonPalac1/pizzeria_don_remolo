import React,{useState,useEffect} from 'react'
import {Moment} from 'react-moment'
import { PropTypes } from 'prop-types'

export const DateTd = ({date}) => {

    const [value, setValue] = useState('')
     

    const handleColor = () => {

     
       
   
    }
   
    useEffect(() => {
        handleColor()
      
    }, [])


    return(
        <>
           

            <span>
            <Moment format="YYYY/MM/DD">
                1976-04-19T12:59-0500
            </Moment>
            </span>
        </>
    )
}

DateTd.propTypes = {
    state: PropTypes.string

}





