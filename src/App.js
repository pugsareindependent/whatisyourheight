import logo from './logo.svg';
import './App.css';
import { React, Component, useState } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// import { Redirect } from 'react-router

const ResultInput = props => {
  return (
    <div className="centerContainer">
      <h1>Congratulations, you're {props.height} cm tall.</h1>
    </div>
  )
}

const HeightInput = props => {

  return(
    <div className="inputContainer">
      <label>
        Height:
        <input type="number" placeholder="input your height in cm" onChange={props.handleChange} />
      </label>
      <button onClick={props.onClick}>Submit</button>
    </div>
  )
}



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 130,
      step: 1
    }
  }

  handleChange = value => {
    const targetValue = value.currentTarget.value
    this.setState({ value: targetValue })
  }

  handleSubmit = () => {
    this.setState({
      step: 2
    })
  }

  render() {
    const { step, value } = this.state
    return(
      <div className="centerObject">
        {step === 1 ? <HeightInput handleChange={this.handleChange} onClick={this.handleSubmit}/> : null }
        {step === 2 ? <ResultInput height={value} /> : null}

      </div>
    )
  }
}

export default App;
