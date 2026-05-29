import React from 'react'
import {motion,useScroll} from 'motion/react'
import Left from '../components/home/Left';
import Right from '../components/home/Right';

const Home = () => {

  
  return (
    <div className='flex gap-10 '>
      <Left/>
      <Right/>
      
    </div>
  )
}

export default Home
