import { TBook } from '../types/type'

export const getBooksArray = (items: any) => {
    const books: TBook[] = items.map((item: any) => (
        {
            'id': item.id,
            'title': item.volumeInfo.title,
            'subtitle': item.volumeInfo.subtitle,
            'authors': item.volumeInfo.authors,
            'publisher': item.volumeInfo.publisher,
            'publishedDate': item.volumeInfo.publishedDate,
            'description': item.volumeInfo.description,
            'categories': item.volumeInfo.categories,
            'imageLinks': {
                'thumbnail': item.volumeInfo.imageLinks?.thumbnail,
            },
        }
    ))
    return books
}
