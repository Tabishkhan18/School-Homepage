import React from 'react'
import GoalCard from '../components/GoalCard';
import goal1 from '../assets/goal1.jpg';
import goal2 from '../assets/goal2.jpg';
import goal3 from '../assets/goal3.jpg';

const Goals = () => {
  return (
    <div className='z-10 bg-white text-indigo-950' id='goals'>
      <div className="heading text-center md:px-60 px-2 flex flex-col gap-10 py-20">
        <h1 className='md:text-7xl text-4xl font-semibold uppercase'>
          Our Goals
        </h1>
        <p className='md:text-lg text-base font-thin'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus repellat quo, dolores, aliquam nesciunt asperiores quis</p>
      </div>
      <div className="cards py-32 md:gap-0 gap-20 flex flex-col justify-center items-center">
        <GoalCard
          title="Experienced Teachers"
          button="Safety Measures"
          image={goal1}
          alternateCard="flex-col md:flex-row"
        />
        <GoalCard
          title="Smart Courses"
          button="Apply Today"
          image={goal2}
          alternateCard="md:flex-row-reverse flex-col"
        />
        <GoalCard
          title="Gallery"
          button="Student Information"
          image={goal3}
          alternateCard="flex-col md:flex-row"
        />
      </div>
    </div>
  )
}

export default Goals
