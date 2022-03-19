import React from 'react';
import {useContext} from "react"
import CartContext from './context/CartContext';
import {Link} from "react-router-dom"




function Carrito(){
    const {removeItem,itemsCart,clearCart,getTotalPrice} = useContext(CartContext);



    if(itemsCart.length === 0){
        return (
            <div className="container">
                <h1>No hay elementos</h1>
                <p>Te invitamos a adquirir un libro!</p>
                <Link type="button" className="btn btn-primary" to="../">Ir a la Biblioteca</Link>


            </div>
        )
    }

  else {
      return (<h1>Ke</h1>)
  }
}



export default Carrito