import React from 'react'
import './Destination.css'
import imagemoon from './assets/destination/image-moon.png'


const Destination = () => {
  return (
    <div className='destination_container'>
      <div class="container-2">
        <p class="medium">Pick your destination</p>
        <div class="flex-r m-t">
          <img src={imagemoon} alt="moon"/>
          <div class="nav-flex c2">
            <div>
              <nav>
                <ul class="flex">
                  <li><a href="./destination-moon.html">Moon</a></li>
                  <li><a href="./destination-mars.html">Mars</a></li>
                  <li><a href="./destination-europa.html">Europa</a></li>
                  <li><a href="./destination-titan.html">Titan</a></li>
                </ul>
              </nav>
              <div>
                <p class="big">Moon</p>
                <p class="small">
                  See our planet as you’ve never seen it before. A perfect relaxing trip away to help
                  regain perspective and come back refreshed. While you’re there, take in some history
                  by visiting the Luna 2 and Apollo 11 landing sites.
                </p>
                <div class="flex">
                  <div>
                    <p class="small-n">Avg. distance</p>
                    <p class="medium">384,400 km</p>
                  </div>
                  <div>
                    <p class="small-n">Est. travel time</p>
                    <p class="medium">3 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Destination;