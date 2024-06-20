import React from 'react'
import HomeHeader from './HomeHeader'
import Statistics from '../Statistics/Statistics'

const Home = () => {
  return (
    <div className='home'>
      <HomeHeader/>
      <Statistics/>
    </div>
  )
}

export default Home