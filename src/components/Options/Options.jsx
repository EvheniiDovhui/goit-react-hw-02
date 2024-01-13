const Options = ({ handleFeedback, handleReset, hasFeedback }) => {
  return (
    <div>
      <button onClick={() => handleFeedback('good')}>Good</button>
      <button onClick={() => handleFeedback('neutral')}>Neutral</button>
      <button onClick={() => handleFeedback('bad')}>Bad</button>

      {hasFeedback && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};

export default Options;
