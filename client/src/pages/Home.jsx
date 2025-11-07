import { Link } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import './Home.css';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to NoteApp</h1>
        <p>Your personal space for organizing thoughts and ideas</p>
        
        <div className="home-buttons">
          {isAuthenticated ? (
            <Link to="/dashboard" className="btn-primary btn-large">
              Go to Dashboard
            </Link>
          ) : (
            <>
              <Link to="/register" className="btn-primary btn-large">
                Get Started
              </Link>
              <Link to="/login" className="btn-secondary btn-large">
                Login
              </Link>
            </>
          )}
        </div>

        <div className="features">
          <div className="feature">
            <h3>🔒 Secure</h3>
            <p>Your notes are protected with authentication</p>
          </div>
          <div className="feature">
            <h3>☁️ Cloud Sync</h3>
            <p>Sync your notes on demand with a click</p>
          </div>
          <div className="feature">
            <h3>📱 Responsive</h3>
            <p>Access your notes from any device</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;