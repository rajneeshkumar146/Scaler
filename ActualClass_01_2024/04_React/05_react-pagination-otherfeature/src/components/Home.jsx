import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import basicOps from './utility/basicOps';
import Categories from './Categories';

function Home() {
    const [products, setProduct] = useState(null);
    const [categories, setCategories] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");

    const [sortDir, setSortDir] = useState(0);

    const [currCategories, setCurrCategories] = useState("All Categories");

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

    let modifiedArray = basicOps(products, searchTerm, sortDir, currCategories);

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

                    <div>
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
                {
                    modifiedArray === null ? <h3>...Loadig</h3> :
                        <>
                            {modifiedArray.map((product) => {
                                return (<div className='product'>
                                    <img src={product.image} alt="" className='product_image'></img>
                                    <div className='product_meta'>
                                        <p className="product_title">Title: {product.title}</p>
                                        <p className="price">Price: {product.price}</p>
                                    </div>


                                </div>)

                            })}
                        </>
                }
            </main>
        </>

    )
}

export default Home
