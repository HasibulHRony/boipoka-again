import React from 'react'
import { useLoaderData, useParams } from 'react-router'

export default function BookDetails() {
    const { id } = useParams()
    const data = useLoaderData()
    console.log(data)
    console.log(id)
    const singleBook = data.find(book => book.bookId == id)
    console.log(singleBook)
    return (
        <div>BookDetails</div>
    )
}
