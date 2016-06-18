import React from 'react'
import styles from '../../public/styles/InfoCard.css'
const { object, func, bool } = React.PropTypes

const InfoCard = props => (
  <div className='col-lg-7 col-md-12 col-xs-12 panel panel-default info-card'>
    <div className='panel-body'>
      <ul className='list-group'>
        <li className='list-group-item avatar'>
          <i className='material-icons circle'>network_check</i>
          <span className='title'>Network:</span>
          <p>{props.data.network}</p>
        </li>
        <li className='list-group-item avatar'>
          <i className='material-icons circle'>account_circle</i>
          <span className='title'>Owner:</span>
          <p>{props.data.owner}</p>
        </li>
        <li className='list-group-item avatar'>
          <i className='material-icons circle'>attach_money</i>
          <span className='title'>Commission:</span>
          <p>{props.data.commission}</p>
        </li>
        <li className='list-group-item avatar'>
          <i className='material-icons circle'>date_range</i>
          <span className='title'>Joined:</span>
          <p>{props.data.joined}</p>
        </li>
        <li className='list-group-item avatar'>
          <i className='material-icons circle'>storage</i>
          <span className='title'>Category:</span>
          <p>{props.data.category}</p>
        </li>
        <li className='list-group-item avatar'>
          <i className='material-icons circle'>location_on</i>
          <span className='title'>Country:</span>
          <p>{props.data.country_id}</p>
        </li>
      </ul>
      <div className='button-container'>
      <a onClick={props.showDetails.bind(null, !props.details)}>
      Details
      </a>
      </div>
    </div>
  </div>
)

InfoCard.propTypes = {
  data: object.isRequired,
  showDetails: func.isRequired,
  details: bool.isRequired
}

export default InfoCard
