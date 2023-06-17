import logo from "./logo.svg";
import "./App.css";

function MainContent() {
  return <h1> I'm learning React!</h1>;
}

const but = (
  <ul>
    <li> Menu </li>
    <li> About </li>
    <li> Contact</li>
  </ul>
);

function NavBar() {
  return (
    <nav>
      <h1> website </h1>
      {but}
    </nav>
  );
}

function App() {
  return (
    <div>
      <img src={logo} height="80px" alt={"logo"}/>
      <NavBar />
      <p>Hello, web!</p>
      <MainContent />
    </div>
  );
}

export default App;
