import React from 'react'

const MySelect = ({options, onChange,value}) => {
  return (
  <select  onChange={(event)=> onChange(event.target.value)} value={value}>
    <option disabled value="value1">sort</option>
    {options.map(option =>
     <option key={option.value} value={option.value}>{option.name}</option>   
    )}
  </select>
  )
}

export default MySelect
