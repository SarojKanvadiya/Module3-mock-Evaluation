import React from 'react'
import "../styles/FilterDropdown.css"
const FilterDropdown = () => {
  return (
    <div>
    <label htmlFor="filter by departement">Filter by Department: </label>
      <select name="" id="">
        <option value="all">All</option>
        <option value="it">IT</option>
        <option value="hr">Hr</option>
        <option value="marketing">Marketing</option>
      </select>
    </div>
  )
}

export default FilterDropdown
