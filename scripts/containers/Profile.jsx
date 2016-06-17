import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Loader from '../components/Loader'
import ProfileCard from '../components/ProfileCard'
import InfoCard from '../components/InfoCard'
import SocialReach from '../components/SocialReach'
import Modal from '../components/Modal'
const { object, func, bool } = React.PropTypes
import Chart from 'chart.js'
import styles from '../../public/styles/Profile.css'

const createChart = (chart, labels, label, data, color) => (
  new Chart(chart, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: label,
        data: data,
        backgroundColor: color,
        borderWidth: 1
      }]
    },
    options: {
      tooltips: {
        enabled: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  })
)

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
  componentDidUpdate () {
    const objToArray = (obj) => {
      let result = []
      for(let key in obj) {
        result.push(obj[key])
      }
      return result
    }

    let data
    const { profile, month } = this.props
    profile ? data = profile.earnings.slice(profile.earnings.length - month, profile.earnings.length) : null
    profile ? createChart(this.refs.age_groups, Object.keys(profile.ages), 'Age Groups', objToArray(profile.ages), ['green', 'red', 'blue', 'black', 'yellow', 'orange']) : null
    profile ? createChart(this.refs.gender, Object.keys(profile.gender), 'Genders', objToArray(profile.gender), ['green', 'red']) : null
    data ? createChart(this.refs.earnings, data.map(item => item.month), 'Earnings', data.map(item => item.earnings), data.map(item => 'blue')) : null
  },
  getInitialState:function(){
    return {selectValue:'Radish'};
 },
 handleChange:function(e){

   this.setState({selectValue:e.target.value})
   console.log(this.state.selectValue)
  },
  render () {
    const data = this.props.profile
    console.log(this.props)
    return (
      <div className='container'>
        {!data ? <Loader />
          : <div>
          <div className='row col s12'>
            <ProfileCard data={data} />
            <InfoCard details={this.props.details} showDetails={this.props.showDetails} data={data} />
            {this.props.details ? <SocialReach modalTrigger={this.props.modalTrigger} social={data.social_reach} /> : null}
          </div>

          {this.props.details ? <div className='col s12 row'>
            <div className='col s12 m12 l6'>
              <div className='card-panel'>
                <canvas ref={'age_groups'} height='400' width='400'></canvas>
              </div>
            </div>
            <div className='col s12 m12 l6'>
              <div className='card-panel'>
                <canvas ref={'gender'} height='400' width='400'></canvas>
              </div>
            </div>
            <div className='col s12'>
              <div className='card-panel'>
                <span className='btn graph-chips waves-effect waves-light blue accent-3' onClick={this.props.changeMonth.bind(null, 3)}>3 months</span>
                <span className='btn graph-chips waves-effect waves-light blue accent-3' onClick={this.props.changeMonth.bind(null, 6)}>6 months</span>
                <span className='btn graph-chips waves-effect waves-light blue accent-3' onClick={this.props.changeMonth.bind(null, 9)}>9 months</span>
                <div className='title-container'>
                  <h5>Earning's in the last {this.props.month} months</h5>
                </div>
                <canvas ref={'earnings'} height='400' width='400'></canvas>
              </div>
            </div>
          </div> : null}
          {this.props.modalOn ? <Modal data={data} modalTrigger={this.props.modalTrigger}  /> : null}
        </div>}
      </div>
    )
  }
})

const mapStateToProps = state => ({
  profile: state.ProfileReducer.profile,
  details: state.UIReducer.show,
  month: state.ProfileReducer.month,
  modalOn: state.UIReducer.modalOn
})

export default connect(mapStateToProps, actions)(Profile)
