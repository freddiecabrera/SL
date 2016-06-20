import React from 'react'
import styles from '../../public/styles/ProfileCard.css'
const { object } = React.PropTypes

const nFormatter = num => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  }
  return num
}

const ProfileCard = props => (
  <div className='col-xs-12 col-md-12 col-lg-5'>
    <div className='panel panel-default profile-card'>
      <div style={{textAlign: 'center'}} className='panel-body'>
        <img src={props.data.avatar} alt='avatar' className='circle card-avatar' />
        <h5 className='channel-name'>{props.data.channelname}</h5>
        <div>
          <h5>{nFormatter(props.data.subscribers)} <span className='creator-stats'>Subs</span></h5>
          <h5>{nFormatter(props.data.views)} <span className='creator-stats'>Views</span></h5>
          <h5>{nFormatter(props.data.video_count)} <span className='creator-stats'>Videos</span></h5>
        </div>
        <h6 className='channel-id'><span className='linked-badge'>Linked</span>{props.data.channelid}</h6>
      </div>
    </div>
  </div>
)

ProfileCard.propTypes = {
  data: object.isRequired
}

export default ProfileCard
