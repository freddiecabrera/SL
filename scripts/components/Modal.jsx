import React from 'react'
import styles from '../../public/styles/Modal.css'

const Modal = props => (
  <div className='row'>
    <div className='col s8 m5 l8'>
      <div className='card-panel modal'>
        <div style={{textAlign: 'center'}}>
          <h5 className='social-reach'>Social Reach</h5>
        </div>
        <div className='row'>
          <h6 className='social-title'>YouTube</h6>
          <div className='input-field col s8 push-s2 pull-s2'>
            <input value={props.data.social_reach.youtube.url} id='Link' type='text' className='validate' />
            <label className='active' htmlFor='link'>Link</label>
          </div>
          <div className='input-field col s8 push-s2 pull-s2'>
            <input value={props.data.social_reach.youtube.number} id='followers' type='text' className='validate' />
            <label className='active' htmlFor='followers'> Followers</label>
          </div>
        </div>
        <div className='divider'></div>
        <div className='buttons-container'>
        <span onClick={props.modalTrigger.bind(null, false)} className='btn waves-effect waves-light red cancel-button'>cancel</span>
        <span className='btn waves-effect waves-light blue accent-3'>submit</span>
        </div>
      </div>
    </div>
  </div>
)

export default Modal
