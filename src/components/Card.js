import React from 'react'

const Card = ({ name, email, id }) => {
	return (
		<article className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt="this z img" src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</article>
		);
}

export default Card;