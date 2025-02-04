import React from 'react'

function Model() {
  return (
    
      <section className="p-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Our Car Models</h1>
          <p className="text-lg text-yellow-50 leading-relaxed text-justify">
            Explore our wide range of car models that combine cutting-edge technology, premium performance, and timeless design. Whether you're looking for a high-performance sports car, a reliable family sedan, or a rugged SUV, we offer a variety of models to suit your needs and preferences. Each car is built with precision engineering and packed with features designed to provide an unmatched driving experience. Browse through our collection and find your perfect match today!
         </p>
       </div>

  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img src="https://images.hdqwalls.com/wallpapers/bthumb/yellow-audi-r8-v10-plus-t8.jpg" alt="Car Model 1" className="w-full h-48 object-cover"/>

      <div className="p-4">
        <h2 className="text-xl font-semibold">Audi  Model</h2>
        <p className="text-gray-500">A sleek and comfortable sedan for all your journeys.</p>
      </div>
    </div>

    <div className="rounded-lg overflow-hidden shadow-lg">
      <img src="https://images.hdqwalls.com/wallpapers/bthumb/lamborghini-urus-blue-82.jpg" alt="Car Model 2" className="w-full h-48 object-cover"/>

      <div className="p-4">
        <h2 className="text-xl font-semibold">Lamborghini  Model</h2>
        <p className="text-gray-600">A powerful and spacious SUV for your adventures.</p>
      </div>
    </div>

    <div className="rounded-lg overflow-hidden shadow-lg">
      <img src="https://images.hdqwalls.com/wallpapers/bthumb/ferrari-812-gts-2023-5k-0z.jpg" alt="Car Model 3" className="w-full h-48 object-cover"/>

      <div className="p-4">
        <h2 className="text-xl font-semibold">Ferrari  Model</h2>
        <p className="text-gray-600">A fast and stylish sports car for performance enthusiasts.</p>
      </div>
    </div>

  </div>
</section>

  

    
  )
}

export default Model