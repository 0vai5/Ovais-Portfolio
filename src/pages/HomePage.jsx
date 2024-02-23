import React, { useEffect, useState } from 'react'
import Home from '../components/Home'
import Spinner from '../components/spinner'


const HomePage = () => {
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
        <Home />
      )}
    </section>

  )
}

export default HomePage