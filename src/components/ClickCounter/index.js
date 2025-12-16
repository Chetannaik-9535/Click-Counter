// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="Clickbutton-background-container">
        <h1 className="heading">The Button has been clicked {count} times.</h1>
        <p className="desctiption">Click the button to increase the count!</p>
        <button className="button" onClick={this.onIncrement}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter

/*
  git config --global user.email naikc8468@gmail.com
    git config --global user.name Chetannaik-9535
     git remote add origin https://github.com/Chetannaik-9535/Click-Counter.git
*/