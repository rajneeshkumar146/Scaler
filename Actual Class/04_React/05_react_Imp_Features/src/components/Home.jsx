import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React, { useState, useEffect } from 'react'
import Categories from './Categories';
import ProductList from './ProductList';
import basicOps from './utility/basicOps';

function Home() {

    /***single source of truth for all the products***/
    const [products, setProducts] = useState([]);

    /************ all the categories -> a product**********/
    const [categories, setCategories] = useState([]);

    /**********Action***********/

    /*********************** state ->term with which you want to filter the product list*****************************/
    const [searchTerm, setSearchTerm] = useState("");

    /**************************sort : 0 : unsorted , 1: incresing order , -1 : decreasing order ************************************/
    const [sortDir, setSortDir] = useState(0);

    /**************************** currcategory : category group you result **********************************/
    const [currCategories, setCurrCategories] = useState(["All Categories"]);

    const [pageSize, setPageSize] = useState(4);
    const [pageNum, setPageNum] = useState(1);




    /****************get all the products*********************/
    useEffect(() => {
        (async function () {
            const resp = await fetch(`https://fakestoreapi.com/products`)
            const productData = await resp.json();
            setProducts(productData);
        })()
    }, [])

    /**************getting all the categroies ********************/
    useEffect(() => {
        (async function () {
            const resp = await fetch(`https://fakestoreapi.com/products/categories`)
            const categoriesData = await resp.json();
            setCategories(categoriesData);
        })()
    }, [])

    let object = basicOps(products, searchTerm, sortDir, currCategories, pageNum, pageSize);
    let modifiedArray = object.modifiedArray;
    let totalPages = object.totalPages;

    return (
        <>
            <header className="nav_wrapper">
                <div className="search_sortWrapper">
                    <input
                        className='search_input'
                        type="text"
                        value={searchTerm}
                        onChange={(e) => { setSearchTerm(e.target.value) }} />

                    <div className="icon_container">
                        <ArrowCircleUpIcon
                            style={{ color: "white" }}
                            fontSize="large"
                            onClick={() => {
                                setSortDir(1)
                            }}
                        />
                        <ArrowCircleDownIcon
                            style={{ color: "white" }}
                            fontSize="large"
                            onClick={() => {
                                setSortDir(-1)
                            }}
                        />
                    </div>
                </div>

                <div className="categories_wrapper">
                    <Categories
                        categories={categories}
                        setCurrCategories={setCurrCategories}
                    />
                </div>

            </header>

            <main className="product_wrapper">
                {/* products will be there */}
                <ProductList productList={modifiedArray} />
            </main>

            <div className="pagination">
                <button
                    onClick={() => {
                        if (pageNum == 1) {
                            return;
                        }
                        setPageNum((pageNum) => pageNum - 1);
                    }
                    }
                    disabled={pageNum == 1 ? true : false}
                >
                    <KeyboardArrowLeftIcon fontSize='large'></KeyboardArrowLeftIcon>
                </button>
                <div className="pageNum">{pageNum}</div>
                <button
                    onClick={() => {
                        if (pageNum == totalPages) {
                            return;
                        }
                        setPageNum((pageNum) => pageNum + 1);
                    }
                    }
                    disabled={pageNum == totalPages ? true : false}
                >
                    <ChevronRightIcon fontSize='large'></ChevronRightIcon>
                </button>

            </div>
        </>

    )
}

export default Home;


