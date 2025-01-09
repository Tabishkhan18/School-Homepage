import React from 'react'
import GoalCard from '../components/GoalCard';

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
          image="https://img.freepik.com/free-photo/young-teacher-helping-little-girl-class_23-2148633378.jpg?t=st=1736422153~exp=1736425753~hmac=65ee4c5bf261b1da0d5f34176715705a6a0fc1144d008d84c6441dec9be92d63&w=740"
          alternateCard="flex-col md:flex-row"
        />
        <GoalCard
          title="Smart Courses"
          button="Apply Today"
          image="https://img.freepik.com/free-photo/students-doing-homework-park_53876-42624.jpg?t=st=1736422208~exp=1736425808~hmac=6b124c3f18e46719cc41ebd1140446f81b3f4d0447d6e424a1c40a2a6eea97de&w=740"
          alternateCard="md:flex-row-reverse flex-col"
        />
        <GoalCard
          title="Gallery"
          button="Student Information"
          image="https://img.freepik.com/free-photo/smiley-boy-holding-book-class_23-2148673964.jpg?t=st=1736422248~exp=1736425848~hmac=cff02263b44bd35894cc71ea92fd68694468b97cf289a02804353f806a1091f2&w=740"
          alternateCard="flex-col md:flex-row"
        />
      </div>
    </div>
  )
}

export default Goals
