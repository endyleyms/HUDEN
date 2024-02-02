import React, { useEffect, useState } from 'react';
import { jsPDF } from "jspdf";
import 'jspdf-autotable'
import { useResumeContext } from '../Hooks/useResumeContext';

function TableResume({data}) {
  const {resume, edited1, edited2, edited3}= useResumeContext();
  const [fullPrice, setFullPrice]=useState();
  const [patientPrice, setPatientPrice]=useState();
  const dataArray = Object.values(data); //convertir un obj a array
  dataArray.push(edited1, edited2, edited3)
  console.log('data', data, 'dataarray', dataArray)
  //obtener la fecha actual
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0];


  //valores fijos
  const manoObra = 4500;
  const envases= 3000;
  const rateIVA = 1.19

  const calculate=()=>{
    //calculo por item = presentacion y precio
    const dataresult = dataArray.map((item)=> {
      const itemPresentation= (item.concentration * dataArray[0].Presentacion)/100
      const price =  item.Price * itemPresentation
      return price
    })
    //suma de los precios
    const totalPrice = dataresult.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    //suma el envase 1
    const sumEnvase= envases + totalPrice
    //suma el IVA 2
    const dataIVA= sumEnvase * rateIVA
    //Total 3
    const total = sumEnvase + dataIVA + manoObra
    // Establecer los precios finales
    setFullPrice((total* 3)+2000)
    setPatientPrice(total*2.5)
  }

  useEffect(() => {
    calculate()
  },[data])


  const generatePDF = () => {
    // Crear un nuevo documento PDF
    const doc = new jsPDF();
  //cuerpo del documento
    doc.text(`Fecha: ${formattedDate}`, 20,10)
    doc.text(`Paciente: ${dataArray[0]?.Paciente}`, 20,20)
    doc.text(`Doctor: ${dataArray[0]?.Doctor}`, 20,30)

    //crear la tabla
    const columns =['Nombre', 'Concentración', 'Unidad']
    const tableData = dataArray.map(item => [item.name, item.concentration, item.unit]);
    // tableData.push([`${edited1?.name}`, `${edited1?.concentration}`, `${edited1?.unit}` ]);
    // tableData.push([`${edited2?.name}`, `${edited2?.concentration}`, `${edited2?.unit}` ]);
    // tableData.push([`${edited3?.name}`, `${edited3?.concentration}`, `${edited3?.unit}` ]);
    // Agregar fullPrice y patientPrice al array de datos de la tabla
    tableData.push(['Precio full', fullPrice]);
    tableData.push(['Precio Paciente',  patientPrice]);
    doc.autoTable({
      startY: 50,
      head: [columns],
      body: tableData,

    })
    //guardar el pdf
    doc.save(`Resume_${formattedDate}.pdf`)
  };

  const handleGeneratePDF = () => {
    generatePDF();
  };

  return (
    <div style={{marginLeft: '10%'}}>
      <ul className="list-group list-group-horizontal">
      <li className="list-group-item"><strong>Fecha:</strong>  {formattedDate}</li>
        <li className="list-group-item"><strong>Paciente:</strong>  {resume?.Paciente}</li>
        <li className="list-group-item"><strong>Doctor:</strong>  {resume?.Doctor}</li>
        <li className="list-group-item"> <strong>Presentacion:</strong>  {resume?.Presentacion}</li>
      </ul>
      <div className="table-responsive">
        <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Unidad</th>
            <th scope="col">Concentración</th>
          </tr>
        </thead>
        <tbody>
        {dataArray?.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.unit}</td>
            <td>{item.concentration}</td>
          </tr>
        ))}
        {/* <tr >
          <td>{edited1?.name}</td>
          <td>{edited1?.unit}</td>
          <td>{edited1?.concentration}</td>
        </tr>
        <tr >
          <td>{edited2?.name}</td>
          <td>{edited2?.unit}</td>
          <td>{edited2?.concentration}</td>
        </tr>
        <tr >
          <td>{edited3?.name}</td>
          <td>{edited3?.unit}</td>
          <td>{edited3?.concentration}</td>
        </tr> */}
        </tbody>
        </table>
        <ul className="list-group list-group-vertical">
          <li className="list-group-item"> <strong>Fullprice:</strong>  {fullPrice}</li>
          <li className="list-group-item"> <strong>Precio Paciente:</strong>  {patientPrice}</li>
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
