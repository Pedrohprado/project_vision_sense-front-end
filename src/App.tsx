import { Route, Routes } from 'react-router';
import LoginPage from './pages/login';
import SingupPage from './pages/singup';
import HomePage from './pages/home';

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/singup' element={<SingupPage />} />
      <Route path='/' element={<HomePage />} />
    </Routes>
  );
};

export default App;
