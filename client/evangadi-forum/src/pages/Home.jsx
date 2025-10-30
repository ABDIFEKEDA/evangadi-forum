import React from 'react'
import { AppState } from '../App'
import { useContext } from 'react'

function Home() {
  const {user} = useContext(AppState);
  return (
    <div>
      <h1> Wel Come to Home!</h1>
      <br />
      <br />
      <br />
      <h2> Wel-come:{user?.username}</h2>
    </div>
  )
}

export default Home