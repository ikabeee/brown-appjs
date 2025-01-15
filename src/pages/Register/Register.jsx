
import './Register.css'
import RegisterForm from './../../components/RegisterForm';

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
            <a href="#">
              inicia sesión si ya tienes una cuenta
            </a>
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};
