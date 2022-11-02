import React from 'react'
import { useEffect, useState} from 'react'
import FilmComponent from '../components/FilmComponent'
import { getApi } from '../services/api.services'
import { UseStateContext } from '../context/ContextProvider'
import { NavLink } from 'react-router-dom'

const Home = () => {
  const { searchValue, render, setRender, setFilm } = UseStateContext()
  const [films, setFilms] = useState([])

  useEffect(()=>{
    setRender(false)
    async function getFilms(){
      setFilms(await getApi("films"))
    }
    getFilms()
  },[setRender])



  return (
    <div className="w-full flex justify-center mt-10"
    >
      <div id="container" className="inline-block">
        <div className='text-center'>
          <div className="grid gap-5 grid-cols-2 md:grid-cols-3">
            { films.results?.map((item,index)=>(
                !searchValue  ?
                  <NavLink
                   onClick={()=>{
                    setFilm(item)
                  }}
                    to={"/films-details"}
                    key={index}
                  >
                    <FilmComponent
                      imgId={"films/"+item.episode_id+".jpg"}
                      name={item.title}
                    />
                  </NavLink>
                : searchValue.toLowerCase() === item.title.toLowerCase() ?
                    <FilmComponent
                      imgId={"films/"+item.episode_id+".jpg"}
                      name={item.title}
                      key={index}
                    />
                  : undefined
              ))
            }
          </div>
          {render ? undefined : <p>No results</p>}
        </div>
      </div>
    </div>
  )
}

export default Home