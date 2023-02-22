import React, { useEffect, useState } from 'react';
import MjolnirProject from '../assets/images.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Card = (props) => {

  const [project, setProject] = useState([])
  const [img, setImg] = useState([])
  

  useEffect(() => {
    loadProject();
  },[]);

  const loadProject = async () => {
    const result = await axios.get("http://localhost:8081/project")
    console.log(project)
    setProject(result.data[0]);
    setImg(require(`../assets/${result.data[0].image}`));
  };

  const onButtonClick = () => {
    props.load()
  }
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-[#FFEBB7] mt-5 mb-6">
      <img class="m-auto mt-6" src={img} alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-3xl text-[#243763] mb-3">
          {/* Mjolnir Project */}
          {project.title}
          </div>
        <p class="text-[#AD8E70] text-base">
          {/* The user's story need to create get by id, can post a member, can update a member, can retrieve all people and also can delete. It cannot retrieve the inactive member. */}
          {project.description}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:scale-110 duration-300">Spring Boot</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:scale-110 duration-300">PostMan</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:scale-110 duration-300">Postgre Sql</span>
      </div>
      <div className='flex justify-center'>
        <a href={project.link} target="_blank">
          <button className='inline-block text-white bg-[#2B3467] px-3 py-1 mb-2 mr-10 items-center rounded-md hover:scale-110 duration-300'>
            Code
          </button>
        </a>
        
          <Link to="/addemployee" >
          <button onClick={onButtonClick} className='inline-block text-white bg-[#2B3467] px-3 py-1 mb-2  items-center rounded-md hover:scale-110 duration-300'>
            Demo
          </button>
                        </Link>
      </div>
    </div>
  )
}

export default Card