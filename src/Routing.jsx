import { Route, Routes, BrowserRouter } from "react-router"

import Login from "./pages/Login.jsx";
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx'
import Movie from './pages/Movie.jsx'


function Routing() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movies" element={<Movie />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routing