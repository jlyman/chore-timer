import React, { PropTypes } from 'react'
import PieChart from 'react-simple-pie-chart'

const CountdownChart = ({remaining, countdownDuration}) => {
	let color = '#1DC80D'
  if (remaining.minutes < 30) color = '#FDC70D'
  if (remaining.minutes < 10) color = '#f00'

	return (
		<PieChart
      slices={[
        {
          color,
          value: remaining.total,
        },
        {
          color: '#F7F7F7',
          value: countdownDuration-remaining.total,
        },
      ]}
    />
	)
}

CountdownChart.propTypes = {
	remaining: PropTypes.object.isRequired,
	countdownDuration: PropTypes.number.isRequired,
}

export default CountdownChart
