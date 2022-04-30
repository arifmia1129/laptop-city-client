import './App.css';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import ItemDetails from './pages/Shared/ItemDetails/ItemDetails';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="item/:id" element={<ItemDetails />}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
