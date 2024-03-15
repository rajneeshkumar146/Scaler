import React from 'react'

function List(listItemsAndEventProps) {
    const { listItems, handleDeleteListItem } = listItemsAndEventProps;
    
    return (
        <>
            <div className="list">
                <ul>
                    {
                        listItems.map((listItem, idx) => {
                            return <li key={idx} onClick={() => handleDeleteListItem(idx)}>{listItem}</li>
                        })
                    }
                </ul>


            </div>
        </>
    )
}

export default List
