import * as React from "react"
import "./footer.scss"

const Footer = (props) => {
	const fields = props.fields.map((field, i) => {
		return <div key={i} className='contact-field'>{field}</div>
	});

	return (
		<footer id='contact'>
			<h2>{props.title}</h2>
			<div id='fields'>
				{fields}
			</div>
		</footer>
	)
}

export default Footer