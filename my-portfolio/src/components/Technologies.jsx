import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import { DiReact } from "react-icons/di";
import {SiMongodb} from 'react-icons/si'
import {DiRedis} from 'react-icons/di'
import {FaNodeJs} from 'react-icons/fa'
import { DiMysql } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import { motion } from 'framer-motion'

const vary =  (duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType: "reverse"
        }
    }
})
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1}} className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={vary(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiReact className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div variants={vary(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>
            {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiRedis className='text-7xl text-red-400'/>
            </div> */}
            <motion.div variants={vary(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div variants={vary(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMysql className='text-7xl text-blue-400'/>
            </motion.div>
            <motion.div variants={vary(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSocketdotio className='text-7xl text-white-500'/>
            </motion.div>
            <motion.div variants={vary(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaDocker className='text-7xl text-blue-700'/>
            </motion.div>
        </motion.div>
      
    </div>
  )
}

export default Technologies
