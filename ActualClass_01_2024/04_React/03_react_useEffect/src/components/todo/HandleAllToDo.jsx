import React, { useState } from 'react'
import InputBox from './InputBox'
import List from './List'

function HandleAllToDo() {
    const [listItems, setListItems] = useState([]);

    const addListItem = (listItem) => {
        let newListItems = [...listItems, listItem];
        setListItems(newListItems);
    }

    return (
        <>
            <div>
                <InputBox addListItem={addListItem}></InputBox>
                <List listItems={listItems}></List>
            </div>
        </>
    )
}

export default HandleAllToDo
