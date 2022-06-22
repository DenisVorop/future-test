import React from 'react'

import { useAppSelector } from '../store/hooks/redux'

import Cards from '../components/Cards'
import ButtonComponent from '../components/Button'
import Loader from '../components/Loader'

const Main: React.FC = () => {
    const { isLoading, books } = useAppSelector(store => store.booksReducer)

    return (
        <>
            {isLoading
                ? <Loader />
                : <Cards
                    cards={books}
                />
            }
            <div className="d-sm-flex justify-content-sm-center">
                {books.length > 0 && !isLoading
                    ? <ButtonComponent>
                        Load more...
                    </ButtonComponent>
                    : null
                }
            </div>
        </>
    )
}

export default Main
