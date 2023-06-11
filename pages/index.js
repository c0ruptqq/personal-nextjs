import Head from 'next/head'
import { motion } from "framer-motion";
import { RiExternalLinkFill } from 'react-icons/ri';
import Link from 'next/link';

const style = { color: "theme('colors.text')", fontSize: "1.5em", align: "middle" }
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
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <motion.div
        initial='hidden'
        animate='show'
        variants={variants}

        className="pt-[6em] flex flex-col content-center items-center p-5 md:pt-[10em] lg:flex-row lg: justify-center">
        <img variants={item} className="max-w-[30em] aspect-square  lg:visible" src='/moon_main.png' alt="moon" />
        <motion.div
          variants={item}
          className="flex flex-col items-center">
          <div className='inline-flex flex-row'>
            <p className="text-text text-6xl text-center">Hey, I am Maksym</p>
            <span className='text-6xl text-white animate-blink invisible sm:visible'>|</span>
          </div>
          <p className="pt-5 text-text text-xl text-center">A front end engineering student. This is a collection of my expertise with React.js and web development</p>
          <div className="flex flex-row justify-evenly mt-3">
            <div className="mr-3">
              <motion.button
                initial={{ opacity: 0.6 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}
                className="bg-primary text-white w-[10em] h-[3em] rounded-xl text-md underline-offset-8 underline inline-flex justify-center items-center"> < RiExternalLinkFill style={style} /><a href="mailto:max.d.astapov@gmail.com"> Contact me</a></motion.button>
            </div>
            <div className="" >
              <motion.button
                initial={{ opacity: 0.6 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}
                className="bg-primary text-white w-[10em] h-[3em] rounded-xl text-md underline-offset-8 underline inline-flex justify-center items-center"> < RiExternalLinkFill style={style} /><Link href='/projects'>My portfolio</Link></motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
