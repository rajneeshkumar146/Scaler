import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import basicOps from './utility/basicOps';
import ProductList from './ProductList';
import Categories from './Categories';

function Home() {

  /***single source of truth for all the products***/
  const [products, setProducts] = useState(null);

  /************ all the categories -> a product**********/
  const [categories, setCategories] = useState([]);


  /**********Action***********/

  /*********************** state ->term with which you want to filter the product list*****************************/
  const [searchTerm, setSearchTerm] = useState("");

  /*********************** sort : 0, unsorted, 1 : Increasing order, -1: decreasing order****************************/
  const [sortDir, setSortDir] = useState(0);

  /**************************** currcategory : category group you result **********************************/
  const [currentCategory, setCurrentCategory] = useState(["All Categories"]);

  const [pageSize, setPageSize] = useState(4);
  const [pageNumber, setPageNumber] = useState(1);





  // we shpould move all these useEffcet in a useEffect file
  useEffect(() => {
    (async function fetchData() {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const productData = await response.json();
      setProducts(productData);
    })();
  }, []);

  useEffect(() => {
    (async function fetchData() {
      const response = await fetch(`https://fakestoreapi.com/products/categories`);
      const CategorieData = await response.json();
      setCategories(CategorieData);
    })();
  }, []);

  let object = basicOps(products, searchTerm, sortDir, currentCategory, pageNumber, pageSize);
  let filteredArray = object.modifiedArray;
  let totalPages = object.totalPages;

  return (
    <>
      <header className="nav_wrapper">
        <div className="search_sortWrapper">
          <input
            className="search_input"
            type="text"
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value) }}>
          </input>

          <div className="icon_container">
            <ArrowCircleUpIcon
              style={{ color: "white" }}
              fontSize="large"
              onClick={() => {
                setSortDir(1);   // instead of numeric -1, 0, 1 create a enum{INCREASING, DECRESING, DEFAULT }  == {1,-1,0}
              }} />

            <ArrowCircleDownIcon
              style={{ color: "white" }}
              fontSize="large"
              onClick={() => {
                setSortDir(-1);
              }} />

          </div>
        </div>


        <div className='categories_wrapper'>
          <Categories
            CategoryList={categories}
            setCurrentCategory={setCurrentCategory}
          />
        </div>
      </header>


      <main className="product_wrapper">
        <ProductList productList={filteredArray} />
      </main>

      <div className="pagination">
        <button
          onClick={() => {
            if (pageNumber == 1) {
              return;
            }
            setPageNumber((pageNumber) => pageNumber - 1);
          }}

          disabled={pageNumber == 1 ? true : false}
        >
          <KeyboardArrowLeftIcon fontSize='large'></KeyboardArrowLeftIcon>
        </button>

        <div className='pageNum'>{pageNumber}</div>

        <button
          onClick={() => {
            if (pageNumber == totalPages) {
              return;
            }
            setPageNumber((pageNumber) => pageNumber + 1);
          }}
          
          disabled={pageNumber == totalPages ? true : false}
        >
          <ChevronRightIcon fontSize='large'></ChevronRightIcon>
        </button>
      </div>

    </>
  )
}

export default Home