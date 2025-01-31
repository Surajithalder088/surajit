import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

let a=0;
const App = () => {
  return (
    <div className='container'>
      <section id='home'>
         <Hero/>
      </section> 
      <section id='services'>
        <Services/>
     </section>
    
       <Portfolio/>
    
    
    <section id='contact'>
      <Contact/>
    </section>
      
    </div>
  )
}

export default App