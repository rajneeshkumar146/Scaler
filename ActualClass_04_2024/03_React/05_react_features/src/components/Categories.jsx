import React from 'react'

function Categories(props) {
    const { CategoryList, setCurrentCategory } = props;
    return (
        <>
            <button
                className='category_option'
                onClick={() => {
                    setCurrentCategory("All Categories")
                }}
            >All Categories</button>
            {
                CategoryList.map((category => {
                    return <button
                        className='category_option'
                        onClick={() => {
                            setCurrentCategory(category)
                        }}
                    >
                        {category}
                    </button>
                }))
            }

        </>
    )
}

export default Categories