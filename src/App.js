import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';     
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainpage from './common/mainpage/Mainpage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Mainpage/>} />
      
       

    </Routes>
    </BrowserRouter>
    );
}

export default App;
