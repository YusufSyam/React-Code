import React from 'react';

export interface ICard {
  title: string,
  content: string
}

const Card: React.FC<ICard> = ({ title, content }) => {
    return (
        <div className='card' >
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
    )
}
export default Card;