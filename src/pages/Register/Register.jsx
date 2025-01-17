
import './Register.css'
import RegisterForm from './../../components/RegisterForm';
import { Link } from 'react-router';

export default function Register() {
  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-header">
          <h2 className="register-title">
            Crear Cuenta
          </h2>
          <p className="register-subtitle">
            O{' '}
            <Link to="/login">
              inicia sesión si ya tienes una cuenta
            </Link>
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};
