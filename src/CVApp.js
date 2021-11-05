import Personal from "./components/Personal";
import Education from "./components/Education";
import "./styles/App.css";

function CVApp() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="App">
      <form className="CvForm" onSubmit={handleSubmit}>
        <Personal />
        <Education />
        <button className="Btn SaveBtn">Save</button>
      </form>
    </div>
  );
}

export default CVApp;
