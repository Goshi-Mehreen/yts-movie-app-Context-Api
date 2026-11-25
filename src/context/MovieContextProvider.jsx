
import React, { useState } from 'react'
import MovieContext from './MovieContext'

function MovieContextProvider({ children }) {

  const [searchTerm, setSearchTerm] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const [filters, setFilters] = useState({
  quality: "all",
  genre: "all",
  rating: "0",
  orderBy: "date_added-desc",
});

  return (
    <MovieContext.Provider
     value={{
  searchTerm,
  setSearchTerm,
  searchQuery,
  setSearchQuery,
  filters,
  setFilters
}}
    >
      {children}
    </MovieContext.Provider>
  )
}

export default MovieContextProvider
