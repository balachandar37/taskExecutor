import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import LoginOrSignUp from './components/LoginOrSignUp';
import MasterPage from './components/MasterPage';
import SignUp from './components/SignUp';
import StudentPage from './components/StudentPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path = "/" element={<LoginOrSignUp />} />
      <Route exact path = "/login" element={<Login />} />
      <Route exact path = "/signup" element={<SignUp />} />
      <Route exact path = "/masterpage" element={<MasterPage />} />
      <Route exact path = "/studentpage" element={<StudentPage />} />
    </Routes>
  </BrowserRouter>
)

export default App;
