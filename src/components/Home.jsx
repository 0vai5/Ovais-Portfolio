import React, { lazy, useEffect, useState } from 'react';
import Button from './button';
import CTA from './CTA';
import { Link } from 'react-router-dom';

const Home = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <section className='max-container '>
      
        <>
          <div className='flex flex-col sm:flex-row items-center m-0 justify-between '>
            <div className='flex flex-col'>
              <h1 className="head-text text-[#ffffff]">
                Hello, I'm
                <span className="blue-gradient_text font-semibold drop-shadow">
                  {" "}
                  Ovais
                </span>
                <span role="img" aria-label="Waving Hand" style={{ marginLeft: '8px' }}>👋</span>
              </h1>
              <div className="text-slate-500 mt-5 flex flex-col items-start ">
                <p className='text-[#d0baba]'>
                  I'm a full-stack developer from{" "}
                  <span className="text-green-500">Pakistan</span> passionate about
                  building innovative and user-friendly applications with a focus on
                  scalability.
                </p>
                <Link to={'/contact'}>
                  <Button label={'Hire Me'} />
                </Link>
              </div>
            </div>

            <div>
              <img loading='lazy' src="/hero.png" alt="HeroImg" />
            </div>
          </div>


          <CTA />
        </>
      


    </section>
  );
};

export default Home;
