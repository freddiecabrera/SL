import React from 'react'
import styles from '../../public/styles/InfoCard.css'
const { object, func, bool } = React.PropTypes

const InfoCard = props => (
  <div className='row col l7 m12 s12 info-card'>
    <ul className='collection z-depth-1'>
      <li className='collection-item avatar'>
        <i className='material-icons circle'>network_check</i>
        <span className='title'>Network:</span>
        <p>{props.data.network}</p>
      </li>
      <li className='collection-item avatar'>
        <i className='material-icons circle'>account_circle</i>
        <span className='title'>Owner:</span>
        <p>{props.data.owner}</p>
      </li>
      <li className='collection-item avatar'>
        <i className='material-icons circle'>attach_money</i>
        <span className='title'>Commission:</span>
        <p>{props.data.commission}</p>
      </li>
      <li className='collection-item avatar'>
        <i className='material-icons circle'>date_range</i>
        <span className='title'>Joined:</span>
        <p>{props.data.joined}</p>
      </li>
      <li className='collection-item avatar'>
        <i className='material-icons circle'>storage</i>
        <span className='title'>Category:</span>
        <p>{props.data.category}</p>
      </li>
      <li className='collection-item avatar'>
        <i className='material-icons circle'>location_on</i>
        <span className='title'>Country:</span>
        <p>{props.data.country_id}</p>
      </li>
    </ul>
    <div className='button-container'>
      <a className="btn-floating btn-large waves-effect waves-light blue accent-3" onClick={props.showDetails.bind(null, !props.details)}>
        <i className="material-icons">details</i>
      </a>
    </div>
  </div>
)

InfoCard.propTypes = {
  data: object.isRequired,
  showDetails: func.isRequired,
  details: bool.isRequired
}

export default InfoCard
