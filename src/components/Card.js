import React from 'react'
import '../styles/card.css'

const Card = (props) => {

    return (
        <div className="container">
            <div className="card">
                <div className='image'>
                    <img src={props.show.img} alt="pic"></img>
                </div>
                <div className="info">
                    <h2>{props.show.name}</h2>
                </div>
                <div className="btn">
                    <button> <a href={props.show.link} target="blank"> Watch Now</a> </button>

                </div>
            </div>
        </div>
    )
}

export default Card
