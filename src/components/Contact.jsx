import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    let navigate = useNavigate()

    const [data, setData] = useState([]);
    
    useEffect(() => {
        loadData();
    },[]);

    const loadData = async () => {
        const result = await axios.get('http://localhost:8081/contactMe')
        console.log(result)
        setData(result.data[0]);
    }

    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: "",
    });

    const { name, email, message } = contact;

    const onInputChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8081/contactMe', data)
        navigate('/')
    }
    
  return (
    <div name='contact me' 
    className='w-full bg-[#243763] text-[#FFEBB7] p-28 px-1 md:py-28 '>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto'>
            <div className=' block mt-12'>
                <p className='md:hidden text-4xl font-bold inline border-b-4 border-[#BAD7E9]'>Contact Me</p>
                <p className='py-6 pb-5'>Get in Touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form onSubmit={(e) => onSubmit (e)} className='flex flex-col w-full md:w-1/2'>
                    <input 
                    type='text' 
                    name= 'name'
                    // 'name' 
                    value={name}
                    onChange={(e) => onInputChange(e)}
                    placeholder='Enter your name' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <input 
                    type='text' 
                    name='email'
                    // 'email' 
                    value={email}
                    onChange={(e) => onInputChange(e)}
                    placeholder='Enter your email' 
                    className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <textarea 
                    name='message'
                    // 'message' 
                    value={message}
                    onChange={(e) => onInputChange(e)}
                    placeholder='Enter your message'
                    rows='10' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    ></textarea>

                    <button className='text-[#243763] bg-[#FFEBB7] px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        Submit
                        </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact