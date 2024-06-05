import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'

const PaginationContext = React.createContext();
// Please uyse only children as a name.
export default function PaginationProvider({ children }) {
    const [pageSize, setPageSize] = useState(4);
    const [pageNumber, setPageNumber] = useState(1);

    const pageProps = {
        pageSize, pageNumber, setPageSize, setPageNumber
    }

    return (
        <PaginationContext.Provider value={pageProps}>{children}</PaginationContext.Provider>
    )
}

export const usePaginationContext = () => {
    return useContext(PaginationContext);
}