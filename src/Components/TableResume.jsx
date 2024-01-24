import React from 'react'

function TableResume({data}) {
  const dataArray = Object.values(data); //convertir un obj a array
  const sumaPrecios = Object.values(data).reduce((acumulador, elemento) => {
    // Convertir el precio a un número antes de sumarlo
    const precio = parseFloat(elemento.price);
    // Verificar si el precio es un número válido
    if (!isNaN(precio)) {
      acumulador += precio;
    }

    return acumulador;
  }, 0);
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
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Categoría</th>
            <th scope="col">Unidad</th>
            <th scope="col">Concentración</th>
          </tr>
        </thead>
        <tbody>
        {dataArray.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td>{item.unidad}</td>
            <td>{item.concentracion}</td>
          </tr>
        ))}
          <span className='list-group-item'> <strong>Total:{sumaPrecios} COP</strong>  </span>
        </tbody>
          <button type="button" className="btn text-light" data-bs-toggle="modal" style={{backgroundColor:'#3E0070', position: 'fixed', bottom: 20, right: 10}} >Enviar Cotización</button>
        </table>
      </div>
    </div>
  )
}

export default TableResume
