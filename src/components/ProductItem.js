import React from 'react'

const ProductItem = ({data, addToCart}) => {
   const {id, name, price} = data;
  return (
    <div style={{ border: 'thin solid gray', padding: '1rem'}}>
       <h4>{name}</h4>
       <h5>£{price}.00</h5>
       <button onClick={() => addToCart(id)}>add to cart</button>
    </div>
  )
}

export default ProductItem