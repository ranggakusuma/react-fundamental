import React, { Component } from 'react'
import Radium from 'radium'

import './Person.css'

class Person extends Component {
  
  render () {
    const style = {
      '@media (min-width: 500px)': {
        width: '450px'
      }
    }
    return (
      <div className="Person" style={style}>
        <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text"  value={this.props.name} onChange={this.props.change} />
      </div>
    ) 
  }
}

export default Radium(Person)