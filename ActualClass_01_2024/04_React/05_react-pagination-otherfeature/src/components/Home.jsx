import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import basicOps from './utility/basicOps';
import Categories from './Categories';
import ProductList from './ProductList';

function Home() {
    const [products, setProduct] = useState(null);
    const [categories, setCategories] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");

    const [sortDir, setSortDir] = useState(0);

    const [currCategories, setCurrCategories] = useState("All Categories");

    const [pageSize, setPageSize] = useState(4);
    const [pageNum, setPageNum] = useState(1);

    useEffect(() => {
        (async function () {
            const response = await fetch(`https://fakestoreapi.com/products`);
            const productData = await response.json();

            setProduct(productData);
        })();

    }, []);

    /********************Getting all the categories *****************/
    useEffect(() => {
        (async function () {
            const response = await fetch(`https://fakestoreapi.com/products/categories`);
            const categorieData = await response.json();
            setCategories(categorieData);
        })();

    }, []);

    let object = basicOps(products, searchTerm, sortDir, currCategories, pageNum, pageSize);
    let modifiedArray = object.modifiedArray != null ? object.modifiedArray : [];
    let totalPages = object.totalPages;

    return (
        <>
            <header className="nav_wrapper">
                <div className="search_sortWrapper">
                    <input
                        className='search_input'
                        type="text"
                        value={searchTerm}
                        onChange={(e) => { setSearchTerm(e.target.value) }}
                    ></input>

                    <div className="icon_container">
                        <ArrowCircleUpIcon
                            style={{ color: "white" }}
                            fontSize="large"
                            onClick={() => {
                                setSortDir(1)
                            }} />

                        <ArrowCircleDownIcon
                            style={{ color: "white" }}
                            fontSize="large"
                            onClick={() => {
                                setSortDir(-1)
                            }} />

                    </div>
                </div>
                <div className="categories_wrapper">
                    <Categories
                        categories={categories}
                        setCurrCategories={setCurrCategories}
                    ></Categories>
                </div>
            </header>

            <main className="product_wrapper">
                <ProductList productList={modifiedArray} />
            </main>


            <div className="pagination">
                <button
                    onClick={() => {
                        if (pageNum == 1) {
                            return;
                        }
                        setPageNum((pageNum) => pageNum - 1);
                    }}
                    disabled={pageNum == 1 ? true : false}
                >
                    <KeyboardArrowLeftIcon fontSize="large" />
                </button>
                <div className="pageNum">{pageNum}</div>
                <button
                    onClick={() => {
                        if (pageNum == totalPages) {
                            return;
                        }
                        setPageNum((pageNum) => pageNum + 1);
                    }}
                    disabled={pageNum == totalPages ? true : false}
                >
                    <KeyboardArrowRightIcon fontSize="large" />
                </button>

            </div>
        </>

    )
}

export default Home
