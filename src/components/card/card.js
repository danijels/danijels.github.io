import * as React from "react"
import "./card.scss"

const Card = (props) => {
	return (
	<div id='card-wrapper'>
		<div 
			id='card'
		>	
			<div id='front'>
				<div id='text'>
					<h1 id='card-title'>{props.title}</h1>
					<p id='card-text'>{props.text}</p>
				</div>				
				<img id='avatar' src={props.img} alt={props.alt}/>
			</div>
			<div id='about'>
				{props.back}
			</div>
		</div>
	</div>
)}

export default Card