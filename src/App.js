import { useContext } from "react";
import { ReviewsContext } from "./components/context/ReviewsContext";
import "./App.css";
import spinner from "./assets/spinner.gif";
import FeedbackForm from "./components/feedback-form/FeedbackForm";
import FeedbackList from "./components/feedback-list/FeedbackList";
import Counters from "./components/counters/Counters";

function App() {
  const { isLoading } = useContext(ReviewsContext);
  return (
    <>
      <h1 className="header">Feedback App</h1>
      <div>
        <FeedbackForm />
        <Counters />
        {isLoading ? <img src={spinner} alt="Loading..." /> : <FeedbackList />}
      </div>
    </>
  );
}

export default App;
