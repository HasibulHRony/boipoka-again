import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import { addToStoreDB } from '../../utilities/addToDB'

export default function BookDetails() {
    const { id } = useParams()
    const bookId = parseInt(id)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/booksData.json")
            .then(res => res.json())
            .then(result => setData(result))
    }, [])


    console.log(data)
    const singleBook = data?.find(book => book.bookId === bookId);
    if (!singleBook) {
        return <p>Loading....</p>
    }
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = singleBook;

    const handleMarkAsRead = (id) => {
        //store with id
        //where to store
        //array or collection
        //if book already exist then show alert
        //if book not exist then push in the collection or array

        addToStoreDB(id)
    }

    return (
        <div className='flex items-center justify-between max-w-5xl mx-auto gap-8 my-8'>
            <div className='flex-1 flex  items-center justify-center bg-gray-200 p-12 rounded-xl'>
                <img className='w-80' src={image} />
            </div>
            <div className='flex-1'>
                <h1 className='text-4xl font-semibold'>{bookName}</h1>
                <p className='mb-4 border-b-2 border-gray-200'><small>By: {author}</small></p>
                <p className='mb-4 border-b-2 border-gray-200'>{category}</p>
                <p><span className='font-bold mb-4 border-b-2 border-gray-200'>Review: </span>{review}</p>
                <p className='flex justify-between mb-4 border-b-2 border-gray-200'>Tag: <span className='text-green-500'>#Young</span> <span className='text-green-500'>Adult</span> <span className='text-green-500'>#Identity</span></p>
                <div className='my-4 border-b-2 border-gray-200'>
                    <p>Number of Page: <span>{totalPages}</span></p>
                    <p>Publisher: <span>{publisher}</span></p>
                    <p>Your of publishing: <span>{yearOfPublishing}</span></p>
                    <p>Rating: <span>{rating}</span></p>
                </div>
                <div className='flex gap-4'>
                    <button onClick={()=>handleMarkAsRead(id)} className='py-2 px-3 border-2 rounded-lg border-gray-300 text-black font-bold cursor-pointer'>Mark as Read</button>
                    <button className='py-2 px-3 font-bold font-white rounded-lg bg-sky-400 cursor-pointer'>Add to Wishlist</button>
                </div>
            </div>
        </div>
    )
}
