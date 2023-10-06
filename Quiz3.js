import React, { useState } from 'react';
import './Quiz3.css';



const Quiz3 = () => {

  const [totalCorrect, setTotalCorrect] = useState(0);
  const [questionsWithCorrectAnswerSelected, setQuestionsWithCorrectAnswerSelected] = useState([]);

  const [quizData, setQuizData] = useState([
    {
      question: 'What is the primary motivation behind using Vision Transformers (ViTs) in computer vision?',
      options: ['To improve natural language processing', 
      'To replace traditional convolutional neural networks (CNNs)', 
      'To enhance speech recognition', 
      'To boost reinforcement learning'],
      correctAnswer: 'To replace traditional convolutional neural networks (CNNs)',
      selectedAnswer: null,
      incorrectOptionIndex: null, 
    },
    {
      question: 'In a Vision Transformer (ViT) architecture, which of the following layers is responsible for capturing global image context?',
      options: ['Fully connected layers', 'Transformer encoder layers', 'Positional encoding layers', 'Convolutional layers'],
      correctAnswer: 'Transformer encoder layers',
      selectedAnswer: null,
      incorrectOptionIndex: null, 
    },
    {
      question: 'What is the role of positional encoding in Vision Transformers (ViTs)?',
      options: ['It encodes the color information of pixels.', 
      'It encodes the spatial information of pixels.', 
      'It encodes the depth information of pixels.', 
      'It encodes the texture information of pixels.'],
      correctAnswer: 'It encodes the spatial information of pixels.',
      selectedAnswer: null,
      incorrectOptionIndex: null, 
    },
    {
      question: 'Which of the following statements is true about Vision Transformers (ViTs) compared to Convolutional Neural Networks (CNNs)?',
      options: ['ViTs are generally faster in training.', 
      'ViTs require larger amounts of labeled data.', 
      'ViTs are more interpretable.', 
      'ViTs are primarily used for audio processing.'],
      correctAnswer: 'ViTs require larger amounts of labeled data.',
      selectedAnswer: null,
      incorrectOptionIndex: null, 
    },
    {
      question: 'What is the "self-attention" mechanism in Vision Transformers (ViTs) used for?',
      options: ['Capturing long-range dependencies in image data.', 'Enhancing image resolution.', 
      'Reducing model complexity.', 'Preprocessing image data for CNNs.'],
      correctAnswer: 'Capturing long-range dependencies in image data.',
      selectedAnswer: null,
      incorrectOptionIndex: null, 
    },
   
  ]);





  
  const handleOptionClick = (questionIndex, optionIndex) => {
    const updatedQuizData = [...quizData];
    const selectedOption = updatedQuizData[questionIndex].options[optionIndex];

    // Check if the selected option is correct
    if (selectedOption === updatedQuizData[questionIndex].correctAnswer &&
      !questionsWithCorrectAnswerSelected.includes(questionIndex)) 
    {
      updatedQuizData[questionIndex].selectedAnswer = 'correct';
      updatedQuizData[questionIndex].incorrectOptionIndex = null; 
      // Increment the total correct count
      setTotalCorrect(totalCorrect + 1);
      setQuestionsWithCorrectAnswerSelected([...questionsWithCorrectAnswerSelected, questionIndex]);
    } 
    else {
      updatedQuizData[questionIndex].selectedAnswer = 'incorrect';
      updatedQuizData[questionIndex].incorrectOptionIndex = optionIndex; // Store index of selected incorrect option
    }

    setQuizData(updatedQuizData);
  };

  
  return (
    <div className="page">
        <div className="calculator">
           <p>Total Correct Answers:</p>
           <div className="total-correct">{totalCorrect}</div>
           <button
             className="buttonn"
             onClick={() => {
             }}
            >
              Calculate
            </button>
            {totalCorrect >= 5 && (
                <div className="congratulations-message">
                  Congratulations!! You will win the quiz
                </div>
                )}
        </div>

      <p className='quiz'>Topic: Vision Transformer</p>
      {quizData.map((quizItem, questionIndex) => (
        <ol key={questionIndex}>
          <p className="bold-question two-line-question">{`${questionIndex + 1}. ${quizItem.question}`}</p> 
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
        
  </div>
  );
};

export default Quiz3;
