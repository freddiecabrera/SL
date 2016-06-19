import React from 'react'
import styles from '../../public/styles/Modal.css'
const { func, bool, object } = React.PropTypes

const Modal = React.createClass({
  propTypes: {
    social_reach: object,
    data: object.isRequired,
    modalTrigger: func.isRequired,
    updateSocial: func
  },
  _map (obj, cb) {
    let result = []
    for(let key in obj) {
      result.push(cb(obj[key], key))
    }
    return result
  },
  log (som) {
    console.log(som);
  },
  handleFormSubmit (e) {
    e.preventDefault()
    let result = this.refs
    for(let key in this.refs) {
      this.refs[key] = this.refs[key].value
    }
    this.props.updateSocial('hello')
    console.log(result);
    this.props.modalTrigger(false)
  },
  render () {
    console.log('from the modal', this.refs);
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
                <div className="form-group">
                  <label for={prop + 'url'}>{prop} url</label>
                  <input ref={prop + 'Url'} type="text" className="form-control col-xs-5" id={prop + 'url'} defaultValue={item === null ? '' : item.url} />
                </div>
                <div className="form-group">
                  <label for={prop + 'followers'}>{prop} followers</label>
                  <input ref={prop + 'Followers'} type="text" className="form-control col-xs-8" id={prop + 'followers'} defaultValue={item === null ? '' : item.number} />
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
{/*<div className='row'>
<div class="form-group">
<label for="exampleInputEmail1">Email address</label>
<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
</div>
<h6 className='social-title'>YouTube</h6>
<div className='input-field col s8 push-s2 pull-s2'>
<input ref={'youtubeUrl'} value={this.props.data.social_reach.youtube.url} id='Link' type='text' className='validate' />
<label className='active' htmlFor='link'>Link</label>
</div>
<div className='input-field col s8 push-s2 pull-s2'>
<input ref={'youtubeFollowers'} value={this.props.data.social_reach.youtube.number} id='followers' type='text' className='validate' />
<label className='active' htmlFor='followers'> Followers</label>
</div>
</div>*/}
