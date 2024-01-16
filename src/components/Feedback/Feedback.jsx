import Notification from '../Notification/Notification';
import css from './Feedback.module.css';

const Feedback = ({ feedback }) => {
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage =
    totalFeedback > 0
      ? Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)
      : 0;

  return (
    <div className={css.container}>
      {totalFeedback > 0 ? (
        <div>
          <h2 className={css.title}>Feedback Statistics</h2>
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
