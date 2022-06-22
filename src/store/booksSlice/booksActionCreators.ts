
import { booksApi } from '../../api/booksApi'

import { getBooksArray } from '../../utils/getBooksArray'

import { booksSlice } from '../booksSlice/booksSlice'

import { AppDispatch } from '../store'

import { TBook } from './../../types/type'

// *** Books ***
export const fetchBooksData =
    (arr: TBook[], query: string, selectedCategorie: string, selectedOrder: string, maxResults: number, startIndex: number) =>
        async (dispatch: AppDispatch) => {
            dispatch(booksSlice.actions.fetchBooks())
            try {
                const res = await booksApi(query, selectedCategorie, selectedOrder, maxResults, startIndex)
                if (res.data.items.length > 0) {
                    const books = getBooksArray(res.data.items)
                    dispatch(booksSlice.actions.fetchBooksSuccess([...arr, ...books] as TBook[]))
                    dispatch(booksSlice.actions.fetchBooksTotalCount(res.data.totalItems))
                }
            } catch (err: any) {
                dispatch(booksSlice.actions.fetchBooksError(err.message))
            }
        }
