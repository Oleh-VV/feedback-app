import React from "react";
import { ReviewsContext } from "../context/ReviewsContext";
import { useContext, useState } from "react";
import StarIcon from "./StarIcon";
import styles from "./feedback-form.module.css";

function FeedbackForm() {
  const { reviewList, setReviewList, setCurrentReviewList } =
    useContext(ReviewsContext);
  let stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //let maxId = 0;  reviewList.forEach((item) => {    if (item.id > maxId) maxId = item.id;  });
  const [value, setValue] = useState("");
  const [rate, setRate] = useState(0);
  function chooseRating(rate) {
    setRate(rate);
  }
  async function onSubmitHandler(e) {
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
    const newReview = { text: value, date: date, rate: rate };
    const response = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    });
    const data = await response.json();
    setReviewList([...reviewList, data]);
    setCurrentReviewList([...reviewList, data]);
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
