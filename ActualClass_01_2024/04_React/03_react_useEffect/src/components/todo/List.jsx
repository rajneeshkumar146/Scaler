import React from 'react'

function List(listItemsProps) {
    const { listItems } = listItemsProps;
    return (
        <>
            <div className="list">
                <ul>
                    {
                        listItems.map((listItem, idx) => {
                            return <li key={idx}>{listItem}</li>
                        })
                    }
                </ul>


            </div>
        </>
    )
}

export default List
