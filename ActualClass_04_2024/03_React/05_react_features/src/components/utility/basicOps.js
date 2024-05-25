import { minHeight } from "@mui/system";

const searchItem = (arrayOfProducts, searchterm) => {
    let modifiedArray = arrayOfProducts;
    if (searchterm != "") {
        modifiedArray = modifiedArray.filter((product) => {
            let lowerCaseSearchTerm = searchterm.toLowerCase();
            let lowerCaseTitle = product.title.toLowerCase();

            return lowerCaseTitle.includes(lowerCaseSearchTerm);
        });
    }

    return modifiedArray;
}

const sortingOfProducts = (arrayOfProducts, sortDir) => {
    let modifiedArray = arrayOfProducts;
    console.log(sortDir);
    if (sortDir != 0) {
        if (sortDir == 1) {
            // increasing Order
            modifiedArray = modifiedArray.sort((product1, product2) => {
                return product1.price - product2.price;
            });
        } else {
            // decreasing Order
            modifiedArray = modifiedArray.sort((product1, product2) => {
                return product2.price - product1.price;
            });
        }
    }

    return modifiedArray;
}

const categorization = (arrayOfProducts, currentCategory) => {
    let modifiedArray = arrayOfProducts;
    if (currentCategory != "All Categories") {
        modifiedArray = modifiedArray.filter((product) => {
            return product.category === currentCategory;
        });
    }
    return modifiedArray;
}

const pagination = (arrayOfProducts, pageNum, pageSize) => {
    let modifiedArray = arrayOfProducts;
    let totalElement = modifiedArray.length;


    let sidx = (pageNum - 1) * pageSize;
    let eidx = sidx + (pageSize - 1);
    if (eidx > totalElement - 1) {
        eidx = totalElement - 1;
    }

    let totalPages = Math.ceil(totalElement / pageSize);
    modifiedArray = modifiedArray.slice(sidx, eidx);
    return { modifiedArray, totalPages };
}



export default function basicOps(products, searchTerm, sortDir, currentCategory, pageNum, pageSize) {
    if (products == null || products.length == 0) {
        return {products, pageSize};
    }

    console.log("Rajnesh: " + sortDir);
    let modifiedArray = products;

    /** ------------------- Filtering ------------------- */
    modifiedArray = searchItem(modifiedArray, searchTerm);

    /** ------------------- Sorting ------------------- */
    modifiedArray = sortingOfProducts(modifiedArray, sortDir);

     /** ------------------- Cate ------------------- */
    modifiedArray = categorization(modifiedArray, currentCategory);

    return pagination(modifiedArray, pageNum, pageSize);
}