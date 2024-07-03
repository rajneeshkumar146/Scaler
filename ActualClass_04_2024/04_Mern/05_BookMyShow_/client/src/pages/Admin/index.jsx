import React from 'react'

import { Tabs } from "antd"
import TheatreTable from './TheatreTable'

function Admin() {

    const tableItems = [
        {
            key: "1",
            label: "Movies",
            children: <MovieList />
        },
        {
            key: "2",
            label: "Theathers",
            children: <TheatreTable />
        }
    ]

    return (
        <div>
            <h1>Admin Page</h1>
            <Tabs items={tableItems}></Tabs>
        </div>
    );
}

export default Admin