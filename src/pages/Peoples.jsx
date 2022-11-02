import React, { useState, useEffect } from 'react'
import { getApi } from '../services/api.services'
import PeopleComponent from '../components/PeopleComponent'
import { UseStateContext } from '../context/ContextProvider'

const Peoples = () => {
  const { searchValue, render, setRender } = UseStateContext()
  const [people, setPeople] = useState([])

  async function getPeoples(){
    setRender(false)
    let page = 1
    let aux = true
    while(aux){
      await getApi("people/?page="+page)
      // eslint-disable-next-line no-loop-func
      .then((i)=>{
        !i.next ? aux = false : aux = true
        i.results.map((i)=> setPeople(oldArray =>  [...oldArray, i]))
        }
      )
      page+=1
    }
  }

  useEffect(()=>{
    getPeoples()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <div className="w-full flex justify-center mt-10">
      <div id="container" className="inline-block text-center">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
          {people?.map((item, index)=>
            !searchValue ?
              <PeopleComponent
                people={item}
                key={index}
              />
            : searchValue.toLowerCase() === item.name.toLowerCase() ?
              <PeopleComponent
                people={item}
                key={index}
              />
              : undefined
          )}
        </div>
        {render ? undefined : <p>No results</p>}
      </div>
    </div>
  )
}

export default Peoples