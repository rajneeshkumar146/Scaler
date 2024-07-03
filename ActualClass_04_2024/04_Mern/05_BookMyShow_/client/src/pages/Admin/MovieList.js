import React from 'react'
import { Table, Button } from "antd"
import MovieForm from "./MovieForm";
import { ShowLoading, HideLoading } from "../redux/loaderSlice";
import { useDispatch } from "react-redux";
import moment from "moment"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import { useState, useEffect } from "react"
import DeleteMovieModal from "./DeleteMovieModal"
import { getAllMovie } from "../../api/movie";


function MovieList() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [movies, setMovies] = useState(FakeMovies);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [formType, setFormType] = useState("add");
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const dispatch = useDispatch();

    const fakeMovies = [
        {
            key: "1",
            poster: "Image1",
            title: "Mastaney",
            description: "Set in 1739, Nadar Sah's undefested army was attacked by sikh Rebellions.",
            duration: 120,
            genre: "Action",
            language: "Hindi",
            releaseDate: "2023-10-25",
        },
        {
            key: "1",
            poster: "Image2",
            title: "Mastaney",
            description: "Set in 1739, Nadar Sah's undefested army was attacked by sikh Rebellions.",
            duration: 120,
            genre: "Action",
            language: "Hindi",
            releaseDate: "2023-10-25",
            action: "Delete"
        }
    ]

    const tableHeadings = [
        {
            title: "poster",
            dataIndex: "poster",
            render: (text, data) => {
                return (
                    <img
                        width="75"
                        height="115"
                        style={{ objectFit: "cover" }}
                        src={data.poster}
                    />
                )
            }
        },
        {
            title: "Move Name",
            dataIndex: "title"
        }, {
            title: "Description",
            dataIndex: "description"
        }, {
            title: "Duration",
            dataIndex: "duration",
            render: (text) => {
                return `${text} Mins`;
            }
        }, {
            title: "Gener",
            dataIndex: "gener"
        }, {
            title: "Language",
            dataIndex: "language"
        }, {
            title: "Release Date",
            dataIndex: "releaseDate",
            render: (text) => {
                return moment(data.releaseDate).format("MM-DD-YY");
            }
        }, {
            title: "Action",
            render: (text, data) => {
                return (
                    <div>
                        <Button
                            onClick={() => {
                                setIsModalOpen(true)
                                setSelectedMovie(data);
                                setFormType("edit");
                            }}
                        ><EditOutlined />
                        </Button>

                        <Button
                            onClick={() => {
                                setIsDeleteModalOpen(true)
                                setSelectedMovie(data);
                            }}
                        ><DeleteOutlined />
                        </Button>

                    </div>
                )
            }
        }
    ]

    const getData = async () => {
        dispatch(ShowLoading());
        const response = await getAllMovie();
        const allMovies = response.data;
        setMovies(
            allMovies.map(function (item) {
                return { ...item, key: `movie${item._id}` };
            })
        );
        dispatch(HideLoading());
    };


    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className='d-flex justify-content-end'>

                <Button
                    onClick={() => {
                        setIsModalOpen(true);
                        setFormType("add");
                    }}
                >
                    Add Movie
                </Button>

                <Table dataSource={movies} columns={tableHeadings} />
                {isModalOpen && (
                    <MovieForm
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        formType={formType}
                        getData={getData}
                        selectedMovie={selectedMovie}
                        setSelectedMovie={setSelectedMovie}
                    />
                )}
                {isDeleteModalOpen && (
                    <DeleteMovieModal
                        isDeleteModalOpen={isModalOpen}
                        setIsDeleteModalOpen={setIsModalOpen}
                        getData={getData}
                        selectedMovie={selectedMovie}
                        setSelectedMovie={setSelectedMovie}
                    />
                )}
            </div>
        </>
    )
}

export default MovieList