import React, { useState } from 'react';
import "../styles/AddEmployeeForm.css"


const AddEmployeeForm = () => {

    const [display, setDisplay] = useState(false);
  return (
    <div>
        {console.log(display)}
      <button onClick={()=>setDisplay(!display)}>Add Employee</button>
      <div className='form-container' style={{display:{display}&&"flex"}}>
      <form style={{display:{display}&&"flex"}}>
        <h2>Add New Employee</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder='Enter Name'/>
        <label htmlFor="designation">Designation:</label>
        <input type="text"  placeholder='Enter Designation'/>
        <label htmlFor="department">Department</label>
        <select name="" id="">
            <option value="it">IT</option>
            <option value="hr">HR</option>
            <option value="marketing">Marketing</option>
        </select>
        <input type="submit" name='Add Employee'/> 
      </form>
      </div>
    </div>
  )
}

export default AddEmployeeForm
