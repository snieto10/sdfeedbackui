import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackList({ feedback, handleDelete, handleEdit }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
