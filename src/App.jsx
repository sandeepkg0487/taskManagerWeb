// import Index from './pages'
import Login from './pages/login'
import Signup from './pages/signup'
import ProtectAfterLogin from './auth/ProtectAfterLogin'
import AdminRoute from './auth/AdminRoute'
import ProtectRoutes from './auth/ProtectRoutes'
AdminRoute

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import Dashboard from './pages'
import Projectpage from './pages/projectpage'
import Task from './pages/task'


function App() {


  return (
    <>


      <BrowserRouter>



        <Routes>


          <Route element={<ProtectAfterLogin />}>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Route>

          <Route element={<ProtectRoutes />}>
            <Route path="/" element={<Dashboard />}>
              <Route path="Task" element={<Task />}></Route>
              <Route path="" element={<Projectpage />}></Route>
            </Route>
          </Route>

          <Route element={<AdminRoute />}>
            {/* <Route path="/admin" element={<Admin />}></Route> */}
          </Route>
          {/* <Route path="/admin/login" element={<Adminlogin />}></Route> */}

        </Routes>

        <ToastContainer />


      </BrowserRouter >
    </>
  )
}

export default App
