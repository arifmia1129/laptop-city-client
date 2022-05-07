import './App.css';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import ItemDetails from './pages/Shared/ItemDetails/ItemDetails';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Authentication/Register';
import Login from './pages/Authentication/Login';
import RequireAuth from './pages/Shared/RequireAuth/RequireAuth';
import ManageItems from './pages/ManageItems/ManageItems';
import AddItem from './pages/AddItem/AddItem';
import MyItems from './pages/MyItems/MyItems';
import Blogs from './pages/Blogs/Blogs';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blog" element={<Blogs />}></Route>
        <Route path="/inventory/:id" element={
          <RequireAuth>
            <ItemDetails />
          </RequireAuth>
        }></Route>
        <Route path="/manageitems" element={
          <RequireAuth>
            <ManageItems />
          </RequireAuth>}></Route>
        <Route path="/additem" element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>}></Route>
        <Route path="/myitems" element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
