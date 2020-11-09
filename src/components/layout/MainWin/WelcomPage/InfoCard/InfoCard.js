import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import './InfoCard.css';
import CardData from '../InfoCard/cardText';

const InfoCard = (props) => {
  return (
    <Fragment>
      <Card className="text-right">
        <Card.Header as="h5">{props.dataItem.header}</Card.Header>
        <Card.Body>
          <Card.Title>כותרת המבזק</Card.Title>
          <Card.Text>
            {props.dataItem.NewsCard.map((news) => (
              <CardData key={news.toString()} value={news} />
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default InfoCard;
