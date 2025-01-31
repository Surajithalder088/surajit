import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

const ComputerModelContainer = () => {
  return (
   <Canvas>
    <Suspense fallback='loading...'>

    </Suspense>
   </Canvas>
  )
}




export default ComputerModelContainer