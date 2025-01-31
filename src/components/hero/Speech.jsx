import {TypeAnimation} from 'react-type-animation'
import { motion } from 'motion/react'

const Speech = () => {
  return (
    <motion.div animate={{opacity:[0,1]}} transition={{duration:5}} className="bubbleContainer">
        <div className="bubble">
            <TypeAnimation 
            sequence={['I`m a Software Engineer .', 1000, 'I`m a Fullstack Web Developer .', 1000, 'I`m a Programmer', 1000]}
            wrapper='span'
            speed={55}
            deletionSpeed={85}
            style={{fontSize: '25px'}}
            repeat={Infinity}
            />
            
        </div>
        <img src="/man.png" />
    </motion.div>
  )
}

export default Speech