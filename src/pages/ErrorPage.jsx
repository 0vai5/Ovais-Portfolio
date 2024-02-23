import React, { useEffect, useState } from 'react'
import Error from '../components/error'
import Spinner from '../components/spinner'

const ErrorPage = () => {
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
        <Error />
      )}
    </section>
  )
}

export default ErrorPage