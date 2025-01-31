import React, { Suspense, useRef } from 'react'
import "./hero.css"
import Speech from './Speech'
import { motion, useInView } from 'motion/react'
import { Canvas } from '@react-three/fiber'
import Shape from './Shape'


const awardVariants={
  initial:{
    x:-100,
    opacity:0
},
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:2,
      straggerChildren:0.2
    }
  }
}

const followVariants={
  initial:{
    y:-100,
    opacity:0
},
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:2,
      straggerChildren:0.2
    }
  }
}

const Hero = () => {
  const ref= useRef()
  const isInView=useInView(ref,{margin:"-200px"})
  return (
    <div className='hero' ref={ref}>
      <div className="hSection left">
        {/*TITLE*/ }
        <motion.h1 
       variants={followVariants}
       animate={isInView?"animate":"initial"}
        className='hTitle'>Hey There,<br/><span>I'm Surajit</span></motion.h1>
        {/* ABOUTE ME*/}
        <motion.div variants={awardVariants}
       animate={isInView?"animate":"initial"}
        className="awards">
          <motion.h2 variants={awardVariants}> Studying Software Engineering</motion.h2>
          <motion.p variants={awardVariants}>Bachelor of Technology in Information Technology under West Bengal University of Technology (MAKAUT)</motion.p>
          <motion.div variants={awardVariants} className="awardList">
            <motion.img variants={awardVariants} src='/javascript.png' />
            <motion.img variants={awardVariants} src='/react.png' />
            <motion.img variants={awardVariants} src='/nodejs.png' />
            <motion.img variants={awardVariants} src='/python.png' />
          </motion.div>
        </motion.div>
        {/* SOCIAL ICONS */}
        <a href='scroll' className='scroll'>facebook</a>
      </div>
      <div className="hSection right">
        <motion.div variants={followVariants}animate={isInView?"animate":"initial"} className="follow">
          <motion.a variants={followVariants} href='/'>
          <img src='/facebook.png' />
          </motion.a>
          <motion.a variants={followVariants} href='/'>
          <img src='/instagram.png' />
          </motion.a>
          <motion.a variants={followVariants} href='/'>
          <img src='/youtube.png' />
          </motion.a>
           <motion.div variants={followVariants} className="followTextContainer">
            <motion.div className="followText">FOLLOW ME</motion.div>
           </motion.div>
        </motion.div>
        {/*BUBBLE*/ }
        <Speech/>
        {/*CERTIFICATE */}
        <motion.a animate={{opacity:[0,1]}} transition={{duration:5}} href='https://makautwb.ac.in/' className="degree">
        <div className="certificate">
          <img src='/makaut-logo.png' className='certificate-logo'/>
        </div>
        <p className='certificateText'>MAKAUT(WBUT)</p>

        </motion.a>
        {/*CONTACT BUTTON */}
        <motion.a 
        href='/#contact' className='contactLink'
        animate={{
          x:[200,0],
          opacity:[0,1]
        }}
        transition={{
          duration:2
        }}
        >
        <motion.div className="contactButton" animate={{rotate:[0,360]}} transition={{duration:8 ,repeat:Infinity,}}>
       
      <img src='/message-2-line.png'/>
        </motion.div>
        </motion.a>

      </div>
      <div className="bg">
        {/* 3d */}
        <Canvas>
          <Suspense fallback="loading..">
          <Shape/>
          </Suspense>
        </Canvas>
        <div className="hImg">
        <img src='/portfolio-surajit.png' />
        </div>
      </div>

    </div>
  )
}

export default Hero