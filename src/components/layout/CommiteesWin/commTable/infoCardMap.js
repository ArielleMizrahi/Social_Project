import React, { Fragment } from 'react';

const InfoCardMap = (props) => {
  return (
    <Fragment>
      <tr>
        <td>{props.card.index}</td>
        <td>{props.card.name}</td>
        <td>{props.card.position}</td>
        <td>{props.card.phone}</td>
        <td><a href={`mailto:${props.card.mail}`}>{props.card.mail}</a></td>
      </tr>
    </Fragment>
  );
};

export default InfoCardMap;
