import React from 'react'

const CartItem = ({data, deleteFromCart}) => {
  let {id, name, price} = data;
  return (
    <div style={{ borderBottom: 'thin solid gray'}}>
       <h4>{name}</h4>
       <h4>${price}.00</h4>
       <button>Eliminar Uno</button>
       <button>Eliminar Todos</button>
    </div>
  )
}

export default CartItem