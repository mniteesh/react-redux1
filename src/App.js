import Formik from "./components/formpage";
import ShowResult from "./components/resultpage";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Formik />
      <hr />
      <ShowResult />
    </div>
  );
}
