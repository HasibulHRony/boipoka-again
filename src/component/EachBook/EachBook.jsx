import React from 'react'
import { CiStar } from 'react-icons/ci'

export default function EachBook({book}) {
//     {
//     "bookId": 1,
//     "bookName": "The Great Gatsby",
//     "author": "F. Scott Fitzgerald",
//     "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
//     "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
//     "totalPages": 192,
//     "rating": 4.5,
//     "category": "Classic",
//     "tags": ["Fiction", "Romance"],
//     "publisher": "Scribner",
//     "yearOfPublishing": 1925
//   }

    const {bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book

  return (
    <div className='border-2 max-w-94 h-[480p] border-gray-100 rounded-lg p-4'>
        <div className='py-6 px-24 bg-gray-200 rounded-2xl flex'>
            <img className='h-44 w-30 justify-center items-center' src={image}/>
        </div>
        <div className='text-green-500 flex justify-around'><small>Young Adult</small> <small>Identity</small> <small className='flex space-x-2 items-center justify-center'>{rating} <CiStar /></small></div>
        <p className='text-xl font-semibold text-center my-2'>{bookName}</p>
        <p><small>By: {author}</small></p>
        <div className='flex justify-between mt-4 mb-2'>
            {
                tags.map((tag, id)=><span key={id}>{tag}</span>)
            }
        </div>

    </div>
  )
}
