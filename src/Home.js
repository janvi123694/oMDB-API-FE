import React from 'react'
import SearchForm from './SearchForm'
import Movies from './Movies'
import { useGlobalContext } from './context'; 

const Home = () => {
  return (
    <main>
      <SearchForm/>
      <Movies/>
    </main>
  )
}

export default Home
