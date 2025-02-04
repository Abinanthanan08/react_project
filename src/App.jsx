import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Layout from './layout/layout'
import Home from './pages/home'
import About from './components/about'
import Model from './components/model'
import Contact from './components/contact'



function App() {
  

  return (
    <>

     <BrowserRouter>
     
     <Routes>
       <Route path="/" element={<Layout />}>
         <Route path="/" element={<Home />} />
         <Route path="about" element={<About />} />
         <Route path="model" element={<Model />} />
         <Route path="contact" element={<Contact />} />
       </Route>
     </Routes>

     </BrowserRouter>
    
    </>
    
    
  )
}

export default App
