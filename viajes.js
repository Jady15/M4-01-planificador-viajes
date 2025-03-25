// viajes.js
const destinos = [];

const calcularCosto = (destino, transporte) => {
  let costoBase = 0;

  // Costo base por destino
  if (destino === "Paris") {
    costoBase = 500;
  } else if (destino === "Londres") {
    costoBase = 400;
  } else if (destino === "New York") {
    costoBase = 600;
  }

  // Costo adicional por tipo de transporte
  if (transporte === "Avión") {
    costoBase += 200;
  } else if (transporte === "Tren") {
    costoBase += 100;
  }

  return costoBase;
};

const registrarDestino = (destino, fecha, transporte) => {
  const nuevoViaje = {
    destino,
    fecha,
    transporte,
    costo: calcularCosto(destino, transporte)
  };

  destinos.push(nuevoViaje);
  mostrarItinerario();
};

const mostrarItinerario = () => {
    const contenedor = document.getElementById('itinerario');   // Contenedor principal
    contenedor.innerHTML = ''; // Limpiar contenido previo
    
    destinos.forEach(viaje => {
        // Mostrar información del viaje en consola
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Costo: $${viaje.costo}`);
        console.log("---------------------------");

        // Mostrar información del viaje en el HTML
        const viajeElement = document.createElement('div');     // Nuevo contenedor 'div' para los datos del nuevo viaje
        viajeElement.className = 'viaje';                       // Asignación de clase 'viaje' al nuevo 'div'

        // Contenido del 'div' (Párrafos con la información del viaje) 
        viajeElement.innerHTML = `                              
        <p><strong>Destino:</strong> ${viaje.destino}</p>
        <p><strong>Fecha:</strong> ${viaje.fecha}</p>
        <p><strong>Transporte:</strong> ${viaje.transporte}</p>
        <p><strong>Costo:</strong> $${viaje.costo}</p>
        <div class="separador"></div>
        `;
        contenedor.appendChild(viajeElement);   // Inserta el div 'viaje' al final del contenedor principal
  });
};

export { registrarDestino, mostrarItinerario };