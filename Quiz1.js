import React, { useState } from 'react';
import './Quiz1.css'; 

const Quiz1 = () => {
  const [quizData, setQuizData] = useState([
    {
      question: 'What is deep learning?',
      options: ['A type of machine learning involving complex mathematical algorithms.', 
      'A subset of artificial intelligence focused on mimicking human cognition.', 
      'A technique for training neural networks with multiple hidden layers.', 
      'A method for linear regression analysis.'],
      correctAnswer: 'A technique for training neural networks with multiple hidden layers.',
      selectedAnswer: null,
      incorrectOptionIndex: null, 
    },
    {
      question: 'Which of the following is a common activation function used in deep learning?',
      options: ['Logistic Sigmoid', 'Linear Regression', 'Decision Tree', 'K-Means Clustering'],
      correctAnswer: 'Logistic Sigmoid',
      selectedAnswer: null,
      incorrectOptionIndex: null, 
    },
    {
      question: 'What is the purpose of the backpropagation algorithm in deep learning?',
      options: ['It optimizes the cost function during gradient descent.', 
      'It initializes neural network weights.', 
      'It generates synthetic data for training.', 
      'It performs feature selection.'],
      correctAnswer: ' It optimizes the cost function during gradient descent.',
      selectedAnswer: null,
      incorrectOptionIndex: null, 
    },
    {
      question: 'Which type of neural network is typically used for image recognition tasks?',
      options: ['Recurrent Neural Network (RNN)', 
      'Convolutional Neural Network (CNN)', 
      'Long Short-Term Memory (LSTM)', 
      'Autoencoder'],
      correctAnswer: 'Convolutional Neural Network (CNN)',
      selectedAnswer: null,
      incorrectOptionIndex: null, 
    },
    {
      question: 'What are some challenges in training deep neural networks?',
      options: ['Lack of labeled data', 'Overfitting', 
      ' Vanishing gradients', 'All of the above'],
      correctAnswer: 'All of the above',
      selectedAnswer: null,
      incorrectOptionIndex: null, 
    },
   
  ]);



  const [notification, setNotification] = useState(null);


  
  const handleOptionClick = (questionIndex, optionIndex) => {
    const updatedQuizData = [...quizData];
    const selectedOption = updatedQuizData[questionIndex].options[optionIndex];

    
    if (selectedOption === updatedQuizData[questionIndex].correctAnswer) {
      updatedQuizData[questionIndex].selectedAnswer = 'correct';
      updatedQuizData[questionIndex].incorrectOptionIndex = null; 
    } 
    else {
      updatedQuizData[questionIndex].selectedAnswer = 'incorrect';
      updatedQuizData[questionIndex].incorrectOptionIndex = optionIndex; 
    }

    setQuizData(updatedQuizData);
  };




  const showCorrectOption = (questionIndex) => {
    const correctOption = quizData[questionIndex].correctAnswer;
    setNotification(correctOption);
  };
  
  
  return (
    <div className="page">
      <p className='quiz'>Topic: Deep Learning</p>
      {quizData.map((quizItem, questionIndex) => (
        <ol key={questionIndex} className="question-list">
         <div className="question-container">
            <p className='qs'>{`${questionIndex + 1}. ${quizItem.question}`}</p>
            <button className="eye-icon" onClick={() => showCorrectOption(questionIndex)}>
              👁️
            </button>
          </div>
          <ul>
            {quizItem.options.map((option, optionIndex) => (
              <li
                key={optionIndex}
                className={
                  option === quizItem.selectedAnswer
                    ? option === quizItem.correctAnswer
                      ? 'correct'
                      : 'incorrect'
                    : ''
                }
              >
                <label>
                  <input
                    type="radio"
                    name={`q${questionIndex}`}
                    value={option}
                    checked={option === quizItem.selectedAnswer}
                    onChange={() => handleOptionClick(questionIndex, optionIndex)}
                  />
                  {option}
                  {option === quizItem.correctAnswer && quizItem.selectedAnswer === 'correct' && (
                    <span className="checkmark">✓</span> // Checkmark for correct answer
                  )}
                  {option !== quizItem.correctAnswer &&
                    optionIndex === quizItem.incorrectOptionIndex &&
                    quizItem.selectedAnswer === 'incorrect' && (
                      <span className="crossmark">✘</span> // Crossmark for selected incorrect answer
                    )}
                </label>
              </li>
            ))}
          </ul>
        </ol>
      ))}
    {notification && (
        <div className="notificationn">
          Correct : 
          {notification}
          <button onClick={() => setNotification(null)}>Close</button>
        </div>
      )}
    </div>
  );
};


export default Quiz1;
