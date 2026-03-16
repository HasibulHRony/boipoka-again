import React, { use } from 'react'
import EachBook from '../EachBook/EachBook'

export default function Book({booksPromise}) {
    const booksData = use(booksPromise)
  return (
    <div className='grid grid-cols-1 items-center justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4'>
        {
            booksData.map(book=><EachBook key={book.bookId} book={book}></EachBook>)
        }
    </div>
  )
}
