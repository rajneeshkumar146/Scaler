import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(null);


  useEffect(() => {
    (async function fetchData() {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const productData = await response.json();

      // productData.forEach((elem) => {
      //   console.log(elem.title);
      // });

      setProducts(productData);
    })();
  }, []);
  return (
    <>
      <header className="nav_wrapper">
        <input className="search_input" type="text" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }}></input>
      </header>

      <main className="product_wrapper">
        {products === null ? <h4>...Loading</h4> :
          <>
            {products.map((product) => {
              return (<div className="product">
                <img src={product.image} alt="" className="product_image" />
                <div className="product_meta">
                  <p className="product_title"> {product.title}</p>
                  <p className="price"> {"price: $" + product.price }</p>

                </div>
              </div>);
            })}
          </>
        }


      </main>

    </>
  )
}

export default Home