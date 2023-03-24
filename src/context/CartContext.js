import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState ([])

    const addToCart = (item) => {
        setCart ([...cart, item])
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.Id === id)
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
        setCart(cart.filter((prod) => prod.Id !==id))
    }

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
