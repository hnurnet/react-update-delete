import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Home";
import Update from "./Update";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />}/>
        <Route path="/update/:id" element={<Update />}/>
      
      </Routes>
      
     
    </Router>
  );
}

export default App;
