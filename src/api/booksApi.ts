import axios from 'axios'

export const booksApi = async (query: string, selectedCategorie: string, selectedOrder: string, maxResults: number, startIndex: number) => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}+subject:${selectedCategorie}`, {
        params: {
            orderBy: selectedOrder,
            maxResults,
            startIndex,
            key: 'AIzaSyB0GGAkIj-NufHqnmH3BR0Hys2rZEPFrTo',
        },
    })
    return response
}

export const bookApi = async (id: string) => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
    return response
}
