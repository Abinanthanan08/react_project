import React from 'react'
import About from '../components/about'
import Model from '../components/model'
import Contact from '../components/contact'
import Footer from '../components/footer'


function Home() {
  return (
    <>
    <section className="flex justify-center">
      <div className="text-center p-8 ">
        <h1 className="text-4xl font-bold text-yellow-50">Welcome to Car Enthusiast Hub</h1>
        <p className="text-lg text-yellow-50 mt-4">
          Your ultimate destination to explore the world of cars, their features, and advancements.
        </p>

    <img src="https://images.hdqwalls.com/wallpapers/bthumb/speed-yellow-bmw-m4-yn.jpg" alt="Luxury Car" className="w-full max-w-2xl mx-auto mt-6 rounded-lg shadow-lg" />


    <div className="bg-gray-100 p-6 mt-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700">Why Choose a Car?</h2>
      <ul className="mt-4 space-y-3 text-gray-600">
        <li className="flex items-center justify-center">
          🚗 <span className="ml-2">Comfortable and convenient transportation</span>
        </li>
        <li className="flex items-center justify-center">
          ⚡ <span className="ml-2">Advanced safety and technology features</span>
        </li>
        <li className="flex items-center justify-center">
          🌍 <span className="ml-2">Fuel efficiency and eco-friendly options</span>
        </li>
        <li className="flex items-center justify-center">
          💨 <span className="ml-2">High-performance driving experience</span>
        </li>
      </ul>
    </div>

    
    <About/>
    <Model/>
    <Contact/>
    <Footer/>


  </div>
  </section>
  </>
  )
}

export default Home