import React from "react";
import StarIcon from "./StarIcon";
import styles from "./feedback-form.module.css";

function FeedbackForm() {
  let stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <form className={styles.form}>
      <h2>How would you rate our service?</h2>
      <div className={styles.rating_stars_container}>
        {stars.map((star) => (
          <StarIcon key={star} rate={star} />
        ))}
      </div>
      <div className={styles.input_container}>
        <input type="text" placeholder="Write your review" />
        <input type="submit" value="send" />
      </div>
    </form>
  );
}

export default FeedbackForm;
