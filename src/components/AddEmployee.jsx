import React, {useState} from 'react'
import EmployeeServices from '../services/EmployeeServices';

const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]: value})
    }

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeServices.saveEmployee(employee)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

  return (
    <div className='flex max-w-full p-44 justify-center bg-[#243763] mx-auto shadow '>
        <div className='m-10 p-16 bg-red-500'>
            <div className='text-[#FFEBB7] font-thin text-2xl tracking-wider'>
                <h1>New Member</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-[#FFEBB7] text-sm font-normal'>
                    First Name
                    </label>
                    <input 
                    type="text"
                    name='firstName'
                    value={employee.firstName}
                    onChange={(e) => handleChange(e)}
                    className='h-10 w-96 border mt-2 py-2 px-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-[#FFEBB7] text-sm font-normal'>
                    Last Name
                    </label>
                    <input 
                    type="text"
                    name='lastName'
                    value={employee.lastName}
                    onChange={(e) => handleChange(e)}
                    className='h-10 w-96 border mt-2 py-2 px-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-[#FFEBB7] text-sm font-normal'>
                    Email
                    </label>
                    <input 
                    type="email"
                    name='emailId'
                    value={employee.emailId}
                    onChange={(e) => handleChange(e)}
                    className='h-10 w-96 border mt-2 py-2 px-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                <button onClick={saveEmployee} className='rounded text-white font-semibold bg-green-500 hover:bg-green-700 py-2 px-6'>
                    Save
                    </button>
                    <button className='rounded text-white font-semibold bg-red-500 hover:bg-red-700 py-2 px-6'>
                    Clear
                    </button>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee