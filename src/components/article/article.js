import * as React from 'react'
import "./article.scss"

const Article = (props) => {
	let photos;
	if (props.photos) {
		photos = props.photos.map(([href, alt], i) => {
			return <img key={i} src={href} alt={alt} />
		})
	} else photos = props.photos;

	return (
		<article id={props.id}>
			<div className='main'>
				{props.left}
				<div id='photos'>
					{photos}
				</div>
			</div>
			<aside>
				{props.right}
			</aside>
	    </article>
	)
}

export default Article