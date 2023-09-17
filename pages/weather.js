import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import Head from 'next/head';
import Wind from '/weather/wind.svg';
import Humidity from '/weather/raindrops.svg'
import Tornado from '/weather/tornado.svg'

import Clear from '/weather/main/Clear.svg'
import Clouds from '/weather/main/Clouds.svg'
import Drizzle from '/weather/main/Drizzle.svg'
import Mist from '/weather/main/Mist.svg'
import Rain from '/weather/main/Rain.svg'
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
export default function Weather() {
  const apiKey = '7c44d4f1d68797086914a577b58d834c';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
  const [city, setCity] = useState(null);
  const [temp, setTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const inputRef = useRef(null);
  const [visible_weather, setWeather] = useState('closed');
  const [visible_error, setError] = useState('hidden');
  const [weatherIcon, setWeatherIcon] = useState('clear');
  const [height, setHeight] = useState('h-[15vh]');



  function getWeather() {
    checkWeather(inputRef.current.value)
  }
  async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
      setWeather('closed')
      setError('visible')
      setHeight('h-[70vh]')
    } else {
      setHeight('h-[70vh]')
      setError('hidden');
      var data = await response.json();
      setWeather('visible')
      setCity(data.name);
      setTemp(data.main.temp);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setWeatherIcon((data.weather[0].main).toLowerCase());
    }
  }
  const componentNames = {
    clear: Clear,
    clouds: Clouds,
    drizzle: Drizzle,
    mist: Mist,
    rain: Rain,
  };

  var SomeComponent = componentNames[weatherIcon];
  return (
    <>
      <Head>
        <title>Weather</title>
      </Head>

      <motion.div
        initial='hidden'
        animate='show'
        variants={variants}
        className="flex justify-center items-center h-screen w-screen pt-[15em] mb-[5em]">
        <motion.div variants={item} className={`bg-bgDarker w-[90vw] lg:w-[40em] ${height} rounded-xl duration-300`}>
          <div className=' w-[90vw] lg:w-[40em] h-[15vh] flex flex-row justify-center items-center align-middle' > {/* Top banner */}
            <label className=''>
              <input name='city' type="text" ref={inputRef} className='text-text rounded-xl p-2 mt-2 w-[10em]' placeholder='Input City Name' />
            </label>
            <FaSearch className='react-icons ml-3 cursor-pointer mt-3 hover:bg-primary ease-in-out duration-300' onClick={getWeather} />
          </div>
          <div className={`${visible_error}`}>
            <div className='w-[90vw] lg:w-[40em] h-[40vh] flex justify-center items-center flex-col text-center'>
              < Tornado className='h-40 w-40' />
              <p className='text-3xl'> Sorry this city does not exist :( </p>
            </div>
          </div>
          <motion.div className={visible_weather} >
            <div
              className='flex flex-col justify-center items-center h-[40vh] text-5xl text-center'> {/* Main center text*/}
              {city && <p className='text-text'> {city}</p>}
              < SomeComponent className='h-40 w-40' />
              {temp && <p className='text-text'> {temp + ' *C'}</p>}
            </div>
            <div className='h-[15vh]  flex flex-row justify-evenly text-text items-center'> {/* Footer */}
              <div className='flex flex-row items-center'> {/* Left side text*/}
                <Humidity className='w-16 h-16 fill-red-50' />
                <div className='flex flex-col'>
                  {humidity && <p> {humidity + ' %'}</p>}
                  <p>Humidity</p>
                </div>
              </div>
              <div className='flex flex-row items-center'> {/* Right side text */}
                <Wind className='w-16 h-16' />
                <div className='flex flex-col'>
                  {wind && <p> {wind + ' Km/h'}</p>}
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}

