import {createContext, useState} from "react";



const CartContext = createContext();



export function CartContextProvider({children}) {
    const [itemsCart,setItemsCart] = useState ([])


function addItem(item,qty) {
    setItemsCart([...itemsCart,item,qty])

}


return (
    <CartContext.Provider value={ {addItem,itemsCart} }>
     {children} 
    </CartContext.Provider>

    )
}

export default CartContext;