import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaGraduationCap} from 'react-icons/fa';
import {MdWork} from 'react-icons/md';

const Resume = () => {

    const [resume, setResume] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/resume').then((response) => {
            setResume(response.data);
        });
    },[])

    const renderCard = (val, index) => {
        return (
            <VerticalTimelineElement className='vertical-timeline-element--education hover:scale-105 duration-500'
                contentStyle={{ background: '#FFEBB7', color: '#AD8E70' }}
                contentArrowStyle={{ borderRight: '7px solid  #FFEBB7' }}
                iconStyle={{ background: '#0081C9', color: '#fff' }}
                icon={<FaGraduationCap className='text-white' />}
                date={val.period}>
                    <h3 className='text-black'>{val.job}</h3>
                    <p className='text-black'>{val.place}</p>
                </VerticalTimelineElement>
        )
    }
    
  return (
    <div name='resume' 
    className='bg-[#243763] w-full p-56 px-3 lg:pl-16 md:py-36 text-[#FFEBB7]'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center'>
            <div className='md:hidden pb-10'>
                <p className='text-4xl font-bold inline border-b-4 border-[#BAD7E9]'>Resume</p>
            </div>
            <VerticalTimeline lineColor='rgb(16, 204, 82)'>
                {resume.map(renderCard)}
                {/* <VerticalTimelineElement className='vertical-timeline-element--education hover:scale-105 duration-500'
                contentStyle={{ background: '#FFEBB7', color: '#AD8E70' }}
                contentArrowStyle={{ borderRight: '7px solid  #FFEBB7' }}
                iconStyle={{ background: '#0081C9', color: '#fff' }}
                icon={<FaGraduationCap className='text-white' />}
                date='2018-2022'>
                    <h3 className='text-black'>BS Computer Engineering</h3>
                    <p className='text-black'>Emilio Aguinaldo College-Cavite</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--work hover:scale-105 duration-500'
                contentStyle={{ background: '#FFEBB7', color: '#AD8E70'}}
                contentArrowStyle={{ borderRight: '7px solid  #FFEBB7' }}
                iconStyle={{ background: '#C85C8E', color: '#fff' }}
                icon={<MdWork className='text-white'/>}
                date='February-April 2022'>
                    <h3 className='text-black'>Mobile Development Front-End (OJT)</h3>
                    <p className='text-black'>Erovoutika Robotics and Automation Solutions </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--work hover:scale-105 duration-500'
                contentStyle={{ background: '#FFEBB7', color: '#AD8E70'}}
                contentArrowStyle={{ borderRight: '7px solid  #FFEBB7' }}
                iconStyle={{ background: '#C85C8E', color: '#fff' }}
                icon={<MdWork className='text-white'/>}
                date='2022-present'>
                    <h3 className='text-black'>Junior Software Engineer</h3>
                    <p className='text-black'>Cognizant Softvision</p>
                </VerticalTimelineElement> */}
            </VerticalTimeline>
        </div>
    </div>
  )
}

export default Resume