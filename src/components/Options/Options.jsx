import css from './Options.module.css';

const Options = ({ handleFeedback, handleReset, hasFeedback }) => {
  return (
    <div className={css.container}>
      <button onClick={() => handleFeedback('good')}>Good</button>
      <button onClick={() => handleFeedback('neutral')}>Neutral</button>
      <button onClick={() => handleFeedback('bad')}>Bad</button>

      {hasFeedback && (
        <button className={css.resetButton} onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
