import * as React from "react"
import "./pin.scss"

const Pin = (props) => {
    const children = props.links.map(([title, href]) => <a href={href} key={title}>{title}</a>);
    return (
        <div 
            className='pin'
            style={{backgroundImage: `url(${props.photo})`}}
        >
            <div className='top'>
                <h3 className='pin-title'>{props.title}</h3>
                <div 
                    className='overlay'
                    style={{}}
                >
                    {children}
                </div>
            </div>
            <p>
                {props.description}
            </p>
            <div className='stack'>
                {props.logos}
            </div>
        </div>
    )
}

export default Pin

