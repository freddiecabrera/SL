import React from 'react'
const { element } = React.PropTypes

const Main = props => (
  <div>{props.children}</div>
)

Main.propTypes = {
  children: element.isRequired
}

export default Main
