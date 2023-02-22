import React from 'react';
import Card from './Card';


const Project = (props) => {

  const loadProject = () => {
    props.load()
  }
  return (
    <div name="project" className='  bg-[#243763] w-full p-40 px-1 md:py-32'>
        <div className='max-screen-lg mx-auto p-4 flex flex-col justify-start w-full text-[#FFEBB7]'>
            <div className='md:hidden'>
                <p className='text-4xl font-bold border-b-4 border-[#BAD7E9] p-2 inline'>Projects</p>
            </div>
            <div className='flex justify-center mt-10 gap-4 '>
            <Card load={loadProject} />
        </div>
        </div>
    </div>
  )
}

export default Project