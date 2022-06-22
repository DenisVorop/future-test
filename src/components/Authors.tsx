import React from 'react'

interface AuthorsProps {
    authors: string[]
}

const Authors: React.FC<AuthorsProps> = ({ authors }) => {
    return (
        <small className="text-muted">
            {authors?.length > 0
                ? authors?.map(author => `${author}, `)
                : <span>Authors not listed</span>
            }
        </small>
    )
}

export default Authors
