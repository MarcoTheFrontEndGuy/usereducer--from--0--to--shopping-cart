import React from 'react'
import { useReducer } from 'react'
import { shoppingInitialState, ShoppingReducer } from '../reducers/shoppingReducer';
import ProductItem from './ProductItem';

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(ShoppingReducer, shoppingInitialState);
  const {products, cart} = state; //products,cart,  --from initialState created on reducer

  const addToCart = (id) => {
    console.log(id);
  }
  const deleteFromCart = () => {}
  const clearCart = () => {}


  return (
    <div>
       <h2>Carrito de Compras</h2>
       <h3>Productos</h3>
       <article className="box grid-responsive">
         {/* list of shop items  */}
         {products.map((product) => <ProductItem key={product.id} data={product} addToCart={addToCart} />)}
       </article>
       <h3>Carrito</h3>
       <article className="box">
         {/* list of selected items to purchase  */}

       </article>
    </div>
  )
}

export default ShoppingCart