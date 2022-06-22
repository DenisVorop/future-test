import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

import Authors from '../components/Authors'
import Categories from '../components/Categories'
import Loader from '../components/Loader'

import { TBook } from '../types/type'

import { bookApi } from '../api/booksApi'

import { getBooksArray } from '../utils/getBooksArray'

const Book: React.FC = () => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [book, setBook] = React.useState<TBook>({} as TBook)
    const params = useParams()
    const navigate = useNavigate()

    const fetchBook = async () => {
        const res = await bookApi(params.id!)
        setBook(getBooksArray([res.data])[0])
        setIsLoading(false)
    }

    React.useEffect(() => {
        fetchBook()
    }, [])

    return (
        <>
            {isLoading
                ? <Loader />
                : <Card className="mt-5 card-book">
                    <div style={{ flex: '1 1 100%' }} className="df-center" >
                        <img src={book.imageLinks?.thumbnail} alt="book" />
                    </div>
                    <div>
                        <Card.Header>
                            <Categories categories={book.categories} />
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>{book.description}</Card.Text>
                            <Button variant="primary" onClick={() => navigate(-1)}>Go back</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <Authors authors={book.authors} />
                        </Card.Footer>
                    </div>
                </Card>
            }
        </>
    )
}

export default Book
