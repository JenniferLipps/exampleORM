import React, { Component } from 'react';
import './Home.scss';
import valueRequests from '../../Components/apiRequests/valueRequests';

class Home extends Component {

  state = {
    displayValues: []
  }

  getValues = () => {
    valueRequests.getValues().then((values) => {
      let myNewValues = [...values];
      this.setState({displayValues: myNewValues})
    }).catch((error) => {
      console.log("broken", error)
    })
  }

  render () {
    const testText = this.props.testText;
    return (
      <div className="Home">
          <h1 className="testTarget">{testText}</h1>
          <button onClick = {this.getValues}>Click Me</button>
      </div>
    );
  }
}

export default Home;