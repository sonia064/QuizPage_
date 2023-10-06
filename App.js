import React, { useState } from 'react';
import './App.css';
import image1 from './images/deep.jpg';
import image2 from './images/machine.jpg';
import image3 from './images/vision.jpg';
import Quiz1 from './Quiz1';
import Quiz2 from './Quiz2';
import Quiz3 from './Quiz3';
import Details from './Details';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const handleClick = (pageName) => {
    setCurrentPage(pageName);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return (
          <div className="page">
            <h2 className='home'>Quiz Page</h2>
            <div className="top-row">
            <button onClick={() => handleClick('Detail')}>Details</button>
            <button onClick={() => handleClick('About')}>About</button>
            <button onClick={() => handleClick('Contact')}>Contact</button>
            </div>
            <div className="box-container">
            <div className="box">
             <img src={image1} alt="Image 1" />
              <button onClick={() => handleClick('Quiz1')}>Start Quiz</button>
            </div>
            <div className="box">
              <img src={image2} alt="Image 2" />
              <button onClick={() => handleClick('Quiz2')}>Start Quiz</button>
            </div>
            <div className="box">
              <img src={image3} alt="Image 3" />
              <button onClick={() => handleClick('Quiz3')}>Start Quiz</button>
            </div>
          </div>
          </div>
        );

      case 'Detail':
        return (
          <div className="page">
            <Details />;
            <button onClick={() => handleClick('Home')}>Back to Home</button>
          </div>
        );

      case 'About':
        return (
          <div className="page">
            <h2>About Page</h2>
            <button onClick={() => handleClick('Home')}>Back to Home</button>
          </div>
        );

      case 'Contact':
        return (
          <div className="page">
            <h2>Contact Page</h2>
            <button onClick={() => handleClick('Home')}>Back to Home</button>
          </div>
        );

        case 'Quiz1':
          return (
            <div className="">
               <Quiz1 />
               <button onClick={() => handleClick('Home')}>Back to Home</button>          
          </div>)

        case 'Quiz2':
          return (
            <div className="">
              <Quiz2 />
              <button onClick={() => handleClick('Home')}>Back to Home</button>          
          </div>)
        
        case 'Quiz3':
          return (
            <div className="">
              <Quiz3 />
              <button onClick={() => handleClick('Home')}>Back to Home</button>          
          </div>)

      default:
        return (
          <div className="page">
            <h2>Page Not Found</h2>
            <button onClick={() => handleClick('Home')}>Back to Home</button>
          </div>
        );
    }
  };

  return <div className="App">{renderPage()}</div>;
};


export default App;
