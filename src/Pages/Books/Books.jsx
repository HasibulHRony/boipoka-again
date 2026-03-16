import React, { Suspense } from 'react'
import Book from '../../component/Book/Book'

export default function Books() {
    const booksPromise = fetch('/booksData.json').then(res => res.json())
    return (
        <div>
            <p className='text-center mb-4 md:mb-6 lg:mb-8 text-2xl md:text-3xl lg:text-4xl font-bold'>Books</p>
            <div className='mb-4 md:mb-6 lg:mb-8'>
                <Suspense fallback={<p>Loading.....</p>}>
                    <Book booksPromise={booksPromise}></Book>
                </Suspense>
            </div>
        </div>
    )
}
