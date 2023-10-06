import React, { useState, useEffect  } from 'react';
import './Quiz2.css'; 

const Quiz2 = () => {
  const [quizData, setQuizData] = useState([
    {
      question: 'What is machine learning?',
      options: ['A programming language', 
      'A branch of artificial intelligence', 
      'A type of computer hardware', 
      'A type of database management system'],
      correctAnswer: 'A branch of artificial intelligence',
      selectedAnswer: null,
      incorrectOptionIndex: null, 
    },
    {
      question: 'Which of the following is not a supervised learning algorithm?',
      options: ['Linear Regression', 'K-Means Clustering', 'Decision Tree', 'Support Vector Machines'],
      correctAnswer: 'K-Means Clustering',
      selectedAnswer: null,
      incorrectOptionIndex: null, 
    },
    {
      question: 'What is overfitting in machine learning?',
      options: ['When a model on the training data but poorly on new, unseen data', 
      'When a model has too few parameters', 
      'When a model is too simple to capture the underlying patterns in data', 
      'When a model has too many parameters and fits noise in the training data'],
      correctAnswer: 'When a model has too many parameters and fits noise in the training data',
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
      question: 'What is the purpose of cross-validation in machine learning?',
      options: ['To select the best machine learning library', 'To train a model on multiple GPUs', 
      'To assess a model performance on unseen data and avoid overfitting', ' To check for data leakage'],
      correctAnswer: ' assess a model performance on unseen data and avoid overfitting',
      selectedAnswer: null,
      incorrectOptionIndex: null, 
    },
   
  ]);

  const [remainingTime, setRemainingTime] = useState(40);
  const [showAlert, setShowAlert] = useState(false);
  const [allQuestionsAnsweredAlertShown, setAllQuestionsAnsweredAlertShown] = useState(false); 
  const [timeUpNotificationShown, setTimeUpNotificationShown] = useState(false);


  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 500);
    
     if (remainingTime === 0) {
      clearInterval(timer);
      handleTimeout();
    }
    
     return () => clearInterval(timer);
    }, [remainingTime]);
  
    const handleTimeout = () => {
      alert('Your time is up!!');
      setAllQuestionsAnsweredAlertShown(true);
    };


  
  const handleOptionClick = (questionIndex, optionIndex) => {
    const updatedQuizData = [...quizData];
    const selectedOption = updatedQuizData[questionIndex].options[optionIndex];

    // Check if the selected option is correct
    if (selectedOption === updatedQuizData[questionIndex].correctAnswer) {
      updatedQuizData[questionIndex].selectedAnswer = 'correct';
      updatedQuizData[questionIndex].incorrectOptionIndex = null; 
    } else {
      updatedQuizData[questionIndex].selectedAnswer = 'incorrect';
      updatedQuizData[questionIndex].incorrectOptionIndex = optionIndex; 
    }

    setQuizData(updatedQuizData);



  
      const allQuestionsAnswered = quizData.every(
        (quizItem) => quizItem.selectedAnswer !== null
      );
  
      if (allQuestionsAnswered) {
        setRemainingTime(0);
        if (!allQuestionsAnsweredAlertShown) {
          alert('You have clicked all the questions.');
          setAllQuestionsAnsweredAlertShown(true);
      }
    }

  };




  
  
  return (
    <div className="page">
      <p className='quiz'>Topic: Machine Learning</p>

      {showAlert && (
        <div className="alert alert-error">
          Time is up! Quiz will be submitted.
        </div>
      )}

<div className="timer-container">
        <p>{remainingTime} S</p>
        
      </div>

      {quizData.map((quizItem, questionIndex) => (
        <ol key={questionIndex}>
          <p className='ques'>{`${questionIndex + 1}. ${quizItem.question}`}</p> {/* Add numbering and question */}
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
                    disabled={remainingTime === 0 || quizItem.selectedAnswer !== null}
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
    </div>
  );
};

export default Quiz2;
