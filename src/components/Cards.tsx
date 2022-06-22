import React from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { TBook } from '../types/type'

import CardsItem from './Card'

interface CardsProps {
    cards: TBook[]
}

const Cards: React.FC<CardsProps> = ({ cards }) => {
    return (
        <div className="mt-3 mb-4">
            <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-4">
                {cards
                    // .filter((card: TBook) => card.categories
                    //     ? card.categories[0].toLowerCase().includes(selectedCategorie.toLowerCase())
                    //     : null,
                    // )
                    .map((card: TBook) => (
                        <Link to={`/books/${card.id}`} key={card.id}>
                        <CardsItem
                            card={card}
                        />
                        </Link>
                    ))}
            </Row>
        </div>
    )
}

export default React.memo(Cards)
