import * as React from "react"
import "./portfolio.scss"
//The board you want is passed as a child to the Portfolio component
const Portfolio = (props) => {
    const categories = props.categories.map(([title, id, handleClick]) => {
      return <li key={id}>
                <button id={id} onClick={handleClick}>
                    {title}
                </button>
            </li>
    });

    return (
        <section id='portfolio'>
            <h2 id='portf-title'>{props.title}</h2>
            <div id='portf-content'>
                <ul id='categories'>
                    {categories}
                </ul>
                {props.children}   
            </div>
        </section>
    )
}

export default Portfolio