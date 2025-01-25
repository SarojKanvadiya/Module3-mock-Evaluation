import React, { useEffect, useState } from 'react';
import "../styles/AddEmployeeForm.css"
import axios from 'axios';


const AddEmployeeForm = () => {

    const [display, setDisplay] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        designation: "",
        department: "",

    });
    const [data, setData] = useState();
    const handleInput = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })

    }
    const handleSubmit = (e) => {
        setData(formData)
        axios({
            method: "POST",
            url: 'http://localhost:3000/employees',
            data: {
                "name": "John Doe",
  "designation": "Software Engineer",
  "department": "IT",
            }
            
        })
        
    }
    console.log(data)
    // useEffect(() => {
    //     axios({
    //         method: "POST",
    //         url: 'http://localhost:3000/employees',
    //         data: {
    //             "name": {name},
    //   "designation": {designation},
    //   "department": {departement}
    //         }
            
    //     })
    // }, [])
    return (
        <div>
            {console.log(display)}
            <button onClick={() => setDisplay(!display)}>Add Employee</button>
            <div className='form-container' style={{ display: display || "none" }}>
                <form onSubmit={handleSubmit}>
                    <h2>Add New Employee</h2>
                    <label htmlFor="name">Name:</label>
                    <input type="text" placeholder='Enter Name' name='name' value={formData.name} onChange={handleInput} />
                    <label htmlFor="designation">Designation:</label>
                    <input type="text" placeholder='Enter Designation' name='designation' value={formData.designation} onChange={handleInput} />
                    <label htmlFor="department">Department</label>
                    <select name="department" id="" value={formData.department} onChange={handleInput}>
                        <option value="it">IT</option>
                        <option value="hr">HR</option>
                        <option value="marketing">Marketing</option>
                    </select>
                    <input type="submit" name='Add Employee' />
                </form>
            </div>
        </div>
    )
}

export default AddEmployeeForm
