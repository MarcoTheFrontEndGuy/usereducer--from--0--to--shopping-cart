import React from 'react'
import { useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from '../reducers/shoppingReducer'
import { TYPES } from '../actions/shoppingActions'
import ProductItem from './ProductItem'
import CartItem from './CartItem'

const ShoppingCart = () => {
   const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
   
   
   const {products, cart} = state;

   const addToCart = (id) => {
      dispatch({type: TYPES.ADD_TO_CART, payload: id})
   };
   
   
   const deleteFromCart = () => dispatch({type: TYPES.REMOVE_ONE_FROM_CART, });
   
   
   const clearCart = () => dispatch({ type: TYPES.CLEAR_CART, });

   
   return (
      <div>
         <h2>Carrito de Compras</h2>
         <h3>Productos</h3>
         <article className="box grid-responsive">
            {products && products.map((product) => (
               <ProductItem key={product.id} data={product} addToCart={addToCart} />
            ))}
         </article>

         <h3>Carrito</h3>
         <article className="box">
            <button onClick={clearCart}>Limpiar Carrito</button>
            {cart && cart.map((item, index) => (
               <CartItem key={index} data={item} deleteFromCart={deleteFromCart} />
            ))}
         </article>
      </div>
   )
}

export default ShoppingCart