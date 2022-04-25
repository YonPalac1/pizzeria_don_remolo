import React from 'react'
import PropTypes from 'prop-types'
import './TitleRequestTable.css'

export const TitleRequestTable = ({item,position}) => {
  return (
    <span className={position}>{item}</span>
  )
}

TitleRequestTable.propTypes = {
  item: PropTypes.string
}

 