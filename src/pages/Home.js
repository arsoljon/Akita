import React from 'react'
import Title from '../components/Title'
import History from './History'
import Messages from './Messages'
import Park from './Park'

const Home = () => {
  return (
    <main>
      <Title />
      <div>
        <Park />
        <History />
        <Messages />
      </div>
    </main>
  )
}

export default Home
