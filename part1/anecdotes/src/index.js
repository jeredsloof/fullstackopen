import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Heading = ({ text }) => <h1>{text}</h1>
const Button = ({ onClick, text}) => <button onClick={onClick}>{text}</button>
const VoteCounter = ({ votes }) => <p>has {votes} votes</p>
const MostVotes = ({ anecdote }) => <p>{anecdote}</p>

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [voteCount, setVoteCount] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const mostVotes = Math.max(...votes)
  const anecdote = anecdotes[votes.indexOf(mostVotes)]
  

  const random = () => {
    let randomNumber = Math.floor(Math.random() * Math.floor(anecdotes.length))
    setSelected(randomNumber)
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }



  return (
    <div>
      <Heading text='Anecdote of the day' />
      {props.anecdotes[selected]} <br/>
      <VoteCounter votes={votes[selected]} />
      <Button onClick={vote} text='vote' />
      <Button onClick={random} text='next anecdote' />

      <Heading text='Anecdote with most votes' />
      <MostVotes anecdote={anecdote} />
      <VoteCounter votes={mostVotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)