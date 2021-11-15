import React from 'react'
import './Card.css'

function Card(props) {
    const { content, title, url } = props;
    return (
        <div className="card text-center shadow">
            <div className="card-body text-dark">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">{content}</p>
                <a href={url} className="btn btn-outline-success" target='_blank' rel='noreferrer'>Read More</a>
            </div>
        </div>
    )
}

export default Card
