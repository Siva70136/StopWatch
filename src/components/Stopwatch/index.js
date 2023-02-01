// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {time: 0, isStop: true}

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  getElapsedSecondsInTimeFormat = () => {
    const {time} = this.state

    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  incrementInSeconds = () => {
    this.setState(prevState => ({
      time: prevState.time + 1,
    }))
  }

  onStart = () => {
    this.intervalId = setInterval(this.incrementInSeconds, 1000)
    this.setState({
      isStop: false,
    })
  }

  onReset = () => {
    clearInterval(this.intervalId)
    this.setState({isStop: true, time: 0})
  }

  onStop = () => {
    clearInterval(this.intervalId)
    this.setState(prevState => ({
      isStop: !prevState.isStop,
    }))
  }

  render() {
    const {time, isStop} = this.state

    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="head">Stopwatch</h1>
          <div className="watch-container">
            <div className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="watch"
              />
              <p className="desc">Timer</p>
            </div>
            <h1 className="timer">{this.getElapsedSecondsInTimeFormat()}</h1>
            <div className="buttons-container">
              <button
                className="start button"
                type="button"
                onClick={this.onStart}
              >
                start
              </button>
              <button
                className="stop button"
                type="button"
                onClick={this.onStop}
              >
                stop
              </button>
              <button
                className="reset button"
                type="button"
                onClick={this.onReset}
              >
                reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
