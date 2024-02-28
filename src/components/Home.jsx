import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Button from './button';
import CTA from './CTA';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerControls = useAnimation();

  useEffect(() => {
    const animateOnLoad = async () => {
      await containerControls.start({
        opacity: 1,
        transition: { duration: 1, ease: 'easeInOut' },
      });

      await containerControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1, ease: 'easeInOut' },
      });
    };

    animateOnLoad();
  }, [containerControls]);

  return (
    <motion.section
      className='max-container'
      initial={{ opacity: 0 }}
      animate={containerControls}
    >
      <motion.div className='flex flex-col sm:flex-row items-center m-0 justify-between'>
        <motion.div className='flex flex-col'>
          <h1 className="head-text text-[#ffffff]">
            Hello, I'm
            <span className="blue-gradient_text font-semibold drop-shadow">
              {" "}
              Ovais
            </span>
            <span role="img" aria-label="Waving Hand" style={{ marginLeft: '8px' }}>👋</span>
          </h1>
          <motion.div className="text-slate-500 mt-5 flex flex-col items-start">
            <p className='text-[#d0baba]'>
              I'm a full-stack developer from{" "}
              <span className="text-green-500">Pakistan</span> passionate about
              building innovative and user-friendly applications with a focus on
              scalability.
            </p>
            <Link to={'/contact'}>
              <Button label={'Hire Me'} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } }}>
          <img loading='lazy' src="/hero.png" alt="HeroImg" />
        </motion.div>
      </motion.div>

      <CTA initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 1, delay: 1 } }} />
    </motion.section>
  );
};

export default Home;
