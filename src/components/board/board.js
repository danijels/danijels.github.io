import * as React from "react"
import "./board.scss"

const Board = (props) => (
    <div id='board'>
    	<div id='board-info'>
	    	<h3>{props.text.title}</h3>
	    	<p>{props.text.description}</p>
	    </div>
      	{props.children}
    </div>
)

export default Board