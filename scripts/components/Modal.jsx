import React from 'react'
import styles from '../../public/styles/Modal.css'
const { func, object } = React.PropTypes

const Modal = React.createClass({
  propTypes: {
    social_reach: object,
    data: object.isRequired,
    modalTrigger: func.isRequired,
    updateSocial: func
  },
  _map (obj, cb) {
    let result = []
    for (let key in obj) {
      result.push(cb(obj[key], key))
    }
    return result
  },
  handleFormSubmit (e) {
    e.preventDefault()
    let result = this.refs
    for (let key in this.refs) {
      this.refs[key] = this.refs[key].value
    }
    this.props.updateSocial(result)
    this.props.modalTrigger(false)
  },
  render () {
    return (
      <div className='row'>
        <div className='col s8 m5 l8'>
          <div className='modal'>
            <div style={{textAlign: 'center'}} className=''>
              <h5 className='social-reach'>Social Reach</h5>
            </div>
            <form onSubmit={this.handleFormSubmit}>
              {this._map(this.props.data.social_reach, (item, prop) => (
                <div key={Math.random()}>
                  <div className='form-group'>
                    <label htmlFor={prop + 'url'}>{prop} url</label>
                    <input ref={prop + 'Url'} type='text' className='form-control col-xs-5' id={prop + 'url'} defaultValue={item === null ? '' : item.url} />
                  </div>
                  <div className='form-group'>
                    <label htmlFor={prop + 'followers'}>{prop} followers</label>
                    <input ref={prop + 'Followers'} type='text' className='form-control col-xs-8' id={prop + 'followers'} defaultValue={item === null ? '' : item.number} />
                  </div>
                </div>
              ))}
              <div className='buttons-container'>
                <span onClick={this.props.modalTrigger.bind(null, false)} className='btn btn-danger cancel-button'>cancel</span>
                <button type='submit' className='btn btn-primary submit-button'>submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
})

export default Modal
