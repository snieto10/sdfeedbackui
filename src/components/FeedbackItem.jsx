import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackItem({ item, handleDelete, handleEdit }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => handleEdit(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
