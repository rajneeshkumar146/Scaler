import React from 'react'

function Categories(props) {
    const { categories, setCurrCategories } = props;
    return (
        <>
            <button
                className='category_option'
                onClick={() => {
                    setCurrCategories("All Categories")
                }}
            >All Categories</button>
            {categories.map((category) => {
                return <button
                    className='category_option'
                    onClick={() => {
                        setCurrCategories(category);
                    }}
                >{category}</button>
            })}
        </>
    )
}

export default Categories