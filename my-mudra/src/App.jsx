import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";

import Table from "./components/Table1";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Navigate to='/login' />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/dashboard' element={<DashBoard />}></Route>
          <Route path='/table' element={<Table />}></Route>
          {/* <Route path='/Navbar' element={<NavBar />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
