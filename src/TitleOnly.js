import React, { PropTypes } from 'react'
import './TitleOnly.css'

const TitleOnly = (props) => (
	<div className="centering">
		<h1 className="centered-title">{props.title}</h1>
	</div>
)

TitleOnly.props = {
	title: PropTypes.string.isRequired,
}

export default TitleOnly
