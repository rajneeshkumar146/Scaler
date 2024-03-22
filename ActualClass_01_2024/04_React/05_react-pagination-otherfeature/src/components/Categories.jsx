import React from 'react'

function Categories(props) {
    const { categories, setCurrCategories, setPageNum } = props;

    return (
        <>
            <button
                className='category_option'
                onClick={() => {
                    setCurrCategories("All Categories");
                    setPageNum(1)
                }}
            >All Categories</button>

            {
                categories.map((category) => {
                    return <button
                        className='category_option'
                        onClick={() => {
                            setCurrCategories(category);
                            setPageNum(1)
                        }}
                    >
                        {category}
                    </button>
                })
            }
        </>
    )
}

export default Categories
