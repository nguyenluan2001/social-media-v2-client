import React, { useContext, useEffect, useState } from 'react'
import { Redirect, Route } from "react-router-dom"
import { AuthContext } from "../services/context/Auth"
import { useQuery } from "@apollo/client"
import { checkAuth } from "../graphql-client/user/query"
function PrivateRoute({ component: Component, ...rest }) {
    const { isAuthenticated, setIsAuthenticated, setAuthUser } = useContext(AuthContext)
    const { loading, error, data } = useQuery(checkAuth)
    const [render, setRender] = useState("")
    const [props, setProps] = useState(null)
    console.log(rest)
    useEffect(() => {
        if (!loading) {
            console.log(1111)
            if (data?.checkAuth) {
                setIsAuthenticated(true)
                setAuthUser(data.checkAuth)
                console.log(data?.checkAuth)
                setRender(<Component></Component>)
            }
            else {
                console.log(data?.checkAuth)
                setRender(<Redirect to="/login"></Redirect>)

            }
        }
        else {
            console.log(222)
        }
    }, [loading])
    console.log(loading)
    console.log(data?.checkAuth)
    return (
        <Route
            {...rest}
            render={(props) => (
                <>
                         {/* {render} */}
                         {
                             !loading&&data?.checkAuth
                             ?(
                                 data?.checkAuth
                                 ?<Component {...props}></Component>
                                 :<Redirect to="/login"></Redirect>
                             )
                             :""
                         }
                </>
                   


            )
            }
        ></Route>
    )
}

export default PrivateRoute
