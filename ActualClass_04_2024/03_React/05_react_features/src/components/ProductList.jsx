import React from 'react'

function ProductList(props) {
  const { productList } = props;
  return (
    <>
      {productList == null ? <h4>...Loading</h4> :
        <>
          {productList.map((product) => {
            return (<div className="product">
              <img src={product.image} alt="" className="product_image" />
              <div className="product_meta">
                <p className="product_title"> {product.title}</p>
                <p className="price"> {"price: $" + product.price}</p>

              </div>
            </div>);
          })}
        </>
      }

    </>
  )
}

export default ProductList