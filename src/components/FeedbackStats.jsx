import PropTypes from "prop-types";

function FeedbackStats({ feedback }) {
  //Calculate rating avg
  let average =
    feedback.reduce((accumulator, current) => {
      return accumulator + current.rating;
    }, 0) / feedback.length;

  let num = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(num) ? 0 : num}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackStats;
