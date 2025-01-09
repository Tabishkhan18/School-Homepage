import React from 'react'

const GoalCard = ({alternateCard, title, image, button}) => {
    const imagePath = `${image}`
  return (
    
      <div className={`bg-indigo-950 text-white flex ${alternateCard} max-w-7xl overflow-hidden`}>
        {/* Text Section */}
        <div className="flex flex-col md:w-1/2 justify-center items-center p-10 md:p-20">
          <h2 className="text-3xl text-center font-semibold mb-4 text-indigo-500">{title}</h2>
          <p className="text-white font-light text-center mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorem assumenda non! Maiores in animi exercitationem, iste doloribus nemo sequi. Minus aliquid reprehenderit cumque vero molestias sit, accusamus enim! Fuga!
          </p>
          <button className='bg-indigo-500 border-2 border-indigo-500 hover:border-white hover:bg-indigo-950 my-2 font-thin md:text-lg text-sm text-white px-5 py-2 w-2/3 transition-all duration-200 ease-in-out'>{button}</button>
        </div>
        {/* Image Section */}
        <div className="flex flex-col md:w-1/2">
          <img
            src={imagePath} // Replace with the appropriate image URL or import
            alt="Students studying"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
  )
}

export default GoalCard
