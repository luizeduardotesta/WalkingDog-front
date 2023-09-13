import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import LogIn from './pages/LogIn';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Appointment from './pages/Appointment';
import NavbarComponent from "./components/Navbar";
import FooterComponent from './components/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';
import Prices from './pages/Prices';
import AboutMe from './pages/AboutMe';
import AdminDashboard from './admin/AdminDashboard';
import UserDashboard from './user/UserDashboard';
import EditAppointment from './admin/EditAppointment';
import CreateAppointment from './admin/CreateAppointment';
import AdminRoute from './components/AdminRoute';
import UserRoute from './components/UserRoute';
import Mvv from './pages/Mvv';


function App() {
  return (
    <div>
      <ToastContainer />
      <Provider store={store}>
        <BrowserRouter>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mvv" element={<Mvv />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/admin/appointment" element={<AdminRoute><Appointment /></AdminRoute>} />
            <Route path="/user/appointment" element={<UserRoute><Appointment /></UserRoute>} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
            <Route path="/admin/appointment/create" element={<AdminRoute><CreateAppointment /></AdminRoute>} />
            <Route path="/admin/appointment/edit/:id" element={<AdminRoute><EditAppointment /></AdminRoute>} />
            <Route path="/user/dashboard" element={<UserRoute><UserDashboard /></UserRoute>} />
            <Route path="/user/appointment/create" element={<UserRoute><CreateAppointment /></UserRoute>} />
            <Route path="/user/appointment/edit/:id" element={<UserRoute><EditAppointment /></UserRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App;
