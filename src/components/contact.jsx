import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Contact() {
  const [msg,setMsg] = useState("")

  function handlesubmit(e){
    e.preventDefault()
    setMsg(msg)
    toast.success("Message sent successfully!")
  }

  return (
      <section className="p-8">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6">Get in Touch</h1>
        
        <div className="flex justify-between items-center">
         <div className="w-full sm:w-1/2 lg:w-1/2 mb-8">
          <iframe className="shadow-2xl rounded-3xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.957430289525!2d-81.2663987154323!3d42.95810149673942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef182be491edb%3A0x25f20148d3d7eb92!2sAudi%20London!5e0!3m2!1sen!2sin!4v1738563753056!5m2!1sen!2sin"
          width="100%" 
          height="400" 
          style={{ border: 0 }} 
          allowFullScreen=""
          loading="lazy"
          title="Google Map">
          </iframe>
         </div>
         
         
         <div className="w-full sm:w-1/2 lg:w-1/2">
          <div className="max-w-2xl p-8 rounded-xl shadow-2xl">
            
             <form className="space-y-6" onSubmit={handlesubmit}>
              <div className="flex justify-center">
                <label for="name" className="text-xl font-medium text-yellow-50 m-3">Your Name</label>
                 <input className="p-2 m-2 border-4 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                 type="text" placeholder="Enter your name" required/>
              </div>

              <div className="flex justify-center">
                <label for="email" className="text-xl font-medium text-yellow-50 m-3 ">Email</label>
                 <input className="p-2 m-2 border-4 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg" 
                 type="email" placeholder="Enter your email" required/>
              </div>
              
             <div className="flex justify-center">
              <label for="query" className="text-xl font-medium text-yellow-50 m-3">Query</label>
              <select className="p-2 m-2 border-4 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg" required >
                <option value="" disabled selected>Select your query</option>
                <option value="inquiry" className="bg-gray-900 text-white">General Inquiry</option>
                <option value="support" className="bg-gray-900 text-white">Customer Support</option>
                <option value="feedback" className="bg-gray-900 text-white">Feedback</option>
                <option value="other" className="bg-gray-900 text-white">Other</option>
              </select>
             </div>

            <div className="flex justify-center">
              <label htmlFor="message" className="text-xl font-medium text-yellow-50 m-3">Message</label>
              <textarea className="p-2 m-2 border-4 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg" 
              rows="3" placeholder="Enter your message" required/>
            </div>

            <div className="flex justify-center">
              <button type="submit" className="p-2 m-2 text-white bg-blue-500 hover:bg-blue-700 rounded-xl shadow-xl text-xl font-medium">
                Send Message
              </button>
            </div>
        </form>
        <ToastContainer/>
      </div>
    </div>

  </div>
</section>

  )
}

export default Contact