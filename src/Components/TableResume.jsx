import React from 'react';
import { jsPDF } from "jspdf";

function TableResume({data}) {
  const dataArray = Object.values(data); //convertir un obj a array
  const manoObra = 4500;
  const envases= 3000;
  const totalMateriasPrimas = 9300
  const IVA = (envases + totalMateriasPrimas)*1.19
  const sumaPrecios = Object.values(data).reduce((acumulador, elemento) => {
    // Convertir el precio a un número antes de sumarlo
    const precio = parseFloat(elemento.price);
    // Verificar si el precio es un número válido
    if (!isNaN(precio)) {
      acumulador += precio;
    }

    return acumulador;
  }, 0);

  const generatePDF = () => {
    // Crear un nuevo documento PDF
    const doc = new jsPDF();
    const content = document.documentElement.innerHTML;

    // Convertir la estructura HTML a PDF
    doc.html(content, {
      callback: function (doc) {
        // Descargar el PDF
        doc.save('resumen.pdf');
      },
      x: 10,
      y: 10
    });
  };

  const handleGeneratePDF = () => {
    generatePDF();
  };

  return (
    <div>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item"><strong>Paciente:</strong>  {dataArray[0].Paciente}</li>
        <li class="list-group-item"><strong>Doctor:</strong>  {dataArray[0].Doctor}</li>
        <li class="list-group-item"> <strong>Presentacion:</strong>  {dataArray[0].Presentacion}</li>
      </ul>
      <div className="table-responsive">
        <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Unidad</th>
            <th scope="col">Concentración</th>
            <th scope="col">Cantidad</th>
            {/* falta la cantidad */}
          </tr>
        </thead>
        <tbody>
        {dataArray.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.unit}</td>
            <td>{item.concentracion}</td>
            <td>{item.cantidad} {item.unidad}</td>
          </tr>
        ))}
          <span className='list-group-item'> <strong>Total:{sumaPrecios} COP</strong>  </span>
        </tbody>
        </table>
        <ul class="list-group list-group-vertical">
        <li class="list-group-item"><strong>PrecioPaciente:</strong>  {dataArray[0].Paciente}</li>
        <li class="list-group-item"><strong>Precio Tienda:</strong>  {dataArray[0].Doctor}</li>
        <li class="list-group-item"> <strong>Presentacion:</strong>  {dataArray[0].Presentacion}</li>
      </ul>
      </div>
      <button
      onClick={handleGeneratePDF}
      type="button"
      className="btn text-light"
      data-bs-toggle="modal"
      style={{backgroundColor:'#3E0070', position: 'fixed', bottom: 20, right: 10}} >
      Generar PDF
      </button>
    </div>
  )
}

export default TableResume
