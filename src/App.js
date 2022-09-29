import logo from "./logo.svg";
// import "./App.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

// <FontAwesomeIcon icon={faCoffee} />;
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import QuestionAnswer from "./components/QuestionAnswer/QuestionAnswer";

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <QuestionAnswer></QuestionAnswer>
    </div>
  );
}

export default App;
