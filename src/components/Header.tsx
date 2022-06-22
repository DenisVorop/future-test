import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

import { useKeyPress } from '../hooks/useKeyPress'

import { fetchBooksData } from '../store/booksSlice/booksActionCreators'
import { useAppDispatch, useAppSelector } from '../store/hooks/redux'

const categories = ['All', 'Art', 'Biography', 'Computers', 'History', 'Medical', 'Poetry']
const sort = ['relevance', 'newest']

const Header: React.FC = () => {
    const [query, setQuery] = React.useState<string>('')
    const [selectedCategorie, setSelectedCategorie] = React.useState<string>('')
    const [selectedOrder, setSelectedOrder] = React.useState<string>('relevance')
    const inputRef = React.useRef(null)

    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useAppDispatch()
    const { error, totalCount, maxResults } = useAppSelector(store => store.booksReducer)
    const isEnterPressed = useKeyPress('Enter')

    const clickEnter = () => {
        if (isEnterPressed && document.activeElement === inputRef.current)
            return handleSubmit()
    }

    const handleSubmit = () => {
        dispatch(fetchBooksData([], query, selectedCategorie, selectedOrder, maxResults, 1))
    }

    const selectCategorie = (categorie: string) => {
        if (categorie === 'All')
            return setSelectedCategorie('')
        return setSelectedCategorie(categorie)
    }

    React.useEffect(() => {
        setSearchParams({ q: query, categorie: selectedCategorie, order: selectedOrder })
    }, [query, selectedCategorie, selectedOrder])

    React.useEffect(() => {
        clickEnter()
    }, [isEnterPressed])

    return (
        <>
            <div className="header">
                <h1 className="text-center fw-bold mt-5"><Link to="/">Search</Link></h1>
                <div className="d-sm-flex">
                    <Form.Control
                        type="text"
                        className="me-md-2 mt-2"
                        onChange={e => setQuery(e.target.value)}
                        ref={inputRef}
                    />
                    <Button
                        variant="dark"
                        className="mt-2"
                        onClick={handleSubmit}
                    >
                        Search
                    </Button>
                </div>
                <div className="d-sm-flex">
                    <div className="me-md-2 mt-3">
                        <h6>Categories</h6>
                        <Form.Select aria-label="Default select example" onChange={e => selectCategorie(e.target.value)}>
                            {categories.map(categorie => (
                                <option key={categorie} value={categorie}>{categorie}</option>
                            ))}
                        </Form.Select>
                    </div>
                    <div className="mt-3">
                        <h6>Sorting by</h6>
                        <Form.Select aria-label="Default select example" onChange={e => setSelectedOrder(e.target.value)}>
                            {sort.map(sort => (
                                <option key={sort} value={sort}>{sort}</option>
                            ))}
                        </Form.Select>
                    </div>
                </div>
                <div className="mt-3 text-center">
                    {error ? error : <span>Found {totalCount} results</span>}
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Header
