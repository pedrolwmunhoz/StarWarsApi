import React , { createContext, useContext, useState } from 'react'

const StateContext = createContext();

export const ContextProvider = ({children}) =>{
    const [searchValue, setSearchValue] = useState("")
    const [render, setRender] = useState(false)
    const [film, setFilm] = useState([])

    return (
        <StateContext.Provider
            value={{
                searchValue,
                setSearchValue,
                render,
                setRender,
                film,
                setFilm
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const UseStateContext = ()=> useContext(StateContext)