import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Loader from '../components/Loader'
import ProfileCard from '../components/ProfileCard'
import InfoCard from '../components/InfoCard'
import SocialReach from '../components/SocialReach'
import Modal from '../components/Modal'
const { object, func, bool, string, number } = React.PropTypes
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
    profile: object,
    getProfile: func.isRequired,
    showDetails: func.isRequired,
    details: bool,
    month: number,
    modalTrigger: func,
    changeMonth: func.isRequired,
    modalOn: bool,
    updateSocial: func.isRequired

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
  log (what) {
    console.log('logged', what)
  },
  render () {
    console.log('from the Profile', this.props)
    const data = this.props.profile
    return (
      <div className='container'>
        {!data ? <Loader />
          : <div>
          <div className='col-xs-12'>
            <div className='row'>
              <ProfileCard data={data} />
              <InfoCard details={this.props.details} showDetails={this.props.showDetails} data={data} />
              {this.props.details ? <SocialReach modalTrigger={this.props.modalTrigger} social={data.social_reach} /> : null}
            </div>
          </div>
          {this.props.details ? <div className='col-xs12 row'>
            <div className='col-xs-12 col-md-12 col-lg-6'>
              <div className='panel panel-default'>
                <div className='panel-body'>
                  <canvas ref={'age_groups'} height='400' width='400'></canvas>
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-md-12 col-lg-6'>
              <div className='panel panel-default'>
                <div className='panel-body'>
                  <canvas ref={'gender'} height='400' width='400'></canvas>
                </div>
              </div>
            </div>
            <div className='col-xs-12'>
              <div className='panel panel-default'>
                <div className='panel-body'>
                  <div className='title-container'>
                    <h5>Earning's in the last {this.props.month} months</h5>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Months <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                      {data.earnings.map((item, index) => <li onClick={this.props.changeMonth.bind(null, index + 1)} key={index + 1}><a>{index + 1}</a></li> )}
                    </ul>
                  </div>
                  <canvas ref={'earnings'} height='400' width='400'></canvas>
                </div>
              </div>
            </div>
          </div> : null}
          {this.props.modalOn ? <Modal ref={'modal'} updateSocial={this.props.updateSocial} data={data} modalTrigger={this.props.modalTrigger}  /> : null}
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
