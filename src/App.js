import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";
import FeedbackItem from "./components/FeedbackItem";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const handleDelete = (obj) => {
    if (window.confirm("Are you sure you want to delete?")) {
      let newArray = [...feedback];
      let arr = newArray.filter((item) => item.id !== obj.id);
      setFeedback(arr);
    }
  };

  const handleAdd = (obj) => {
    obj.id = uuidv4();
    setFeedback([obj, ...feedback]);
  };

  const handleEdit = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id
          ? {
              ...item,
              ...updItem,
            }
          : item
      )
    );
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm
          handleAdd={handleAdd}
          feedbackEdit={feedbackEdit}
          updateFeedback={updateFeedback}
        />
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </>
  );
}

export default App;
