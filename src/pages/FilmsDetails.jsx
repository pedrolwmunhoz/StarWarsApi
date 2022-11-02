import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { UseStateContext } from '../context/ContextProvider'
import { getApi } from '../services/api.services'
import { NavLink } from 'react-router-dom'

const FilmsDetails = () => {

  const { film, setFilm } = UseStateContext()
  const [characters, setCharacters] = useState([])


  useEffect(()=>{
    film.characters?.map(async (i)=>{
        await getApi("/people/"+i[29]+i[30])
        .then((data)=>{
           setCharacters(oldArray => [...oldArray,data])
        })
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="flex w-full items-center justify-center mt-10">
        <div className="flex flex-col sm:w-4/5 lg:w-3/4 h-2/4 bg-white rounded-xl p-12">
            <div className="flex flex-row flex-wrap md:flex-nowrap justify-center gap-5">
                <img className="w-44 h-72" alt="filmImg" src = {require(`../data/films/${film.episode_id}.jpg`)}/>
                <div className='flex flex-col lg:w-2/4'>
                    <p className="text-slate-800 font-bold sm:text-2xl md:text-3xl">
                        STAR WARS {film.episode_id} - {film.title.toUpperCase()}
                    </p>
                    <p className='mt-3'>
                        {film.opening_crawl}
                    </p>
                </div>
            </div>
            <div className="flex text-center mt-5 justify-center w-full">
                <div className='flex flex-col lg:w-2/4'>
                    <div className="flex flex-row flex-wrap border p-1 gap-2 bg-slate-100 mt-4">
                        <p className="text-slate-800 font-bold">Episode Id:</p>
                        <p>{film.episode_id}</p>
                    </div>
                    <div className="flex flex-row flex-wrap gap-2 border p-1">
                        <p className="text-slate-800 font-bold">Release Date:</p>
                        <p>{film.release_date}</p>
                    </div>
                    <div className='flex flex-row items-center flex-wrap gap-2 border p-1  bg-slate-100 mt-4'>
                        <p className="text-slate-800 font-bold">Characters:</p>
                        {characters?.map((i, index)=>(
                            <p key={index}
                            className="flex gap-"
                            >
                                {i.name}{index===1?"":" -"}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center mt-4">
                <NavLink
                to={"/films"}
                className="text-center w-2/4 border p-2"
                onClick={()=>setFilm([])}
                >
                    Go back
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default FilmsDetails