/* eslint-disable */
import { useState, useRef, useImperativeHandle } from 'react'
import {Link,
BrowserRouter as Router,
Routes, Route,
useMatch
} from 'react-router-dom'


const Menu = ({anecdotes, anecdote, addNew, addNewRef}) => {
  const padding = {
    paddingRight: 5
  }
  return (
    <div>
      
        <div>
          <Link style = {padding} to = "/">anecdotes</Link>
          <Link style = {padding} to = "/about">about</Link>
          <Link style = {padding} to = "/create">create new</Link>
        </div>
      

        <Routes>
          <Route path = '/anecdotes/:id' element = {<Anecdote anecdote = {anecdote} />} />
          <Route path = '/' element = {<AnecdoteList anecdotes = {anecdotes} />} />
          <Route path = '/about' element = {<About />} />
          <Route path = '/create' element = {<CreateNew anecdotes = {anecdotes} addNew={addNew} />} />
        </Routes>
      
      <Footer />
    </div>
  )
}


const Anecdote = ({anecdote}) => {
  const padding = {
    padding: 5
  }
  console.log('anecdote', anecdote)
	return(
		<div>
			<h2 style = {padding}> {anecdote.content} by {anecdote.author}</h2>
      <div style = {padding}> has {anecdote.votes} votes</div>
			<div style = {padding}> for more info see <a href = "{anecdote.info}">{anecdote.info}</a></div>
			
		</div>
	)
}



const AnecdoteList = ({ anecdotes }) => {
  console.log('anecdotes ', anecdotes)
  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map(anecdote => 
          <li key={anecdote.id} >
            <Link to ={`/anecdotes/${anecdote.id}`}> {anecdote.content}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}

const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>

    <em>An anecdote is a brief, revealing account of an individual person or an incident.
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is "a story with a point."</em>

    <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
  </div>
)

const Footer = () => (
  <div>
    Anecdote app for <a href='https://fullstackopen.com/'>Full Stack Open</a>.

    See <a href='https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js'>https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js</a> for the source code.
  </div>
)

const CreateNew = ({addNew, anecdotes}) => {
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [info, setInfo] = useState('')
  
  console.log('createnew anecdotes', anecdotes)

  const handleSubmit = (e) => {
    console.log('createnew addNew', e.addNew)
    console.log('handleSub props')
    console.log('content', content)
    console.log('auth', author)
    console.log('info', info)
    e.preventDefault()
    const addAnecdote = () => {
      addNew({
        content,
        author,
        info,
        votes: 0
      })
    }
    addAnecdote()
    console.log('dd')
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit} >
        <div>
          content
          <input name='content' value={content} 
          onChange={(e) => setContent(e.target.value)} />
        </div>
        <div>
          author
          <input name='author' value={author} 
          onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          url for more info
          <input name='info' value={info} onChange={(e)=> setInfo(e.target.value)} />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )

}



const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  let anecdote2 = {
    content : 'asd',
    author : 'das',
    info: 'fwe',
    votes: 0
  }

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    console.log('addnew anec', anecdote)
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
    return anecdote;
  }

 
  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  const match = useMatch('/anecdotes/:id')
  console.log('match', match)
  console.log('anecdotes din app', anecdotes)
  
  const anecdote = match 
    ? anecdotes.find(anecdote => anecdote.id === Number(match.params.id))
    : null
  
  console.log('anecdote din app', anecdote)
  return (

    
    <div>
      <h1>Software anecdotes</h1>
      <Menu anecdotes = {anecdotes} anecdote = {anecdote}/>
    </div>
    
  )
}



export default App
