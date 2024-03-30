const searchItems = (arrayOfProducts, searchTerm) => {
    let modifiedArray = arrayOfProducts;
    if (searchTerm != "") {
        modifiedArray = modifiedArray.filter((product => {
            let lowerSearchTerm = searchTerm.toLowerCase();
            let lowertitle = product.title.toLowerCase();

            return lowertitle.includes(lowerSearchTerm);
        }));
    }

    return modifiedArray;

}

const sortingOfProducts = (arrayOfProducts, sortDir) => {
    let modifiedArray = arrayOfProducts;
    if (sortDir != 0) {
        if (sortDir == 1) {
            // sort in increaing order
            modifiedArray = modifiedArray.sort((product1, product2) => {
                return product1.price - product2.price;
            });
        } else {
            // sort in decreeasing order
            modifiedArray = modifiedArray.sort((product1, product2) => {
                return product2.price - product1.price;
            });

        }
    }

    return modifiedArray;
}

const categorization = (arrayOfProducts, currCategories) => {
    let modifiedArray = arrayOfProducts;
    if (currCategories.localeCompare("All Categories") != 0) {
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
    let eidx = sidx + (pageSize - 1)

    modifiedArray = modifiedArray.slice(sidx, eidx + 1);

    return { modifiedArray, totalPages };
}



export default function basicOps(arrayOfProducts, searchTerm, sortDir, currCategories, pageNum, pageSize) {
    if (arrayOfProducts == null) {
        return [];
    }

    let modifiedArray = arrayOfProducts;
    /******************** Filtering products **************************/
    modifiedArray = searchItems(modifiedArray, searchTerm);

    /******************** Sorting products ********************/
    modifiedArray = sortingOfProducts(modifiedArray, sortDir);

    /********************categorization /********************/
    modifiedArray = categorization(modifiedArray, currCategories);

    /******************** Pagination *********************/
    return pagination(modifiedArray, pageNum, pageSize)
}
