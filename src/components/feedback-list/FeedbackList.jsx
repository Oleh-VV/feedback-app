import React from "react";
import FeedbackItem from "../feedback-item/FeedbackItem";
import styles from "./feedback-list.module.css";

function FeedbackList() {
  return (
    <div className={styles.feedback_item_container}>
      <FeedbackItem />
    </div>
  );
}

export default FeedbackList;
