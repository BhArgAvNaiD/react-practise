import React from 'react'
import './Home.css'

const Home = () => {
  return (
  <div className='home_container'>
    <div className='main-container flex-r'>
        <div class="c1">
          <p class="medium">So, you want to travel to</p>
          <p class="big">SPACE</p>
          <p class="small">Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div class="c2">
          <button class="btn">
            <h1>Explore</h1>
          </button>
        </div>
      </div>
  </div>
  )
}

export default Home