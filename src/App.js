import "./App.css";
import ClassComp from "./Components/ClassComponentEX/ClassComponent";
import ClassProps from "./Components/ClassPropsEX/ClassProps";
import FunctionalComp from "./Components/FunctionalComponentEX/FunctionalComponent";
import FunctionalProps from "./Components/FunctionalPropsEX/FunctionalProps";
import StateEX from "./Components/StateEX/StateEX";

function App() {
  return (
    <div className="App">
      <ClassComp />
      <p>*********************************************************</p>
      <FunctionalComp />
      <p>*********************************************************</p>

      <FunctionalProps
        fname="Tasneem"
        lname="Farouk"
        age={22}
        phone="0123456789"
      >
        <p> live in Menoufia </p>
      </FunctionalProps>
      <p>*********************************************************</p>

      <ClassProps subject1="Programming" subject2="Networks">
        <p> Wireless networks </p>
      </ClassProps>
      <p>******************************************************</p>
      <StateEX />
    </div>
  );
}

export default App;
