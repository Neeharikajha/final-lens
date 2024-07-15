// // src/pages/CardsPage.js
// import React from 'react';
// import { useHistory } from 'react-router-dom';
// import 'my-react-app/src/pages/CardsPage.css';

// const CardsPage = () => {
//   const history = useHistory();

//   const handleCardClick = (route) => {
//     history.push(route);
//   };

//   return (
//     <div className="cards-container">
//       <div className="card" onClick={() => handleCardClick('/page1')}>
//         <img src="https://via.placeholder.com/150" alt="Card 1" />
//         <h3>Card 1</h3>
//       </div>
//       <div className="card" onClick={() => handleCardClick('/page2')}>
//         <img src="https://via.placeholder.com/150" alt="Card 2" />
//         <h3>Card 2</h3>
//       </div>
//       <div className="card" onClick={() => handleCardClick('/page3')}>
//         <img src="https://via.placeholder.com/150" alt="Card 3" />
//         <h3>Card 3</h3>
//       </div>
//       <div className="card" onClick={() => handleCardClick('/page4')}>
//         <img src="https://via.placeholder.com/150" alt="Card 4" />
//         <h3>Card 4</h3>
//       </div>
//     </div>
//   );
// };

// export default CardsPage;

// src/pages/CardsPage.js
// import React from 'react';
// import { useHistory } from 'react-router-dom';
// import 'my-react-app/src/pages/CardsPage.css';

// const CardsPage = () => {
//   const history = useHistory();

//   const handleCardClick = (route) => {
//     history.push(route);
//   };

//   return (
//     <div className="cards-container">
//       <div className="card" onClick={() => handleCardClick('/page1')}>
//         <img src="https://via.placeholder.com/150" alt="Card 1" />
//         <h3>Card 1</h3>
//       </div>
//       <div className="card" onClick={() => handleCardClick('/page2')}>
//         <img src="https://via.placeholder.com/150" alt="Card 2" />
//         <h3>Card 2</h3>
//       </div>
//       <div className="card" onClick={() => handleCardClick('/page3')}>
//         <img src="https://via.placeholder.com/150" alt="Card 3" />
//         <h3>Card 3</h3>
//       </div>
//       <div className="card" onClick={() => handleCardClick('/page4')}>
//         <img src="https://via.placeholder.com/150" alt="Card 4" />
//         <h3>Card 4</h3>
//       </div>
//     </div>
//   );
// };

// export default CardsPage;

// src/pages/CardsPage.js
// import React from 'react';
// import { useHistory } from 'react-router-dom';
// import 'my-react-app/src/pages/CardsPage.css';

// const CardsPage = () => {
//   const history = useHistory();

//   const handleCardClick = (route) => {
//     history.push(route);
//   };

//   return (
//     <div className="cards-container">
//       <div className="card" onClick={() => handleCardClick('/page1')}>
//         <img src="https://via.placeholder.com/150" alt="Card 1" />
//         <h3>Card 1</h3>
//       </div>
//       <div className="card" onClick={() => handleCardClick('/page2')}>
//         <img src="https://via.placeholder.com/150" alt="Card 2" />
//         <h3>Card 2</h3>
//       </div>
//       <div className="card" onClick={() => handleCardClick('/page3')}>
//         <img src="https://via.placeholder.com/150" alt="Card 3" />
//         <h3>Card 3</h3>
//       </div>
//       <div className="card" onClick={() => handleCardClick('/page4')}>
//         <img src="https://via.placeholder.com/150" alt="Card 4" />
//         <h3>Card 4</h3>
//       </div>
//     </div>
//   );
// };

// export default CardsPage;

// src/pages/CardsPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardsPage.css';
import myImage1 from '../images/Female_Model.png';
import myImage2 from '../images/Male_Model.png';
import myImage3 from '../images/Plus.png';

const CardsPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <div className="cards-container">
      <div className="card" onClick={() => handleCardClick('/page1')}>
        <img src={myImage1} alt="Female" />
        <h3>Female</h3>
      </div>
      <div className="card" onClick={() => handleCardClick('/page2')}>
        <img src={myImage2} alt="Male" />
        <h3>Male</h3>
      </div>
      <div className="card" onClick={() => handleCardClick('/page3')}>
        <img src={myImage3} alt="Card 3" />
        
      </div>
      <div className="card" onClick={() => handleCardClick('/page4')}>
        <img src={myImage3} alt="Card 4" />
        
      </div>
    </div>
  );
};

export default CardsPage;

