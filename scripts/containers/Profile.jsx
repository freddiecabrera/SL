import React from 'react'
import styles from '../../public/styles/ProfileCard.css'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Loader from '../components/Loader'
const { object, func, bool } = React.PropTypes

const Profile = React.createClass({
  propTypes: {
    profile: object.isRequired,
    getProfile: func.isRequired,
  },
  componentWillMount () {
    this.props.getProfile()
  },
  render () {
    const data = this.props.profile
    console.log(this.props)
    return (
      <div className='container'>
        {!data ? <Loader />
          : <div className='row'>
            <div className='col s12 m12 l12'>
              <div className='card-panel info-card'>
                <div style={{textAlign: 'center'}}>
                  <img src={data.avatar} alt='avatar' className='circle card-avatar' />
                  <h5 className='channel-name'>{data.channelname}</h5>
                  <div>
                    <h5>{data.subscribers} <span>Subs</span></h5>
                    <h5>{data.views} <span>Views</span></h5>
                    <h5>{data.video_count} <span>Videos</span></h5>
                  </div>
                </div>
                <h6>{data.network}</h6>
                <h6>{data.joined}</h6>
                <h6>{data.owner}</h6>
                <h6>{data.commission}</h6>
                <h6>{data.category}</h6>
                <h6>{data.country}</h6>
                <h6>{data.channelid}</h6>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
})

const mapStateToProps = state => ({
  profile: state.ProfileReducer.profile
})

export default connect(mapStateToProps, actions)(Profile)
