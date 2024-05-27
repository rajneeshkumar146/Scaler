import React from 'react'
import { usePaginationContext } from './contexts/PaginationContext';

function Categories(props) {
    const { CategoryList, setCurrentCategory } = props;
    const { setPageNumber } = usePaginationContext();
    return (
        <>
            <button
                className='category_option'
                onClick={() => {
                    setCurrentCategory("All Categories");
                    setPageNumber(1);
                }}
            >All Categories</button>
            {
                CategoryList.map((category => {
                    return <button
                        className='category_option'
                        onClick={() => {
                            setCurrentCategory(category);
                            setPageNumber(1);
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