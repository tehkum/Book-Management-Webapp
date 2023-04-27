import Favourites from "./pages/Favourites";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import ReadBook from "./pages/ReadBook";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";


export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Favourites" element={<Favourites />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Read-book" element={<ReadBook />} />
      </Routes>
      
    </div>
  );
}
