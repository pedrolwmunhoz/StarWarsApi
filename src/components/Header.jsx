import React from 'react'
import { NavLink } from 'react-router-dom'
import { UseStateContext } from '../context/ContextProvider'

const Header = () => {

  const { setSearchValue } = UseStateContext()
  const headerTitle = ["films", "peoples"]

  const link = "cursor-pointer text-neutral-400 sm:text-2xl md:text-3xl"
  const linkBold = "cursor-pointer text-slate-800 font-bold sm:text-2xl md:text-3xl"

  return (
    <div className="flex flex-wrap gap-5">
        {headerTitle.map((title, index)=>(
          <NavLink
            className={({ isActive })=> isActive? linkBold : link }
            key={index}
            to={"/"+title.toLowerCase()}
            onClick={()=> setSearchValue("")}
          >
            {title.toUpperCase()}
          </NavLink>
        ))}
    </div>
  )
}

export default Header
