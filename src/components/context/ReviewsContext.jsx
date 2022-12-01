import { createContext, useState } from "react";
import data from "../../data/feedback_data";
export const ReviewsContext = createContext();
export const ReviewsProvider = ({ children }) => {
  const [reviewList, setReviewList] = useState(data);
  const [currentReviewList, setCurrentReviewList] = useState(reviewList);
  const value = {
    reviewList,
    setReviewList,
    currentReviewList,
    setCurrentReviewList,
  };
  return (
    <ReviewsContext.Provider value={value}>{children}</ReviewsContext.Provider>
  );
};
