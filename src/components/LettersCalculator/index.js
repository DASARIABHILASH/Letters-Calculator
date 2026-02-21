// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onC = event => {
    const j = event.target.value
    this.setState({count: j.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="div1">
        <div className="div2">
          <div className="div3">
            <h1 className="h1">Calculate the Letters you enter</h1>
            <label className="p1" htmlFor="phraseText">
              Enter the phrase
            </label>
            <input
              className="input"
              id="phraseText"
              type="text"
              placeholder="Enter the phrase"
              onChange={this.onC}
            />
            <p type="button" className="button">
              No.of letters: {count}
            </p>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="logo"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
