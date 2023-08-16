import { Route, Routes } from 'react-router-dom';
import './App.scss';
import LoginForm from './content/Login/Login';
import SigninForm from './content/Saignin/Signin';
import UserDashboard from './content/UserDashboard/UserDashboard';
import EnteringWindow from './content/EnteringWindow/EnteringWindow';

function App(props) {
  return (
    <div className="app">
      <h1>Мій додаток</h1>
      <Routes>
          <Route path="/" element={<EnteringWindow />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signin" element={<SigninForm state={props.state} />} />
          <Route path="/userdashboard/:id" element={<UserDashboard state={props.state}/>} />
      </Routes>

    </div>
  );
}

export default App;
