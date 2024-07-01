import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { Provider } from "react-redux"
import store from "./redux/store"
import ProtectedRoute from "./components/protectedRoute"

function App() {
  return (
    <div>
      <Provider store={store}>

        <BrowserRouter>

          <Routes>

            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>

          </Routes>

        </BrowserRouter>

      </Provider>


    </div>
  );
}

export default App;
