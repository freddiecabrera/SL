import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Loader from '../components/Loader'
import ProfileCard from '../components/ProfileCard'
import InfoCard from '../components/InfoCard'
import SocialReach from '../components/SocialReach'
const { object, func, bool } = React.PropTypes

const Profile = React.createClass({
  propTypes: {
    profile: object.isRequired,
    getProfile: func.isRequired,
    showDetails: func.isRequired,
    details: bool.isRequired
  },
  componentWillMount () {
    this.props.getProfile()
    this.props.showDetails(false)
  },
  render () {
    const data = this.props.profile
    console.log(this.props)
    return (
      <div className='container'>
        {!data ? <Loader />
          : <div className='row col s12'>
            <ProfileCard data={data} />
            <InfoCard details={this.props.details} showDetails={this.props.showDetails} data={data} />
            <SocialReach social={data.social_reach} />
          </div>}
      </div>
    )
  }
})

const mapStateToProps = state => ({
  profile: state.ProfileReducer.profile,
  details: state.UIReducer.show
})

export default connect(mapStateToProps, actions)(Profile)
