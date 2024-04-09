import React from 'react'
import "../../Styles/ProductCategory/ProductCategory.css"
const ProductCategory = ({ category, image }) => {
     return (
          <div id="productCategory" style={{backgroundImage:`url(${image})`}}>
               <p className='category-product'>{category}</p>
          </div>
     )
}

export default ProductCategory