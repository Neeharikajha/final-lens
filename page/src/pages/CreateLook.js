// CreateLook.js
import React, { useState } from 'eact';
import Top from './Top';
import Bottom from './Bottom';
import Outerwear from './Outerwear';
import Look from './Look';

const CreateLook = () => {
  const [selectedTop, setSelectedTop] = useState(null);
  const [selectedBottom, setSelectedBottom] = useState(null);
  const [selectedOuterwear, setSelectedOuterwear] = useState(null);

  const handleTopSelect = (top) => {
    setSelectedTop(top);
  };

  const handleBottomSelect = (bottom) => {
    setSelectedBottom(bottom);
  };

  const handleOuterwearSelect = (outerwear) => {
    setSelectedOuterwear(outerwear);
  };

  return (
    <div>
      <h1>Create a Look</h1>
      <div>
        <h2>Tops</h2>
        <ul>
          {tops.map((top) => (
            <li key={top.id}>
              <Top {...top} onClick={() => handleTopSelect(top)} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Bottoms</h2>
        <ul>
          {bottoms.map((bottom) => (
            <li key={bottom.id}>
              <Bottom {...bottom} onClick={() => handleBottomSelect(bottom)} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Outerwear</h2>
        <ul>
          {outerwears.map((outerwear) => (
            <li key={outerwear.id}>
              <Outerwear {...outerwear} onClick={() => handleOuterwearSelect(outerwear)} />
            </li>
          ))}
        </ul>
      </div>
      <Look top={selectedTop} bottom={selectedBottom} outerwear={selectedOuterwear} />
    </div>
  );
};

export default CreateLook;