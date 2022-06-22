import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Header from './components/Header'

import Main from './pages/Main'
import Book from './pages/Book'

const App = () => {
    return (
        <div className="app">
            <div className="container">
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route index element={<Main />} />
                        <Route path="/books/:id" element={<Book />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
