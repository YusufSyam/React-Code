import React from 'react';
import Card from '../components/Card';

export interface ICardList {}

const CardList: React.FC<ICardList> = ({ }) => {
  return (
    <div className='card-list'>
      <Card title='Card 1' content='lorem ipsum dolor sit amet' />
      <Card title='Card 2' content='lorem ipsum dolor sit amet' />
      <Card title='Card 3' content='lorem ipsum dolor sit amet' />
      <Card title='Card 4' content='lorem ipsum dolor sit amet' />
      <Card title='Card 5 ' content='lorem ipsum dolor sit amet' />
      <Card title='Card 6' content='lorem ipsum dolor sit amet' />
      <Card title='Card 7 ' content='lorem ipsum dolor sit amet' />
      <Card title='Card 8 ' content='lorem ipsum dolor sit amet' />
    </div>
  )
}
export default CardList;