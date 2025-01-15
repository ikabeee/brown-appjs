import { useState } from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({ type = 'button', onClick, children, ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="custom-button"
      {...props}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Iniciar sesión con:', email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container" style={{ gap: '1.25rem' }}>
      <div className="input-group" style={{ marginBottom: '2rem' }}>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="tu@ejemplo.com"
        />
        <label htmlFor="email">Correo Electrónico</label>
      </div>
      <div className="input-group" style={{ marginBottom: '2rem' }}>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="••••••••"
        />
        <label htmlFor="password">Contraseña</label>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem',
        }}
      >
        <div className="checkbox-group">
          <input id="remember-me" name="remember-me" type="checkbox" />
          <label htmlFor="remember-me">Recuérdame</label>
        </div>
        <div className="forgot-password">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
      <CustomButton type="submit">Iniciar Sesión</CustomButton>
    </form>
  );
};

export default LoginForm;
