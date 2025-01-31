import React, { useRef } from 'react'
import "./services.css"
import ComputerModelContainer from './computer/ComputerModelContainer'
import { motion, useInView } from 'motion/react'

const textvariants={
  initial:{
    x:-100,
    y:-100,
    opacity:0
  },
  animate:{
    x:0,
    y:0,
    opacity:1,
    transition:{
      duration:1.4
    }
  }
}
const listvariants={
  initial:{
    x:-100,
   
    opacity:0
  },
  animate:{
    x:0,
   
    opacity:1,
    transition:{
      duration:2,
      staggerChildren:0.5
    }
  }
}
const countvariants={
  initial:{
   
    y:100,
    opacity:0
  },
  animate:{
   
    y:0,
    opacity:1,
    transition:{
      duration:1.4
    }
  }
}
const services=[
  {id:1,
    img:"/service1.png",
    title:" Fullstack Web Developement",
    counter:35
  },
  {id:2,
    img:"/service2.png",
    title:"Mobile app Developement",
    counter:15
  },
  {id:3,
    img:"/service3.png",
    title:"Backend Developement",
    counter:23
  }
]

const Services = () => {
  const ref=useRef()
  const isInView=useInView(ref,{margin:"-200px"})
  return (
    <div className='services' ref={ref}>
      <div className="sSection left ">
        <motion.h1 className="sTitle"
         variants={textvariants} initial='initial'
          animate={isInView?"animate":"initial"}>
            I'm Profficient in..</motion.h1>

        <motion.div className="serviceList" 
        variants={listvariants} 
        animate={isInView?"animate":"initial"}
        >
          {services.map((service)=>( 
             <a   href='https://github.com/Surajithalder088'>
           <motion.div variants={listvariants} className="service" key={service.id}>
          
            <div className="serviceIcon">
              <img src={service.img}/>
            </div>
            <div className="serviceInfo">
              <h2>{service.title}</h2>
              <h3>{service.counter}</h3>
            </div>
           </motion.div></a>
          ))}
        </motion.div>
        <motion.div className="counterList"
        variants={countvariants} initial='initial'
        animate={isInView?"animate":"initial"}
         >
        <div className="counterText">Project Completed</div>
        <div className="count">5</div>
        </motion.div>
        <a href='/#portfolio' className='scroll'>
        <img src='/mouse.png' />
        </a>
      </div>
      <div className="sSection right">
       {/* */} <ComputerModelContainer/>
      </div>
    </div>
  )
}

export default Services