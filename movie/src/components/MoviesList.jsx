import React from 'react'
import Loading from './Loading'
import Movi from './Movi'
import { useGlobalContext } from "../Context";



const MoviesList =  () => {

  const { movies, loading } = useGlobalContext();

  
  if (loading) {
    return <Loading />;
  }

  if (movies.length < 1) {
    return <h2 className="section-title">there's no movie available</h2>;
  }

  return (
    <section>
      <h2 className='section-title'>movies</h2>
      <div className="cocktails-center">
        {movies.map((item) => {
          return < Movi key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default MoviesList