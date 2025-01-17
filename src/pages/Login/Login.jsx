import { Link } from 'react-router';
import './Login.css';
import LoginForm from '/src/components/LoginForm';

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h2 className="login-title">
            Iniciar Sesión
          </h2>
          <p className="login-subtitle">
            O{' '}
            <Link to="/register">
              regístrate si aún no tienes una cuenta
            </Link>
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};


