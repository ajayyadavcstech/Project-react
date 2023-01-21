import React from 'react'
import './Card.css'

export default function Card(props) {
  return (
    <div className='card'>
        <h2>{props.title}</h2>
        <div className="card-body">{props.body}</div>
        <div className="reaction">{props.reaction}</div>
        <div className="tag">{
            props.tag.map((value)=>(<span>{value}</span>))
        }</div>
    </div>
  )
}
