// import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import RegistrationForm from './register';
import ProfilePage from './profilepage';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<RegistrationForm />}/>
        <Route path='/profilepage' element={<ProfilePage />}/>
      </Routes>
    </div>
  );
}

export default App;