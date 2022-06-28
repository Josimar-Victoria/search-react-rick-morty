import React, { useEffect, useState } from 'react'
import Character from './Character'
import NavPage from './NavPage'

const CharacterList = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchData () {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      )
      const data = await response.json()
      setLoading(false)
      setCharacters(data.results)
    }
    fetchData()

    // fetch('https://rickandmortyapi.com/api/character')
    //   .then(res => res.json())
    //   .then(data => console.log(data))
  }, [page])

  return (
    <div className='container'>
      <NavPage setPage={setPage} page={page} />

      {loading ? (
        <div className='text-center'>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className='row'>
          {characters.map(character => (
            <div className='col-md-4' key={character.id}>
              <Character {...character} />
            </div>
          ))}
        </div>
      )}
      <NavPage setPage={setPage} page={page} />
    </div>
  )
}

export default CharacterList
