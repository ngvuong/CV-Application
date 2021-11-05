import Personal from "./components/Personal";
import "./styles/App.css";

function CVApp() {
  return (
    <div className="App">
      <form className="CvForm">
        <Personal />
        <button className="Btn SaveBtn">Save</button>
      </form>
    </div>
  );
}

export default CVApp;
