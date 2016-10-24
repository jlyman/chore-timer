import React, { PropTypes } from 'react'
import './TitleOnly.css'

const TitleOnly = (props) => (
	<div className="centering">
		<h1 className="centered-title" onClick={props.titleTapHandler}>{props.title}</h1>
	</div>
)

TitleOnly.props = {
	title: PropTypes.string.isRequired,
	titleTapHandler: PropTypes.func,
}

export default TitleOnly
