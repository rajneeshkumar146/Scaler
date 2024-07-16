import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ProtectedRoute from "./components/ProtectedRoute";
import { Provider } from "react-redux";
import store from "./redux/store";
import Admin from './pages/Admin';
import Profile from "./pages/Profile";
import Partner from './pages/Partner';
import BookShow from "./pages/home/BookShow";
import SingleMovie from "./pages/home/SingleMovie";
import Forget from "./pages/Profile/ForgetPassword";
import Reset from "./pages/Profile/ResetPassword";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/login" element={<Login />}></Route>

            <Route path="/register" element={<Register />}></Route>

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/partner"
              element={
                <ProtectedRoute>
                  <Partner />
                </ProtectedRoute>
              }
            />

            <Route
              path="/movie/:id"
              element={
                <ProtectedRoute>
                  <SingleMovie />
                </ProtectedRoute>
              }
            />

            <Route
              path="/book-show/:id"
              element={
                <ProtectedRoute>
                  <BookShow />
                </ProtectedRoute>
              }
            />


          <Route path="/forget" element={<Forget />} />
          
          <Route path="/reset/:email" element={<Reset />} />

          </Routes>


        </BrowserRouter>

      </Provider>


    </div>
  );
}

export default App;
