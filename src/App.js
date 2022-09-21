import "./App.css";
import BelowMain from "./components/BelowMain/BelowMain";
import BelowMid from "./components/BelowMid/BelowMid";
import BelowMid2 from "./components/BelowMid2/BelowMid2";
import BelowMid3 from "./components/BelowMid3/BelowMid3";
import Below from "./components/BelowNav/Below";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <div id="main">
        <NavBar />
        <Below />
      </div>
      <BelowMain />
      <BelowMid />
      <BelowMid2 />
      <BelowMid3 />
    </>
  );
}
export default App;
