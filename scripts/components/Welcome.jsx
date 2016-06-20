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
      <div className='welcome-card col-xs-8 col-xs-push-2 col-xs-pull-2'>
        <div className='col-xs-12 row'>
          <img className='col-xs-5 person' src='https://d13yacurqjgara.cloudfront.net/users/60266/screenshots/2587173/caritas.gif' />
          <img className='video-camera col-xs-5 col-xs-push-2' src='https://d13yacurqjgara.cloudfront.net/users/120724/screenshots/1031269/video-camera_1x.jpg' />
        </div>
        <h5 className='card-text'>
          Welcome to the next-generation <br />
          digital talent network
        </h5>
        <Link to='profile'>
          <button className='btn btn-primary enter-button' type='submit' name='action'>Enter</button>
        </Link>
      </div>
    </div>
  </div>
)

export default Welcome
