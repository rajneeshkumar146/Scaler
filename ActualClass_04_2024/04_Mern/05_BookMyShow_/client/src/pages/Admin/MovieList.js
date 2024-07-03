import React from 'react'
import { Table } from "antd"

function MovieList() {

    const fakeMovies = [
        {
            key: "1",
            poster: "Image1",
            title: "Mastaney",
            description: "Set in 1739, Nadar Sah's undefested army was attacked by sikh Rebellions.",
            duration: 120,
            gener: "Action",
            language: "Hindi",
            releaseDate: "2023-10-25",
        },
        {
            key: "1",
            poster: "Image2",
            title: "Mastaney",
            description: "Set in 1739, Nadar Sah's undefested army was attacked by sikh Rebellions.",
            duration: 120,
            gener: "Action",
            language: "Hindi",
            releaseDate: "2023-10-25",
            action: "Delete"
        }
    ]

    const tableHeadings = [
        {
            title: "poster"
        },
        {
            title: "Move Name",
            dataIndex: "name"
        }, {
            title: "Description",
            dataIndex: "description"
        }, {
            title: "Duration",
            dataIndex: "duration"
        }, {
            title: "Gener",
            dataIndex: "gener"
        }, {
            title: "Language",
            dataIndex: "language"
        }, {
            title: "Release Date",
            dataIndex: "releaseDate"
        }, {
            title: "Action",
        }
    ]

    return (
        <Table dataSource={????} column={tableHeadings}></Table>
    )
}

export default MovieList