import React, { Component } from 'react'
import moment from 'moment'
import TitleOnly from './TitleOnly'
import CountdownDisplay from './CountdownDisplay'
import './App.css'

const config = {
  times: [
    {
      endTime: '07:45:00',
      name: 'Morning Chores',
    },
    {
      endTime: '15:30:00',
      name: 'Afternoon Chores',
    },
    {
      endTime: '18:55:00',
      name: 'Nighttime Chores',
    },
  ],
  countdownDuration: 30 * 60 * 1000,
}

function getTimeRemaining(endtime){
  let today = new Date()
  let tm = moment()
  let t = Date.parse(tm.format('YYYY-MM-DD') + 'T' + endtime + '-0' + (today.getTimezoneOffset() / 60) + ':00') - today
  let seconds = Math.floor( (t/1000) % 60 )
  let minutes = Math.floor( (t/1000/60) % 60 )
  let hours = Math.floor( (t/(1000*60*60)) % 24 )
  let days = Math.floor( t/(1000*60*60*24) )
  
  return {
    total: t,
    days,
    hours,
    minutes,
    seconds
  }
}

class App extends Component {
  constructor(props) {
    super(props)

    this.tick = this.tick.bind(this)
  }

  componentWillMount() {
    setInterval(this.tick, 500)
  }

  tick() {
    this.forceUpdate()
  }

  render() {
    let displayEl

    // Find relevant time slot
    const upcomings = config.times.filter(slot => getTimeRemaining(slot.endTime).total > 0)

    if (upcomings.length > 0) {
      const thisSlot = upcomings[0]
      const remaining = getTimeRemaining(thisSlot.endTime)

      if (remaining.total > config.countdownDuration) {
        displayEl = <TitleOnly title={`Next Up: ${thisSlot.name}`} />
      } else {
        displayEl =<CountdownDisplay
          slotName={thisSlot.name}
          remaining={remaining}
          countdownDuration={config.countdownDuration}
        />
      }
    } else {
      displayEl = <TitleOnly title="Done for the day!" />
    }

    return (
      <div className="App">
        {displayEl}
      </div>
    );
  }
}

export default App;
