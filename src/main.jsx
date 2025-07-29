import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Login from "./pages/Login.jsx";
// import Register from './pages/Register.jsx';
import Movie from './pages/Movie'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Login  /> */}
    {/* <Register /> */}
    <Movie />
  </StrictMode>,
)
