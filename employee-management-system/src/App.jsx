import React from 'react'
import EmployeeTable from './components/EmployeeTable'
import AddEmployeeForm from './components/AddEmployeeForm'
import FilterDropdown from './components/FilterDropdown'

const App = () => {
  return (
    <div>
       <h1>Employee Management Dashboard</h1>
       <FilterDropdown/>
       <AddEmployeeForm/>
      <EmployeeTable/>
    </div>
  )
}

export default App
