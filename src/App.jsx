import { BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Signin from "./Component/Signin";
import Signup from "./Component/Signup";
import Navbar from "./Component/Navbar";
import Card from "./Component/Card";
import Slidebar from "./Component/Slidebar";

function App() {
  

  return (
    <>
       <Router>
        <Routes>
           <Route path="/signin"element={<Signin/>}/>
           <Route path="/signup"element={<Signup/>}/>
           <Route path="/navbar"element={<Navbar/>}/>
           <Route path="/card"element={<Card/>}/>
           <Route path="/slidebar"element={<Slidebar/>}/>
        </Routes>
       </Router>
    </>
  )
}

export default App
