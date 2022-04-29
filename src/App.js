import './App.css';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
