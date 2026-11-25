import React, { useContext } from 'react'
import MovieFilter from './MovieFilter'
import MovieContext from '../context/MovieContext'



function Hero()  {
  const { searchTerm, setSearchTerm, setSearchQuery,filters,setFilters } = useContext(MovieContext)
  
   
  return (
    <div className='bg-zinc-900 min-h-[300px] px-5 py-12'>

      <div className='max-w-4xl mx-auto'>

        <h1 className='text-gray-400 text-2xl md:text-3xl font-bold mb-6'>
          Search Term on YTS:
        </h1>

        <div className='flex flex-col sm:flex-row gap-3 mb-6'>

          <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            className='flex-1 bg-[#1d1d1d] border border-zinc-800 rounded px-3 py-3 text-sm text-gray-400 focus:outline-none focus:border-[#6ac045] placeholder-zinc-600'
            placeholder="Search movies..."
          />

         <button onClick={() => setSearchQuery(searchTerm)}
            className='bg-[#6ac045] hover:bg-[#5cb03c] text-white font-bold text-sm px-6 py-3 rounded transition-colors duration-200 shadow-md'
          >
            Search
          </button>
          

        </div>
        <MovieFilter/>
        <br />
        

      </div>
    

    </div>
  )
}

export default Hero
