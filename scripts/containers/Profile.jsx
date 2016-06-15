import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Loader from '../components/Loader'
import ProfileCard from '../components/ProfileCard'
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
          : <div><ProfileCard data={data} /></div>}
      </div>
    )
  }
})

const mapStateToProps = state => ({
  profile: state.ProfileReducer.profile
})

export default connect(mapStateToProps, actions)(Profile)
