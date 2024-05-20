import React from 'react'

function List(props) {
    const { taskArr, handleDeleteTaskItem } = props;
    return (
        <>
            <div className="list">
                <ul>
                    {
                        taskArr.map((taskItem, idx) => {
                            return <li onClick={() => {
                                handleDeleteTaskItem(idx);
                            }} key={idx}>{taskItem}</li>
                        })
                    }
                </ul>

            </div>
        </>
    )
}

export default List