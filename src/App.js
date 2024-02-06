import "./App.css";
import Hero from "./components/Hero";
import CoupleInfo from "./components/CoupleInfo";
import LocationInfo from "./components/Location";

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-gray-100">
        <Hero />
        <CoupleInfo />
        <LocationInfo />
      </div>
    </div>
  );
}

export default App;
