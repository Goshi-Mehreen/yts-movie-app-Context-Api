import React, { useEffect, useState,useContext } from 'react'
import Card from './Card'
import MovieContext from '../context/MovieContext'

function MovieList({page,setTotalMovies}) {
  const {searchQuery,filters} = useContext(MovieContext)

  const [movies, setMovies] = useState([])
  const [sortBy,orderBy] = filters.orderBy.split("-")
  
  

  useEffect(() => {
    const fetchMovies = async () => {
      try {
       const response = await fetch(
`https://movies-api.accel.li/api/v2/list_movies.json?limit=20&page=${page}&quality=${filters.quality}&genre=${filters.genre}&minimum_rating=${filters.rating}&sort_by=${sortBy}&order_by=${orderBy}&query_term=${encodeURIComponent(searchQuery)}`)

        const data = await response.json()

        if (data.status === 'ok') {
  setMovies(data.data.movies || [])
  setTotalMovies(data.data.movie_count || 0)
}

      } catch (error) {
        console.log(error)
      }
    }

    fetchMovies()
  }, [page,searchQuery,filters])

  return (
    <div className="bg-zinc-900 px-5 py-8">
        <h2 className="text-white text-xl mb-5">
  {searchQuery ? `Search Results: ${searchQuery}` : 'Latest Movies'}
</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}

      </div>

    </div>
  )
}

export default MovieList






