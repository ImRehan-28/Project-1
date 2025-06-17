import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/signup'
import Navbar from './Components/common/Navbar'
import ForgotPassword from './pages/ForgotPassword'
import { Toaster } from "react-hot-toast";
import UpdatePassword from './pages/updatePassword'
import OpenRoute from './Components/core/Auth/OpenRoute'
import VerifyEmail from './pages/VerifyEmail'
import AboutPage from './pages/AboutPage'
import ContactUs from './pages/ContactUs'
import Dashboard from './pages/Dashboard'
import MyProfile from './Components/core/Dashboard/MyProfile'
import PrivateRoute from './Components/core/Auth/PrivateRoute'; // Import PrivateRoute here

function App() {

  return (
    <div className='w-screen min-h-screen bg-richblack-900 flex flex-col font-inter
'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/update-password/:id" element=
          {<OpenRoute>   <UpdatePassword />
          </OpenRoute>}
        />
        <Route path="verify-email" element={<OpenRoute><VerifyEmail /></OpenRoute>}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route element=
          {<PrivateRoute>
            <Dashboard />
          </PrivateRoute>
          } >
          <Route path="/dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/settings" element={<Settings/>}/>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
