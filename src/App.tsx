import { Outlet } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
