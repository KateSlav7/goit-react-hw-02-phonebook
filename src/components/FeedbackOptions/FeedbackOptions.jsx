import React from "react";
import { FeedbackOptionsBtn } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option) => (
      <FeedbackOptionsBtn
        onClick={() => onLeaveFeedback(option)}
        key={option}
        type="button"
      >
        {option}
      </FeedbackOptionsBtn>
    ))}
  </div>
);

export default FeedbackOptions;