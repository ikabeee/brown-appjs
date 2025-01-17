import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = () => {

    navigate('/');
  };

  const password = watch('password');

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form-container"
      style={{ gap: '1.25rem' }}
    >
      <div className="input-group" style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          id="name"
          placeholder="Tu nombre"
          {...register('name', {
            required: 'El nombre es obligatorio.',
            minLength: {
              value: 2,
              message: 'El nombre debe tener al menos 2 caracteres.',
            },
          })}
        />
        <label htmlFor="name">Nombre</label>
        {errors.name && (
          <p style={{ color: 'red', fontSize: '0.875rem' }}>{errors.name.message}</p>
        )}
      </div>
      <div className="input-group" style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          id="lastName"
          placeholder="Tu apellido"
          {...register('lastName', {
            required: 'El apellido es obligatorio.',
            minLength: {
              value: 2,
              message: 'El apellido debe tener al menos 2 caracteres.',
            },
          })}
        />
        <label htmlFor="lastName">Apellido</label>
        {errors.lastName && (
          <p style={{ color: 'red', fontSize: '0.875rem' }}>{errors.lastName.message}</p>
        )}
      </div>
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
          <p style={{ color: 'red', fontSize: '0.875rem' }}>{errors.email.message}</p>
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
          <p style={{ color: 'red', fontSize: '0.875rem' }}>{errors.password.message}</p>
        )}
      </div>
      <div className="input-group" style={{ marginBottom: '2rem' }}>
        <input
          type="password"
          id="confirmPassword"
          placeholder="••••••••"
          {...register('confirmPassword', {
            required: 'Debes confirmar tu contraseña.',
            validate: (value) =>
              value === password || 'Las contraseñas no coinciden.',
          })}
        />
        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
        {errors.confirmPassword && (
          <p style={{ color: 'red', fontSize: '0.875rem' }}>
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <CustomButton type="submit">Registrarse</CustomButton>
    </form>
  );
};

export default RegisterForm;
