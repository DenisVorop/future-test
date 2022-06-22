import React from 'react'
import { Button } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

import { fetchBooksData } from '../store/booksSlice/booksActionCreators'
import { useAppDispatch, useAppSelector } from '../store/hooks/redux'

interface ButtonProps {
    children: React.ReactNode
}

const ButtonComponent: React.FC<ButtonProps> = ({ children }) => {
    const dispatch = useAppDispatch()
    const { books, startIndex, maxResults } = useAppSelector(store => store.booksReducer)
    const [searchParams, setSearchParams] = useSearchParams()

    const query = searchParams.get('q') || ''
    const selectedCategorie = searchParams.get('categorie') || ''
    const selectedOrder = searchParams.get('order') || ''

    const loadMore = () => {
        dispatch(fetchBooksData(books, query, selectedCategorie, selectedOrder, maxResults, startIndex))
    }

    return (
        <Button
            variant="primary"
            className="mb-5"
            onClick={loadMore}
        >
            {children}
        </Button>
    )
}

export default ButtonComponent
