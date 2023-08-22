import React from 'react';
import { motion, stagger } from 'framer-motion';
import Link from 'next/link';

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Projects() {
  return (
    <motion.div
      initial='hidden'
      animate='show'
      variants={variants}
    >
      <div className='pt-[10em]'> {/* Wrapper for all the containers*/}
        <motion.div variants={item} className='flex flex-row justify-center'>
          <div className='bg-primary rounded-xl z-[2] m-3 max-w-[50em]'> {/*Top project card*/}
            <div className='m-4'>
              <a href='https://c0ruptqq.github.io/pages/ruby_isle/index.html' target='_blank' className='flex flex-col items-center'>
                <motion.img whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                  className='max-w-[20em] bg-cover bg-center rounded-xl mt-5  lg:max-w-[40em]  duration-300'
                  src='/ruby_isles.png'
                />
                <p className='text-text dark:text-bg p-2 text-3xl '>Smoothie Buisness Website</p>
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div variants={item} className=' grid pt-[3em] md:grid-cols-2 lg:pl-[10em] lg:pr-[10em]' > {/* Grid wrapper for lower containers*/}
          <div className='bg-primary rounded-xl z-[2] flex flex-col justify-evenly content-center flex-wrap m-3'> {/* Hidden for now as no other projects*/}
            <div className='m-4'>
              <Link href='/weather' >
                <motion.img whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                  className='max-w-[20em] bg-cover bg-center rounded-xl mt-5'
                  src='weather_app.png'
                />
                <p className='text-text dark:text-bg p-2 text-2xl text-center'>Weather Information WebApp</p>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
