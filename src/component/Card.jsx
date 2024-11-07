import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div className='Card'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/AcetoFive.JPG/1200px-AcetoFive.JPG' alt='cards' width= "260rem"
        style = {{border: "2px solid pink"}}/>
        <h1> {props.title} </h1>
        <p> {props.description} </p>
        </div>
    )
}

export default Card
