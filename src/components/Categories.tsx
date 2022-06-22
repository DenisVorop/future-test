import React from 'react'

interface CategoriesProps {
    categories: string[]
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
    return (
        <>
            {categories?.length > 0
                ? categories[0]
                : <span>Categories not listed</span>
            }
        </>
    )
}

export default Categories
