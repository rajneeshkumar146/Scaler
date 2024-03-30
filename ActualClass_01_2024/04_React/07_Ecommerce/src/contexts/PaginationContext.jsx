import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';

const PaginationContext = React.createContext();
export default function PaginationProvider({ children }) {
    const [pageSize, setPageSize] = useState(4);
    const [pageNum, setPageNum] = useState(1);

    const pageProps = {
        pageSize, pageNum, setPageSize, setPageNum
    }

    return (
        <PaginationContext.Provider value={pageProps}>{children}</PaginationContext.Provider>
    )
}

export const usePaginationContext = () => {
    return useContext(PaginationContext)
}