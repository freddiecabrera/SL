import React from 'react'
import styles from '../../public/styles/SocialReach.css'
const { object, func } = React.PropTypes

const nFormatter = num => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  }
  return num
}

const SocialReach = props => (
  <div className='row'>
    <button onClick={props.modalTrigger.bind(null, true)} className='btn btn-warning edit-button'>Edit</button>
    <div className='col-xs-12 social-card-container'>
      <a href={props.social.youtube ? props.social.youtube.url : null} target='blank'>
        <div className='youtube-card col-xs-4 col-md-4 col-lg-3'>
          <img src='public/social-media-icons/youtube-logo.svg' alt='youtube icon' />
          <h5>{props.social.youtube ? nFormatter(props.social.youtube.number) : 0}</h5>
        </div>
      </a>
      <a href={props.social.facenook ? props.social.facenook.url : null} target='blank'>
        <div className='facebook-card col-xs-4 col-md-4 col-lg-3'>
          <img src='public/social-media-icons/facebook-letter-logo.svg' alt='facebook icon' />
          <h5>{props.social.facenook ? nFormatter(props.social.facenook.number) : 0}</h5>
        </div>
      </a>
      <a href={props.social.vine ? props.social.vine.url : null} target='blank'>
        <div className='vine-card col-xs-4 col-md-4 col-lg-3'>
          <img src='public/social-media-icons/vine-logo.svg' alt='vine icon' />
          <h5>{props.social.vine ? nFormatter(props.social.vine.number) : 0}</h5>
        </div>
      </a>
      <a href={props.social.instagram ? props.social.instagram.url : null} target='blank'>
        <div className='instagram-card col-xs-4 col-md-4 col-lg-3'>
          <img src='public/social-media-icons/instagram-social-network-logo-of-photo-camera.svg' alt='instagram icon' />
          <h5>{props.social.instagram ? nFormatter(props.social.instagram.number) : 0}</h5>
        </div>
      </a>
      <a href={props.social.twitter ? props.social.twitter.url : null} target='blank'>
        <div className='twitter-card col-xs-4 col-md-4 col-lg-3'>
          <img src='public/social-media-icons/twitter-logo.svg' alt='twitter icon' />
          <h5>{props.social.twitter ? nFormatter(props.social.twitter.number) : 0}</h5>
        </div>
      </a>
    </div>
  </div>
)

SocialReach.propTypes = {
  social: object.isRequired,
  modalTrigger: func.isRequired
}

export default SocialReach
