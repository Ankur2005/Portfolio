import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

function Projects() {
    const redirect = (ele) => {
        window.open(ele.link, '_blank');
    }

    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className='my-20 text-center text-4xl'>Projects</motion.h2>
            <div className='flex flex-wrap justify-center'>
                {
                    PROJECTS.map((e, i) => (
                        <motion.div 
                            key={i} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            initial={{ opacity: 0, y: 50 }} 
                            transition={{ duration: 0.5 }} 
                            className='relative m-4 w-80 h-80 bg-neutral-800 rounded-lg overflow-hidden shadow-lg'
                        >
                            <motion.img 
                                whileHover={{ scale: 1.1 }} 
                                src={e.image} 
                                alt={e.title} 
                                className='w-full h-full object-cover'
                            />
                            <motion.div 
                                whileHover={{ opacity: 1 }} 
                                initial={{ opacity: 0 }} 
                                className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 text-white text-center p-4'
                            >
                                <h3 className='text-2xl mb-2'>{e.title}</h3>
                                <p className='mb-4'>{e.description}</p>
                                <button 
                                    onClick={() => { redirect(e); }} 
                                    className='px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition'
                                >
                                    View on GitHub
                                </button>
                            </motion.div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects
