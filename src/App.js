import logo from './logo.svg';
import './App.css';
import { React, Component, useState } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Helmet }from 'react-helmet'
// import { Redirect } from 'react-router

const ResultInput = props => {
  return (
    <div>
      <h1>Congratulations, you're {props.height} cm tall.</h1>
      <button onClick={props.onclick}>OMG! I need to tweet this #genius!</button>
    </div>
  )
}

const HeightInput = props => {

  return(
    <div className="inputContainer">
      <label>
        Input your height in cm?
        <input type="text" placeholder="Only use numbers" onChange={props.handleChange} />
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
      step: 1,
      title: "How tall are you?",
      description: "Yo this app is thight brah!"
    }
  }

  handleChange = value => {
    const targetValue = value.currentTarget.value
    this.setState({ value: targetValue })
  }

  handleSubmit = () => {
    this.setState({
      step: 2,
      title: `Yo, just found out that I'm ${this.state.value} cm tall, how tall are you?`
    })


  }

  shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=I%20Am%20${this.state.value}%20cm%20tall!%20Thank%20you%20https://how-tall-am-i.herokuapp.com/%20#independentpug`,
      '_blank'
    )
  }

  render() {
    const { step, value } = this.state
    return(
      <div>
        <Helmet>
          <title>{this.state.title}</title>
          <description>{this.state.description}</description>
          <meta name="og:title" content={this.state.title} />
          <meta name="og:description" content={this.state.description} />
        </Helmet>
        <div className="centerContainer">
          {step === 1 ? <HeightInput handleChange={this.handleChange} onClick={this.handleSubmit}/> : null }
          {step === 2 ? <ResultInput height={value} onClick={this.shareOnTwitter} /> : null}
        </div>
      </div>
    )
  }
}

export default App;
