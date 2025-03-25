// app.js
import { registrarDestino } from './viajes.js';

const iniciarApp = () => {
  const form = document.getElementById('form-viaje');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const destino = document.getElementById('destino').value;
    const transporte = document.getElementById('transporte').value;
    const fecha = document.getElementById('fecha').value;
    
    if (destino && transporte && fecha) {
      registrarDestino(destino, fecha, transporte);
      form.reset();
    }
  });
};

// Ejecutar la aplicación
iniciarApp();