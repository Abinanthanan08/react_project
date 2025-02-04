import React from 'react'

function About() {
  return (
    
      
    <section className="p-8" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2">

        <h1 className="text-3xl font-bold text-yellow-50 mb-4">About</h1>

        <p className="text-lg text-yellow-50 leading-relaxed text-justify">Welcome to Car Enthusiast Hub, your go-to destination for exploring the world of automobiles.We are passionate about providing the latest updates, expert reviews, and in-depth insights into various car models, technologies, and industry trends. Our mission is to empower car enthusiasts and buyers with accurate information, helping them make informed decisions.
         Whether you're looking for performance comparisons, maintenance tips, or upcoming car releases,we’ve got you covered. Join us as we drive through the exciting journey of automotive 
        innovation and excellence. 🚗💨
       </p>

        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
         <img src="https://images.hdqwalls.com/wallpapers/bthumb/audi-r8-v10-rwd-spyder-2019-5k-qi.jpg" alt="Car Image" className="rounded-lg shadow-lg w-full md:w-auto m-12 max-w-md"/>
        </div> 

        
      </div>
    </section>

    
  )
}

export default About