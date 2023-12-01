import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import React, { useState, useEffect } from 'react'
import Categories from './Categories';
import ProductList from './ProductList';
import basicOps from './utility/basicOps';

function Home() {

    /***single source of truth for all the products***/
    const [products, setProducts] = useState(null);

    /************ all the categories -> a product**********/
    const [categories, setCategories] = useState([]);

    /**********Action***********/

    /*********************** state ->term with which you want to filter the product list*****************************/
    const [searchTerm, setSearchTerm] = useState("");

    /**************************sort : 0 : unsorted , 1: incresing order , -1 : decreasing order ************************************/
    const [sortDir, setSortDir] = useState(0);

    /**************************** currcategory : category group you result **********************************/
    const [currCategories, setCurrCategories] = useState(["All Categories"]);




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


    let modifiedArray = basicOps(products, searchTerm, sortDir, currCategories);

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
        </>

    )
}

export default Home;


