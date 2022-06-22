import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TBook } from '../../types/type'

interface NewsState {
    books: TBook[]
    isLoading: boolean
    error: string
    totalCount: number
    startIndex: number
    maxResults: number
}

const initialState: NewsState = {
    books: [],
    isLoading: false,
    error: '',
    totalCount: 0,
    startIndex: 0,
    maxResults: 30,
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        fetchBooks(state) {
            state.isLoading = true
        },
        fetchBooksSuccess(state, action: PayloadAction<TBook[]>) {
            state.isLoading = false
            state.error = ''
            state.books = action.payload
            state.startIndex = state.startIndex + 30
        },
        fetchBooksError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        fetchBooksTotalCount(state, action: PayloadAction<number>) {
            state.totalCount = action.payload
        },
    },
})

export default booksSlice.reducer
