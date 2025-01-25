import React from 'react'
import EmployeeTable from './components/EmployeeTable'
import AddEmployeeForm from './components/AddEmployeeForm'

const App = () => {
  return (
    <div>
       <h1>Employee Management Dashboard</h1>
       <AddEmployeeForm/>
      <EmployeeTable/>
    </div>
  )
}

export default App
