import React from 'react'
import GalleryCard from './GalleryCard'

const Gallery = () => {

  const data = {

    title:{
      title1: "Tags and Titles",
    },

    images:{
      image1: "https://img.freepik.com/free-photo/portrait-smiling-boy_23-2148107451.jpg?uid=R101937191&ga=GA1.1.743775799.1730907905&semt=ais_hybrid",
      image2: "https://img.freepik.com/free-photo/smiley-boy-holding-stack-books_23-2148414545.jpg?uid=R101937191&ga=GA1.1.743775799.1730907905&semt=ais_hybrid",
      image3: "https://img.freepik.com/free-photo/children-with-their-hands-up_23-2148022673.jpg?uid=R101937191&ga=GA1.1.743775799.1730907905&semt=ais_hybrid",
      image4: "https://img.freepik.com/free-photo/little-kid-playing_23-2148836324.jpg?uid=R101937191&ga=GA1.1.743775799.1730907905&semt=ais_hybrid",
      image5: "https://img.freepik.com/free-photo/medium-shot-little-boy-smiling-camera_23-2148210488.jpg?uid=R101937191&ga=GA1.1.743775799.1730907905&semt=ais_hybrid",
      image6: "https://img.freepik.com/free-photo/teacher-hugging-her-students_23-2148633401.jpg?uid=R101937191&ga=GA1.1.743775799.1730907905&semt=ais_hybrid",
      image7: "https://img.freepik.com/free-photo/little-boy-playing_23-2148836275.jpg?uid=R101937191&ga=GA1.1.743775799.1730907905&semt=ais_hybrid",
      image8: "https://img.freepik.com/free-photo/side-view-kids-park-playing_23-2148630740.jpg?uid=R101937191&ga=GA1.1.743775799.1730907905&semt=ais_hybrid",
    },
    
  }

  return (
    <div className='z-10 bg-indigo-100 text-indigo-950 py-40' id='gallery'>
      <div className="heading text-center md:px-60 px-2 flex flex-col gap-10 py-20">
        <h1 className='md:text-7xl text-4xl font-semibold uppercase'>
          Gallery
        </h1>
        <p className='md:text-lg text-base font-thin'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus repellat quo, dolores, aliquam nesciunt asperiores quis</p>
      </div>
      <div className="md:px-10 photos gap-5 flex justify-center items-center flex-wrap">
        <GalleryCard title={data.title.title1} image={data.images.image1}/>
        <GalleryCard title={data.title.title1} image={data.images.image2}/>
        <GalleryCard title={data.title.title1} image={data.images.image3}/>
        <GalleryCard title={data.title.title1} image={data.images.image4}/>
        <GalleryCard title={data.title.title1} image={data.images.image5}/>
        <GalleryCard title={data.title.title1} image={data.images.image6}/>
        <GalleryCard title={data.title.title1} image={data.images.image7}/>
        <GalleryCard title={data.title.title1} image={data.images.image8}/>
        
        
        
      </div>
    </div>

  )
}

export default Gallery