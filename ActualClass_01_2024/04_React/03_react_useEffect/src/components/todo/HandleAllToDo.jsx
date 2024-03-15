import React, { useState } from 'react'
import InputBox from './InputBox'
import List from './List'

function HandleAllToDo() {
    const [listItems, setListItems] = useState([]);

    const addListItem = (listItem) => {
        let newListItems = [...listItems, listItem];
        setListItems(newListItems);
    }

    const handleDeleteListItem = (idxOfItemGetDeleted) => {
        const filteredListItem = listItems.filter((listItem, cidx) => {
            return cidx != idxOfItemGetDeleted;
        });

        console.log("That item is going to be deleted: " + listItems[idxOfItemGetDeleted]);
        setListItems(filteredListItem);
    }

    return (
        <>
            <div>
                <InputBox addListItem={addListItem}></InputBox>
                <List listItems={listItems} handleDeleteListItem={handleDeleteListItem}></List>
            </div>
        </>
    )
}

export default HandleAllToDo
