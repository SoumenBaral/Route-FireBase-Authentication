import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import LogIn from './Component/LogIn/LogIn';
import Header from './Component/Header/Header'
import Register from "./Component/Register/Register";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
