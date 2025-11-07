import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import  { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='App'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route 
              path='/dashboard'
              element={
                <ProtectedRoute>
                  <h1 style={{padding: '40px',textAlign: 'center'}}>
                    Dashboard - Coming Next!
                  </h1>
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}
export default App ; 