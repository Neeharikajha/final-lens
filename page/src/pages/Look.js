// Look.js
import React from 'eact';
import Top from './Top';
import Bottom from './Bottom';
import Outerwear from './Outerwear';

const Look = ({ top, bottom, outerwear }) => {
  return (
    <div>
      <Top {...top} />
      <Bottom {...bottom} />
      <Outerwear {...outerwear} />
    </div>
  );
};

export default Look;