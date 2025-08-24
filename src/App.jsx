import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./page/Home"
import Search from "./page/Search"
import Booking from "./page/Booking"

function App() {
 

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/booking" element={<Booking/>}/>
      </Routes>
    </>
  )
}

export default App
