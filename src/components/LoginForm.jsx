import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form-container"
      style={{ gap: '1.25rem' }}
    >
      <div className="input-group" style={{ marginBottom: '2rem' }}>
        <input
          type="email"
          id="email"
          placeholder="tu@ejemplo.com"
          {...register('email', {
            required: 'El correo electrónico es obligatorio.',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Ingresa un correo electrónico válido.',
            },
          })}
        />
        <label htmlFor="email">Correo Electrónico</label>
        {errors.email && (
          <p style={{ color: 'red', fontSize: '0.875rem' }}>
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="input-group" style={{ marginBottom: '2rem' }}>
        <input
          type="password"
          id="password"
          placeholder="••••••••"
          {...register('password', {
            required: 'La contraseña es obligatoria.',
            minLength: {
              value: 6,
              message: 'La contraseña debe tener al menos 6 caracteres.',
            },
          })}
        />
        <label htmlFor="password">Contraseña</label>
        {errors.password && (
          <p style={{ color: 'red', fontSize: '0.875rem' }}>
            {errors.password.message}
          </p>
        )}
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
