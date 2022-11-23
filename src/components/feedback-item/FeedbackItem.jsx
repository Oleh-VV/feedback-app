import React from "react";
import styles from "./feedback-item.module.css";

function FeedbackItem() {
  return (
    <div className={styles.feedback_item}>
      <div className={styles.review_date}>2022-12-08</div>
      <p>Qwkjxhdkvjh ;rdjghakrj a;erkjgha;erjg aekrjgha;er ae;rkjghae;rh</p>
    </div>
  );
}

export default FeedbackItem;
