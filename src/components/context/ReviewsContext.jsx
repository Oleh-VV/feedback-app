import { createContext, useState, useEffect } from "react";
export const ReviewsContext = createContext();
export const ReviewsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [reviewList, setReviewList] = useState([]);
  const [currentReviewList, setCurrentReviewList] = useState(reviewList);
  useEffect(() => {
    fetchFeedback();
  }, []);
  const fetchFeedback = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://flourishing-sopapillas-8c2366.netlify.app/feedback?_sort=id&_order=desc"
    );
    const data = await response.json();
    setReviewList(data);
    setCurrentReviewList(data);
    setIsLoading(false);
  };

  const value = {
    reviewList,
    setReviewList,
    currentReviewList,
    setCurrentReviewList,
    isLoading,
  };
  return (
    <ReviewsContext.Provider value={value}>{children}</ReviewsContext.Provider>
  );
};
