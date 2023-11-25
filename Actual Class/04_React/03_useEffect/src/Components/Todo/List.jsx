import React from 'react'

function List(props) {
    const { taskArr } = props;

    return (
        <>
            <div className="list">
                <ul>
                    {
                        taskArr.map(((taskItem, idx) => {
                            return <li key={idx}>{taskItem}</li>
                        }))
                    }
                </ul>

            </div>

        </>
    )
}

export default List