import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Notfound from './pages/Notfound/Notfound';
import PackDetails from './pages/PackDetails/PackDetails';
import PrivateRoute from './route/PrivateRoute';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';

function App() {
  return (
    <AuthProvider>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="package-detail/:id" element={
          <PrivateRoute>
            <PackDetails />
          </PrivateRoute>
        } />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer></Footer>
    </AuthProvider>
  );
}

export default App;
