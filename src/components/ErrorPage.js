import React from 'react'

const ErrorPage = () => {
  return (
    <div>
    <div className={`bg-skin w-full h-full absolute top-0 -z-0 bg-gradient-to-b from-red-800 to-[#141414] transition-colors`}></div>
    <div className="search relative">
      <div className="mt-3 px-4 md:px-12 py-3 min-h-[400px] flex justify-center items-center">
        <h1 className='text-5xl text-white font-bold'>This Movie is not found</h1>
      </div>
    </div>
    </div>
  )
}

export default ErrorPage