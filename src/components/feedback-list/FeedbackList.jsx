import React from "react";
import { useContext } from "react";
import FeedbackItem from "../feedback-item/FeedbackItem";
import { ReviewsContext } from "../context/ReviewsContext";
import styles from "./feedback-list.module.css";

function FeedbackList() {
  const { currentReviewList } = useContext(ReviewsContext);
  return (
    <div className={styles.feedback_item_container}>
      {" "}
      {currentReviewList.map((item) => (
        <FeedbackItem
          item={item}
          key={item.id}
          style={
            item.rate === "1"
              ? "star_icon_first_rate"
              : item.rate === "10"
              ? "star_icon_last_rate"
              : "star_icon_rate"
          }
        />
      ))}
    </div>
  );
}

export default FeedbackList;
