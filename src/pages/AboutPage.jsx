import React, { useEffect, useState } from 'react'
import About from '../components/About'
import Spinner from '../components/spinner'

const AboutPage = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <section>
      {loading ? (
        <div className='flex justify-center items-center mt-[20rem]'>
          <Spinner />
        </div>
      ) : (
        <About />
      )}
    </section>

  )
}

export default AboutPage