import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  const headerTitle = ["films", "people", "species"]

  const linkFocus = "cursor-pointer text-neutral-400"
  const link = 'cursor-pointer text-slate-800 font-bold'

  return (
    <div className="flex flex-wrap gap-5">
        {headerTitle.map((title, index)=>(
          <NavLink
            className={({ isActive })=> isActive? link : linkFocus}
            key={index}
            to={"/"+title.toLowerCase()}
          >
            {title.toUpperCase()}
          </NavLink>
        ))}
    </div>
  )
}

export default Header
