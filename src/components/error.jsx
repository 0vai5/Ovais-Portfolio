import React from 'react'
import Button from './button'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='max-container'>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-[#009687]">404</p>
          <h1 className="head-text text-[#ffffff] sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-[#d0baba]">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className=" flex items-start justify-center gap-x-6">
            <Link to={'/'}>
              <Button label={'Back Home'} />
            </Link>

          </div>
        </div>
      </main>
    </section>
  )
}

export default Error