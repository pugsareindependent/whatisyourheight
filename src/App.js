import logo from './logo.svg';
import './App.css';
import React from 'react'

class HeightInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 130 }
  }

  handleChange = value => {
    const targetValue = value.currentTarget.value
    this.setState({ value: targetValue })
  }

  handleSubmit = event => {
    console.log(event.data)
  }

  render() {
    return(
      <div className="inputContainer">
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Height:
          <input type="number" placeholder="input your height in cm" onChange={this.handleChange.bind(this)} />
        </label>
        <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
        <HeightInput />
    </div>
  );
}

export default App;
