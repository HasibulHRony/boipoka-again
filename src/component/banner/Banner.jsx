import React from 'react'

export default function Banner() {
    return (
        <div className='my-4 md:my-8 lg:my-12 bg-gray-100 rounded-2xl md:w-3xl lg:w-5xl mx-auto justify-between flex flex-col md:flex-row gap-4 md:gap-12 p-6 md:p-12 lg:p-16'>
            <div className=''>
                <h1 className='text-2xl md:text-4xl lg:text-6xl leading-8 md:leading-12 lg:leading-16 font-semibold'>Books to Freshen up<br></br>
                    your bookshelf</h1>
                <button className='mt-6 text-white bg-green-500 font-bold px-3 py-2 text-xl cursor-pointer rounded'>View the List</button>
            </div>
            <div className='w-[96vw]'>
                <img className='w-10/12 items-center rounded-2xl' src="/books.jpg" alt="" />
            </div>
        </div>
    )
}
