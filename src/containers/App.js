import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Radium, {StyleRoot} from 'radium'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor() {
    super()
    this.state = {
      persons: [
        { id: 'wjjajd1',name: 'Rangga', age: 22 },
        { id: 'wjjajd2',name: 'kusuma', age: 23 },
        { id: 'wjjajd3',name: 'shanti', age: 23 }
      ],
      showPersons: false
    }
  }

  
  showPersonHandler = () => {
    // console.log('clicked')
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler = (index) => {
    // console.log(index, 'delete handler')
    const persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({
      persons: persons
    })
  }
  
  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id = id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log('this is should component update')
  //   let a = nextState.persons[0]
  //   let b = {id: "wjjajd1", name: "Rangga", age: 22}
  //   console.log(a === b)
  //   console.log(a)
  //   return true
  // }

  render() {


    let persons = null 

    if (this.state.showPersons) {
      persons = 
        <Persons persons={this.state.persons} 
          clicked={this.deletePersonHandler} 
          changed={this.changeNameHandler}/>
    }

    

    return (
      <StyleRoot>
        <div className="App">
          <Cockpit
          appTitle={this.props.title} 
          persons={this.state.persons} 
          clicked={this.showPersonHandler}
          showPersons={this.state.showPersons}/>
          {/* <h1>Test project React</h1>
          <p className={classes.join(' ')}>This is some paragraph</p>
          <button style={style} onClick={this.showPersonHandler}>Show persons</button> */}
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
