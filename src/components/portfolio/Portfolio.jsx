import React, { useEffect, useRef, useState } from 'react'
import "./portfolio.css"
import { motion, useInView, useScroll, useTransform } from 'motion/react'

const items=[
  {
    id:1,
    img:'/p1.jpg',
    title:" Web based chat application",
    desc:"ywdh oiyhik  fdoiuf i fl f fr fd owfurfjfjcf  wfeo de jf fijjk oiokggu juo 7uyukh  i iukh",
    link:'/'
  },
  {
    id:2,
    img:'/p2.jpg',
    title:" Web based chat application",
    desc:"ywdh oiyhik  fdoiuf i fl f fr fd owfurfjfjcf  wfeo de jf fijjk oiokggu juo 7uyukh  i iukh",
    link:'/'
  },
  {
    id:3,
    img:'/p3.jpg',
    title:" Web based chat application",
    desc:"ywdh oiyhik  fdoiuf i fl f fr fd owfurfjfjcf  wfeo de jf fijjk oiokggu juo 7uyukh  i iukh",
    link:'/'
  }
  ,{
    id:4,
    img:'/p4.jpg',
    title:" Web based chat application",
    desc:"ywdh oiyhik  fdoiuf i fl f fr fd owfurfjfjcf  wfeo de jf fijjk oiokggu juo 7uyukh  i iukh",
    link:'/'
  },
  {
    id:5,
    img:'/p5.jpg',
    title:" Web based chat application",
    desc:"ywdh oiyhik  fdoiuf i fl f fr fd owfurfjfjcf  wfeo de jf fijjk oiokggu juo 7uyukh  i iukh",
    link:'/'
  }
]

const imagevariant={
  initial:{
    x:-500,
    y:500,
    opacity:0
  },
  animate:{
    x:0,
    y:0,
    opacity:1,
    transition:{
      duration:1.5,
      ease:'easeInOut'
    }
  }
}
const textvariant={
  initial:{
    x:500,
    y:500,
    opacity:0
  },
  animate:{
    x:0,
    y:0,
    opacity:1,
    transition:{
      duration:1.5,
      ease:'easeInOut',
      staggerChildren:0.3
    }
  }
}

const ListItem= ({item})=>{
  const ref=useRef()
  const isInView=useInView(ref,{margin:"-100px"})
  return(
    <div className="pItem" ref={ref}>
      <motion.div className="pImg" variants={imagevariant}
      animate={isInView ? 'animate':'initial'}
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div className="pText" variants={textvariant}
      animate={isInView ? 'animate':'initial'}>
        <motion.h1 variants={textvariant}>{item.title}</motion.h1>
        <motion.p variants={textvariant}>{item.desc}</motion.p>
        <motion.a href={item.link} variants={textvariant} >
        <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  )
}

const Portfolio = () => {

  const [containerDistance,setContainerDistance]=useState(0)
  const ref=useRef(null)
  useEffect(()=>{
    if(ref.current){
      const rect=ref.current.getBoundingClientRect()
      setContainerDistance(rect.left)
    }
  },[])
  const {scrollYProgress}=useScroll({target:ref})
  const xTranslate=useTransform(scrollYProgress,[0,1],[0,-window.innerWidth*items.length])
  return (
    <div className='portfolio' ref={ref}>
      <motion.div className="pList" style={{x:xTranslate}}>
        <div className="empty" 
        style={{width:window.innerWidth - containerDistance}}
        />
        
        {items.map(item =>(
         <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section/>
      <section/>
      <section/>
      <section/>
      <section/>
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox='0 0 160 160'>
          <circle cx="80" cy="80" r="70" fill='none' stroke='#ddd' strokeWidth={20} />
          < motion.circle cx="80" cy="80" r="70" fill='none' stroke='#dd4c62' strokeWidth={20}
            style={{pathLength:scrollYProgress}}
            transform="rotate(-90 80 80)"
            />
        </svg>
      </div>
      </div>
  )
}

export default Portfolio