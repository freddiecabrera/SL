import React from 'react'
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
  <div className='row col l5 m12 s12'>
      <div className='card-panel profile-card'>
        <div style={{textAlign: 'center'}}>
          <img src={props.data.avatar} alt='avatar' className='circle card-avatar' />
          <h5 className='channel-name'>{props.data.channelname}</h5>
          <div>
            <h5>{nFormatter(props.data.subscribers)} <span className='creator-stats'>Subs</span></h5>
            <h5>{nFormatter(props.data.views)} <span className='creator-stats'>Views</span></h5>
            <h5>{nFormatter(props.data.video_count)} <span className='creator-stats'>Videos</span></h5>
          </div>
          <div className='divider'></div>
            <h6 className='channel-id'><span className='linked-badge'>Linked</span>{props.data.channelid}</h6>
        </div>
      </div>
  </div>
)

ProfileCard.propTypes = {
  data: object.isRequired
}

export default ProfileCard
