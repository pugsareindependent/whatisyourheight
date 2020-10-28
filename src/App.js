import logo from './logo.svg';
import './App.css';
import { React, Component, useState } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

class HeightInput extends Component {
  constructor(props) {
    super(props)
    this.state = { value: 130 }
  }

  handleChange = value => {
    const targetValue = value.currentTarget.value
    this.setState({ value: targetValue })
  }

  handleSubmit = () => {
    this.props.changeRoute(this.state.value)
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

  const [height, setHeight] = useState(0)

  return (
    <BrowserRouter>
      <main>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <HeightInput changeRoute={
                height => {
                  alert(height)
                  <Redirect  />
                }
              } />
            </Route>
            <Route path="/height">
              <h1>222</h1>
            </Route>
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
