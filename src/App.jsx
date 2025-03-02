import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import { useState } from 'react';

let a=0;
const App = () => {
 
   const [page,setPage]=useState("hero")
   const[open,setOpen]=useState(false)

   const Tab=()=>{
    return(
      <div className='tab'>

        {
          open?
         ( <div className='buttonContainer'>
            <button className='button' onClick={()=>setPage("hero")}>
              home
       </button>
            <button className='button' onClick={()=>setPage("service")}>
              skills
       </button>
       <button className='button' onClick={()=>setPage("portfolio")}>
              projects
       </button>
       <button className='button' onClick={()=>setPage("contact")}>
              contacts
       </button>
       <button className='button' onClick={()=>setOpen(false)}>
              -
       </button>
          </div>):(<button className='button' onClick={()=>setOpen(true)}>
      
        <img src='/menu-2025.jpg' />
       
        </button>)
        }
        
        </div>
    )
   }

  return (
    <div className='container'>

      {
        page==="hero"?(
          <section >
        <Tab/>
         <Hero/>
         
      </section> 
        ):
        page==="service"?(
          <section >
          <Tab/>
           <Services/>
           
        </section>
        ):
        page==="portfolio"?(
          <section >
          <Tab/>
           <Portfolio/>
           
        </section>
        ):(
          <section >
          <Tab/>
           <Contact/>
           
        </section>
        )
      }
      
      
     
    
      
    </div>
  )
}

export default App