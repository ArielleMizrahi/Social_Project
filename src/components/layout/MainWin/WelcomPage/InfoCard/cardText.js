import React from 'react';

const CardData = (props) => {
  return (
    <div>
      <li dir="rtl">{props.value.text}</li>
    </div>
  );
};

export default CardData;
