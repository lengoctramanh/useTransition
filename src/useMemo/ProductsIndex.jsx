
//REACT
import  { Fragment, useState } from 'react'


//DATA
import {productDummy} from "./Data/ProductDummy"


//COMPONENT
import ProductList  from '../useMemo/components/ProductList'

const ProductsIndex = () => {
  const [products]=useState(productDummy)
  return (
    <Fragment>
<ProductList products={products}/>
    </Fragment>
  )
}

export default ProductsIndex