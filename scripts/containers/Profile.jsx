import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Loader from '../components/Loader'
import ProfileCard from '../components/ProfileCard'
import InfoCard from '../components/InfoCard'
import styles from '../../public/styles/Profile.css'
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
          : <div className='row col s12'>
            <ProfileCard data={data} />
            <InfoCard data={data} />
          </div>}
      </div>
    )
  }
})

const mapStateToProps = state => ({
  profile: state.ProfileReducer.profile
})

export default connect(mapStateToProps, actions)(Profile)
