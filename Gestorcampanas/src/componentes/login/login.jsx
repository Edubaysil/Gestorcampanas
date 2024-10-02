// src/Login.js
import React from 'react';
import logo from '../../recursos/logo.png'; // Importamos el logo
import './Login.css'; // Importamos los estilos CSS

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        {/* Placeholder para el logo */}
        <div className="logo-placeholder">
          <img src={logo} alt="Logo" className="logo"/>
        </div>
        
        {/* Formulario de inicio de sesión */}
        <form>
          <h2>Iniciar Sesión</h2>
          
          <div className="input-container">
            <label htmlFor="username">Usuario</label>
            <input type="text" id="username" placeholder="Ingresa tu usuario" required />
          </div>

          <div className="input-container">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Ingresa tu contraseña" required />
          </div>

          <button type="submit" className="login-button">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
