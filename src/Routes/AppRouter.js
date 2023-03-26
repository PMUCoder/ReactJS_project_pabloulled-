import { BrowserRouter } from "react-router-dom"
import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"

export const AppRouter = () => {

    const { user } = useContext(LoginContext)

    return (
        <BrowserRouter>
            {
                user.logged
                    ? <PrivateRoutes/>
                    : <PublicRoutes/> 
            }
        </BrowserRouter>
    )
}