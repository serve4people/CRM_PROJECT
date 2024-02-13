import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/dashboard' element={<DashBoard />}></Route>
          {/* <Route path='/Navbar' element={<NavBar />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
