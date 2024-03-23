import "./App.css";
import Card from "./component/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">tailwindcss with props</h1>
      <Card username="test@gmail.com" textbtn="click here" />
      <Card username="testing@gmail.com" textbtn="click now" />
    </>
  );
}

export default App;
