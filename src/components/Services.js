import "./ServicesStyles.css";

function Services() {
    const tableData = [
        ["EMPRESA", "DESCRIPCION DE OBRA"],
        ["Claro (CTI)", "Centro de Atención (Comodoro Rivadavia)"],
        ["YPF", "Remodelación de Local (Suc. Villa Allende) "],
        ["Córdoba Golf Club", "Iluminaciones Exteriores del Parque"],
        ["Descartables Córdoba", "Instalaciones Integrales de Planta"],
        ["M. Tagle (H) y Cia ", "Mantenimientos Generales"],
        ["Motcor S.A", "Mantenimientos Generales"],
        ["Avant S.A", "Mantenimientos Generales"],
        ["Aupe S.A", "Reparaciones Varias en Taller"],
        ["Parra Automotores", "Instalación de Cabina de Pintura"],
        ["Banco Nación", "Remodelación de Local (Suc. Juan B. Justo) "],
        ["Banco de Córdoba", "Remodelación y Mantenimiento de Locales"],
        ["Universidad Nacional de Córdoba", "Remodelaciones Varias"],
        ["Universidad Católica de Córdoba", "Instalaciones de Nuevo Edificio (Veterinaria)"],
        ["Wal-Mart", "Ampliación de Centro de Servicios (Gomeria)"],
        ["Renault Minuto", "Instalaciones Integrales (Suc. Gauss)"],
        ["Predio Concesionario Tagle", "Instalaciones de Cochera"],
        ["Estudios de Arquitectura", "Viviendas Unifamiliares Integrales. Comercios."],
        ["Pizzería Italia", "Mantenimientos Generales"],
        ["Red Megatone", "Remodelación de Locales y Mantenimientos"],
        ["Escuelas Provinciales", "Instalaciones Nuevas y Mantenimientos"],

        // Agrega aquí el contenido para las demás celdas...
      ];
  return (
    <div className="about-container">
      <h1>Nuestros Servicios</h1>
      <h3 className="section-title">
        No solo nos especializamos en instalaciones nuevas, reparaciones y adiciones eléctricas, detallamos algunos items de nuestra especialización:
      </h3>

      <div className="column-container">
        <ul className="bullet-list">
          <li>Montajes Eléctricos</li>
          <li>Tableros Eléctricos</li>
          <li>Instalaciones de Baja Tensión</li>
          <li>Iluminación interior y Exterior</li>
          <li>Iluminacion de emergencia</li>
          <li>Proyectos Eléctricos</li>
          <li>Instalaciones Especiales</li>
          <li>Mantenimientos Eléctricos</li>
        </ul>
      </div>

      <h3 className="section-title">En nuestros Servicios ofrecemos la realización de Instalaciones eléctricas en los siguientes ámbitos:</h3>
      <div className="column-container">
        <ul className="bullet-list">
          <li>Comerciales</li>
          <li>Industriales</li>
          <li>Hospitales</li>
          <li>Bancos</li>
          <li>Oficinas</li>
          <li>Edificios</li>
          <li>Parques Industriales</li>
          <li>Municipios</li>
        </ul>
      </div>
      <h1>Clientes y Obras</h1>
      <h3>Clientes que confiaron en nuestra calidad y responsabilidad: </h3>

      <table className="content-table">
        <tbody>
          {tableData.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {rowData.map((cellData, columnIndex) => (
                <td key={columnIndex}>{cellData}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Services;