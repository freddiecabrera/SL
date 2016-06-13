import React from 'react'
import { Link } from 'react-router'
import styles from '../../public/styles/Welcome.css'

const Welcome = () => (
  <div className='container'>
    <div className='logo-container'>
      <span className='logo-scale'>SCALE</span>
      <span className='logo-lab'>LAB</span>
    </div>
    <div className='row'>
      <div className='welcome-card col s8 push-s2 pull-s2 z-depth-1'>
        <div className='col s12 row'>
          <img className='col s5' src='https://d13yacurqjgara.cloudfront.net/users/60266/screenshots/2587173/caritas.gif' />
          <img className='video-camera col s5 push-s2' src='https://d13yacurqjgara.cloudfront.net/users/120724/screenshots/1031269/video-camera_1x.jpg' />
        </div>
        <h5 className='card-text'>
          Welcome to the next-generation <br />
          digital talent network
        </h5>
        <Link to='profile'>
          <button className='btn waves-effect waves-light enter-button' type='submit' name='action'>Enter
            <i className='material-icons right'>play_arrow</i>
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default Welcome
