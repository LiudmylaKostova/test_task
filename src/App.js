import "./App.css";
import formData from "./mock/formData.json";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Form formData={formData} />
    </div>
  );
}

export default App;
