import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero";
import CoupleInfo from "./components/CoupleInfo";
import CoupleImages from "./components/CoupleImages";
import LocationInfo from "./components/Location";

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-gray-100">
        <Hero />
        <CoupleInfo />
        <LocationInfo />
        <CoupleImages />
      </div>
    </div>
  );
}

export default App;
