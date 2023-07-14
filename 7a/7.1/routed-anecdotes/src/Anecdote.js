const Anecdote = ({anecdote}) => {
	return(
		<div>
			<h2>{anecdote.content}</h2>
			<div>{anecdote.user}</div>
			
		</div>
	)
}

export default Anecdote
