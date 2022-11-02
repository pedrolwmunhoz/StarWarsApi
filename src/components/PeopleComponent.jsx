import React from 'react'
import { useEffect } from 'react'
import { UseStateContext } from '../context/ContextProvider'

function PeopleComponent( props ) {
  const { setRender } = UseStateContext()

  useEffect(()=>setRender(true),[setRender])

  return (
    <div className="flex justify-center xl:w-96 flex-col bg-white">
        <div className="text-sm sm:text-sm md:p-4 p-6 text-center flex flex-col">
            <h1 className='text-slate-800 font-bold'>
                {props.people.name?.toUpperCase()}
            </h1>
            <p className="mt-4 border bg-slate-100">Details:</p>
            <div className='flex flex-col text-center'>
                <div className='flex flex-row items-center flex-wrap gap-2 border p-1'>
                    <p className="text-slate-800 font-bold">BIRTH YEAR:</p>
                    <p>{props.people?.birth_year}</p>
                </div>
                <div className='flex flex-row items-center gap-2 flex-wrap border p-1 bg-slate-100'>
                    <p className="text-slate-800 font-bold">HEIGHT:</p>
                    <p>{props.people?.height} cm</p>
                </div>
                <div className='flex flex-row items-center gap-2 flex-wrap border p-1'>
                    <p className="text-slate-800 font-bold">MASS:</p>
                    <p>{props.people?.mass} kg</p>
                </div>
                <div className='flex flex-row items-center gap-2 flex-wrap border p-1 bg-slate-100'>
                    <p className="text-slate-800 font-bold">EYE COLOR:</p>
                    <p>{props.people?.eye_color}</p>
                </div>
                <div className='flex flex-row items-center gap-2 flex-wrap border p-1'>
                    <p className="text-slate-800 font-bold">FILMS:</p>
                    <p>{props.people.films?.map((i)=> "-"+i[28]
                    )}</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default PeopleComponent