import React, { PropTypes } from 'react'
import CountdownChart from './CountdownChart'
import './CountdownDisplay.css'

const CountdownDisplay = ({slotName, remaining, countdownDuration}) => {
	let secondsTimer = remaining.minutes <= 3 ? `(${remaining.seconds} seconds)` : null

  return (
  	<div className="countdown-display">
	    <h1 className="slot-name">{slotName}</h1>

	    <div className="countdowns">
	    	<div className="countdown-text">
		      <h2 className="timer-minutes">{remaining.minutes} mins</h2>
		      <h3 className="timer-seconds">{secondsTimer}</h3>
	      </div>

	      <div className="countdown-chart">
	      	<CountdownChart remaining={remaining} countdownDuration={countdownDuration} />
	      </div>
	    </div>
    </div>
  );
}

CountdownDisplay.propTypes = {
	slotName: PropTypes.string.isRequired,
	remaining: PropTypes.object.isRequired,
	countdownDuration: PropTypes.number.isRequired,
}

export default CountdownDisplay
