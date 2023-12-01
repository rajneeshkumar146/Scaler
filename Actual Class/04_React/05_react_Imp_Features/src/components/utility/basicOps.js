import React from 'react'

const searchItems = (arrayOfProducts, searchTerm) => {
    let modifiedArray = arrayOfProducts;
    if (searchTerm != "") {
        modifiedArray = modifiedArray.filter((product) => {
            let lowerSearchTerm = searchTerm.toLowerCase();
            let lowerTitle = product.title.toLowerCase();
            return lowerTitle.includes(lowerSearchTerm);
        })
    }
    return modifiedArray;
}

const sortingOfProdcts = (arrayOfProducts, sortDir) => {
    let modifiedArray = arrayOfProducts;
    if (sortDir != 0) {
        if (sortDir == 1) {
            // i=Increasing Order.
            modifiedArray = modifiedArray.sort((product1, product2) => {
                return product1.price - product2.price;
            });

        } else {
            // Decreasing Order.
            modifiedArray = modifiedArray.sort((product1, product2) => {
                return product2.price - product1.price;
            });
        }
    }
    return modifiedArray;
}

const categorization = (arrayOfProducts, currCategories) => {
    let modifiedArray = arrayOfProducts;
    if (currCategories != "All Categories") {
        modifiedArray = modifiedArray.filter((product) => {
            return product.category == currCategories;
        })
    }
    return modifiedArray;
}

const pagination = (arrayOfProducts, pageNum, pageSize) => {
    let modifiedArray = arrayOfProducts;

    let totalPages = Math.ceil(modifiedArray.length / pageSize);
    let sidx = (pageNum - 1) * pageSize;
    let eidx = sidx + pageSize;
    modifiedArray = modifiedArray.slice(sidx, eidx);
    return { modifiedArray, totalPages };
}

export default function basicOps(products, searchTerm, sortDir, currCategories, pageNum, pageSize) {
    if (products == null) {
        return;
    }

    let modifiedArray = products;
    /*************filtering -> hiding  products*************/
    modifiedArray = searchItems(modifiedArray, searchTerm);

    /***********************sorting -> rearrange**********************************/
    modifiedArray = sortingOfProdcts(modifiedArray, sortDir);

    /**************************categorization**********************************************/
    modifiedArray = categorization(modifiedArray, currCategories);

    /************************Pagination *********************/
    return pagination(modifiedArray, pageNum, pageSize);
}
