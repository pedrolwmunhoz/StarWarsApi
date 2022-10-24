import React from 'react'
import { BiSearchAlt }from 'react-icons/bi'

function SearchComponent() {

  function handleButtonSearch () {
    document.getElementById("button-search").focus()
  }

  return (
    <div className="static navbar w-full mb-20">
        <div className="flex flex-wrap justify-end p-5 gap-5 items-center">
          <input className="w-0 outline-none p-2 border-none focus:border-1 focus:rounded-2xl focus:border-solid focus:border-slate-400 focus:md:w-1/3 focus:w-2/4 bg-transparent ease-linear duration-500"
            id="button-search"
            type="search"
            placeholder="Search name"
          />
          <BiSearchAlt className="cursor-pointer"
            size={30}
            onClick={()=> handleButtonSearch()}/>
        </div>
    </div>
  )
}

export default SearchComponent