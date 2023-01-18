import { useState } from "react";
import Cart from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  return (
    <Cart>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/*rating select component*/}
        <div className="input-group">
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="write a review"
            value={text}
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Cart>
  );
}

export default FeedbackForm;
