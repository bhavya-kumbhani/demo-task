import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Routes/Login';
import SignUp from './Routes/SignUp';
import Users from './Routes/Users';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" exact element={<SignUp />} />
        <Route path="/dashboard" exact element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
