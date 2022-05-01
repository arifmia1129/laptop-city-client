import './App.css';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import ItemDetails from './pages/Shared/ItemDetails/ItemDetails';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Authentication/Register';
import Login from './pages/Authentication/Login';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/item/:id" element={<ItemDetails />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
