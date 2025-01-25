import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/EmployeeTable.css'

const EmployeeTable = () => {

    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

   const fetchData=()=>{
    setLoading(true);
    setError(null);
     axios.get("http://localhost:3000/employees")
     .then((res)=> setData(res.data))
     .catch((err)=>setError(err.response.data))
     .finally(setLoading(false))
   };

   console.log(data);
  return (
    <div>
        
       
        {isLoading && <h2>Loading...</h2>}
        {error && <p>{error}</p>}
        <table>
            <th>Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Action</th>

        {
            data && data.map((emp)=>{
                return(
                    <>
                    <tr>
                        
                        <td>{emp.name}</td>
                        <td>{emp.designation}</td>
                        <td>{emp.department}</td>
                        <td><button className='delete-btn'>Delete</button></td>
                        
                    </tr>
                   
                    </>
                )
                
            })
        }
        </table>

      
    </div>
  )
}

export default EmployeeTable
