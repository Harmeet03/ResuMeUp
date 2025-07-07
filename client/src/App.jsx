import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Terms from './pages/Terms.jsx'
import Privacy from './pages/Privacy.jsx'
import Sign_In from './pages/Sign_In.jsx'
import Sign_Up from './pages/Sign_Up.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'
import AdminRoute from './routes/AdminRoute.jsx'
import PublicRoute from './routes/PublicRoute.jsx'
import Admin from './pages/Admin.jsx'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <PublicRoute>
              <Home/>
            </PublicRoute>
          } />
          <Route path="/terms-condition" element={<Terms/>} />
          <Route path="/privacy-policy" element={<Privacy/>} />
          <Route path='/sign-in' element={
            <PublicRoute>
              <Sign_In/>
            </PublicRoute>
          }/>
          <Route path='/sign-up' element={
            <PublicRoute>
              <Sign_Up/>
            </PublicRoute>
          }/>
          <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }/>
          <Route path='/admin' element={
            <AdminRoute>
              <Admin/>
            </AdminRoute>
          }/>
        </Routes>
      </Router>
    </>
  )
}

export default App
