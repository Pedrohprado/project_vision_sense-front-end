import { Route, Routes } from 'react-router';
import LoginPage from './pages/login';
import SingupPage from './pages/singup';

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/singup' element={<SingupPage />} />
    </Routes>
  );
};

export default App;
