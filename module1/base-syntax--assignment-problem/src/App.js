import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "superWiley",
    };
    
  };
  newUserHandler = (event) => {
    this.setState({
      username: event.target.value
    });
    console.log(this.state.username)
  };
  
  render() {
    return (
      <div className="App">
        <UserInput 
          changed={this.newUserHandler}
          currentName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="Emma" />
      </div>

    );
  }
}

export default App;
