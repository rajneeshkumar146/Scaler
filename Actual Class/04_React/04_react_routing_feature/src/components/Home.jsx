import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProduct] = useState(null);

    useEffect(() => {
        (async function () {
            const response = await fetch(`https://fakestoreapi.com/products`);
            const productData = await response.json();

            // productData.forEach((elem) => {
            //     console.log(elem.title);
            // });

            setProduct(productData);
        })();
    }, []);


    let filteredArr = products;
    if (searchTerm != "") {
        filteredArr = filteredArr.filter((product) => {
            let lowerSearchTerm = searchTerm.toLowerCase();
            let lowerTitle = product.title.toLowerCase();
            return lowerTitle.includes(lowerSearchTerm);
        })
    }

    return (
        <>
            <header className="nav_wrapper">
                <input
                    className='search_input'
                    type="text"
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value) }} />
            </header>

            <main classname="product_wrapper">
                {filteredArr === null ? <h3>...Loading</h3> :
                    <>
                        {filteredArr.map((product) => {
                            return (<div className="product">
                                <img src={product.image} alt=""
                                    className='product_image' />
                                <div className="product_meta">
                                    <p className="product_title">{product.title}</p>
                                    <p className='Price'>$ {product.price}</p>
                                </div>
                            </div>
                            )
                        })}
                    </>

                }
            </main>
        </>
    )
}

export default Home