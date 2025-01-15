import { useState } from 'react';
import CustomButton from './CustomButton';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de registro
    console.log('Register with:', { name, lastName, email, password, confirmPassword });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container" style={{ gap: '1.25rem' }}>
      <div className="input-group" style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Tu nombre"
        />
        <label htmlFor="name">Nombre</label>
      </div>
      <div className="input-group" style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          placeholder="Tu apellido"
        />
        <label htmlFor="lastName">Apellido</label>
      </div>
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
      <div className="input-group" style={{ marginBottom: '2rem' }}>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder="••••••••"
        />
        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
      </div>
      <CustomButton type="submit">Registrarse</CustomButton>
    </form>
  );
};

export default RegisterForm;
