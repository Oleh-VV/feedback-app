import "./App.css";
import FeedbackForm from "./components/feedback-form/FeedbackForm";
import FeedbackList from "./components/feedback-list/FeedbackList";
import Counters from "./components/counters/Counters";

function App() {
  return (
    <>
      <h1>Feedback App</h1>
      <div>
        <FeedbackForm />
        <Counters />
        <FeedbackList />
      </div>
    </>
  );
}

export default App;
