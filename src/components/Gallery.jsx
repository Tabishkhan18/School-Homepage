import React from 'react'
import GalleryCard from './GalleryCard'
import g1 from '../assets/g1.jpg';
import g2 from '../assets/g2.jpg';
import g3 from '../assets/g3.jpg';
import g4 from '../assets/g4.jpg';
import g5 from '../assets/g5.jpg';
import g6 from '../assets/g6.jpg';
import g7 from '../assets/g7.jpg';
import g8 from '../assets/g8.jpg';


const Gallery = () => {

  const data = {

    title:{
      title1: "Tags and Titles",
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
      <div className="md:px-10 photos gap-5  flex justify-center items-center flex-wrap">
        <GalleryCard title={data.title.title1} image={g1}/>
        <GalleryCard title={data.title.title1} image={g2}/>
        <GalleryCard title={data.title.title1} image={g3}/>
        <GalleryCard title={data.title.title1} image={g4}/>
        <GalleryCard title={data.title.title1} image={g5}/>
        <GalleryCard title={data.title.title1} image={g6}/>
        <GalleryCard title={data.title.title1} image={g7}/>
        <GalleryCard title={data.title.title1} image={g8}/>
        
        
        
      </div>
    </div>

  )
}

export default Gallery
