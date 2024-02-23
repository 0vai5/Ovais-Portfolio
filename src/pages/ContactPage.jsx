import React, { useEffect, useState } from 'react'
import Contact from '../components/Contact'
import Spinner from '../components/spinner'

const ContactPage = () => {
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
        <Contact />
      )}
    </section>
  )
}

export default ContactPage