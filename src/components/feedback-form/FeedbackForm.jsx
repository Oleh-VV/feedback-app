import React from "react";
import { ReviewsContext } from "../context/ReviewsContext";
import { useContext, useState } from "react";
import StarIcon from "./StarIcon";
import styles from "./feedback-form.module.css";

function FeedbackForm() {
  const { reviewList, setReviewList, setCurrentReviewList } =
    useContext(ReviewsContext);
  let stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let maxId = 0;
  reviewList.forEach((item) => {
    if (item.id > maxId) maxId = item.id;
  });
  const [value, setValue] = useState("");
  const [rate, setRate] = useState(0);
  function chooseRating(rate) {
    setRate(rate);
  }
  function onSubmitHandler(e) {
    e.preventDefault();
    if (value.length < 10) {
      alert("Review must content at least 10 symbols");
      return;
    }
    if (rate === 0) {
      alert("Choose the rating please");
      return;
    }
    let date = `${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }-${new Date().getDate()}`;
    const newReview = { text: value, id: maxId + 1, date: date, rate: rate };
    setReviewList([...reviewList, newReview]);
    setCurrentReviewList([...reviewList, newReview]);
    setValue("");
    setRate(0);
  }

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h2>How would you rate our service?</h2>
      <div className={styles.rating_stars_container}>
        {stars.map((star) => (
          <StarIcon key={star} rate={star} chooseRating={chooseRating} />
        ))}
      </div>
      <div className={styles.input_container}>
        <input
          type="text"
          value={value}
          placeholder="Write your review"
          onChange={(e) => setValue(e.target.value)}
        />
        <input type="submit" value="send" />
      </div>
    </form>
  );
}

export default FeedbackForm;
