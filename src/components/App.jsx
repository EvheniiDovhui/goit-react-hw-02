import React, { useState, useEffect } from 'react';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
// import css from './App.module.css';

const App = () => {
  const storedFeedback = JSON.parse(localStorage.getItem('feedback')) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(storedFeedback);

  const handleFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const hasFeedback = feedback.good + feedback.neutral + feedback.bad > 0;

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>

      <Options
        handleFeedback={handleFeedback}
        handleReset={handleReset}
        hasFeedback={hasFeedback}
      />

      <Feedback feedback={feedback} />
    </div>
  );
};

export default App;
