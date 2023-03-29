import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || [] 
export const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState (init)

    const addToCart = (item) => {
        setCart ([...cart, item])
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const totalQuantity = () => {
        return cart.reduce((acc,prod) => acc + prod.counter, 0)
    }

    const totalPurchase = () => {
        return cart.reduce((acc,prod) => acc + prod.counter * prod.Price, 0)
    }

    const emptyCart = () => {
        setCart([])
    }

    const deleteItemFromCart = (id) => {
        setCart(cart.filter((prod) => prod.id !==id))
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            totalQuantity,
            totalPurchase,
            emptyCart,
            deleteItemFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
