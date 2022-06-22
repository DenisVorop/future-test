import React from 'react'
import { Col, Card } from 'react-bootstrap'

import { TBook } from '../types/type'

import Authors from './Authors'
import Categories from './Categories'

interface CardProps {
    card: TBook
}

const CardsItem: React.FC<CardProps> = ({card}) => {
    return (
        <Col>
            <Card style={{ cursor: 'pointer' }}>
                <Card.Img variant="top" src={card.imageLinks.thumbnail} />
                <Card.Body>
                    <Card.Text>
                        <Categories categories={card.categories} />
                    </Card.Text>
                    <Card.Title>{card.title}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Authors authors={card.authors} />
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default CardsItem
