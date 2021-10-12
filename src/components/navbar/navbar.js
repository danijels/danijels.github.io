import * as React from "react"
import "./navbar.scss"

const Navbar = (props) => {
	const children = props.nav.map(([title, href]) => <a href={href} key={title}>{title}</a>)

    return (
	    <header id='navbar'>
	      	{children}
	    </header>
  	)
}

export default Navbar