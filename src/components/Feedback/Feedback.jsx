import Notification from '../Notification/Notification';

const Feedback = ({ feedback }) => {
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage =
    totalFeedback > 0
      ? Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)
      : 0;

  return (
    <div>
      {totalFeedback > 0 ? (
        <div>
          <h2>Feedback Statistics</h2>
          <p>Good: {feedback.good}</p>
          <p>Neutral: {feedback.neutral}</p>
          <p>Bad: {feedback.bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive Percentage: {positivePercentage}%</p>
        </div>
      ) : (
        <Notification message="No feedback yet. Please leave your feedback." />
      )}
    </div>
  );
};

export default Feedback;
