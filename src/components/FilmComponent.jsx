import React from 'react'
import { useEffect } from 'react'
import { UseStateContext } from '../context/ContextProvider'

const FilmComponent = (props) => {
  const { setRender } = UseStateContext()

  useEffect(()=>{
    setRender(true)
  },[setRender])

  return (
    <div className="flex flex-col bg-white">
        <div className="md:p-4 p-6 text-center flex flex-col">
            <img className="w-full md:h-96 h-30" alt="poster" src = {require(`../data/${props.imgId}`)}/>
            <p className="text-slate-600 mt-3 text-sm">{props.name}</p>
        </div>
    </div>
  )
}

export default FilmComponent