import React from 'react'
import Radium from 'radium'

const cockpit = (props) => {
  
  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  }

  // console.log(props.showPersons,' isisansiai')
  if (props.showPersons) {
    style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
  }

  const classes = []

  if (props.persons.length <= 2) {
    classes.push('red')
  }
  if (props.persons.length <= 1) {
    classes.push('bold')
  }
  
  return (
    <div>
    <h1>{props.appTitle}</h1>
      <p className={classes.join(' ')}>This is some paragraph</p>
      <button style={style} onClick={props.clicked}>Show persons</button>
    </div>
  )
}

export default Radium(cockpit)