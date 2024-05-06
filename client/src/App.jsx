
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Projects from './Pages/Projects'



export default function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/signin" element={<SignIn/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      </Routes>
   
    </BrowserRouter>
  )
}
