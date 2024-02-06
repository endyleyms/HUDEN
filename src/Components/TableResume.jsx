import React, { useEffect, useState } from 'react';
import { jsPDF } from "jspdf";
import 'jspdf-autotable'
import { useResumeContext } from '../Hooks/useResumeContext';

function TableResume({data}) {
  const {resume, base, edited1, edited2, edited3}= useResumeContext();
  const [baseConcentration, setBaseConcentration]=useState();
  const [fullPrice, setFullPrice]=useState();
  const [patientPrice, setPatientPrice]=useState();
  const dataArray = Object.values(base); //convertir un obj a array
  // Verificar y agregar los elementos al array solo si existen
  if (edited1) dataArray.push(edited1);
  if (edited2) dataArray.push(edited2);
  if (edited3) dataArray.push(edited3);


  //obtener la fecha actual
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0];


  //valores fijos
  const manoObra = 4500;
  const envases= 3000;
  const rateIVA = 1.19

  const calculate=()=>{
  //concentracion base basado en concentracion de activos
  const concentrationBase =()=>{
    const parseedited1 = parseInt(edited1?.concentration, 10)
    const parseedited2 = parseInt(edited2?.concentration, 10)
    const parseedited3 = parseInt(edited3?.concentration, 10)
    const sumConcentrations = (parseedited1 || 0) + (parseedited2|| 0) + (parseedited3|| 0);
    let baseConcentration = 0
    if(sumConcentrations >= resume?.Presentacion){
      baseConcentration = 0
    }else{
      baseConcentration = resume?.Presentacion - sumConcentrations
    }
    const  basePresentacion = (baseConcentration * resume?.Presentacion)/100
    return { baseConcentration, basePresentacion };
  }
  const { baseConcentration, basePresentacion } = concentrationBase();
  setBaseConcentration(baseConcentration)

    //calculo por item = presentacion y precio
    const dataresult = dataArray?.map((item)=> {
      const parse = parseInt(item?.concentration, 10) //falta la concentracion de la crema o base
      const itemPresentation= (parse * resume?.Presentacion)/100
      const price =  item?.price * itemPresentation
      return price
    })
    //suma de los precios
    const totalPrice = dataresult.reduce((accumulator, currentValue) => {
      return accumulator + currentValue; // Devolver el valor acumulado en cada iteración
    }, basePresentacion); // El segundo parámetro de reduce es el valor inicial del acumulador

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
    doc.text(`Paciente: ${resume?.Paciente}`, 20,20)
    doc.text(`Doctor: ${resume?.Doctor}`, 20,30)

    //crear la tabla
    const columns =['Nombre', 'Concentración', 'Unidad']
    const tableData = [];

    // Agregar datos de base a la tabla
    tableData.push([base?.base?.name, base?.base?.unit, `${baseConcentration}%`]);

    // Verificar y agregar datos de edited1, edited2 y edited3 a la tabla
    if (edited1) tableData.push([edited1.name, edited1.unit, `${edited1.concentration}%`]);
    if (edited2) tableData.push([edited2.name, edited2.unit, `${edited2.concentration}%`]);
    if (edited3) tableData.push([edited3.name, edited3.unit, `${edited3.concentration}%`]);
    // Agregar fullPrice y patientPrice al array de datos de la tabla
    tableData.push(['Precio full', fullPrice?.toLocaleString('es-CO', {style: 'currency',currency: 'COP'})]);
    tableData.push(['Precio Paciente',  patientPrice?.toLocaleString('es-CO', {style: 'currency',currency: 'COP'})]);
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
      <ul className="table-responsive list-group list-group-horizontal">
        <li className="list-group-item" style={{width: '30%'}}><strong>Fecha:</strong>  {formattedDate}</li>
        <li className="list-group-item" style={{width: '30%'}}><strong>Paciente:</strong>  {resume?.Paciente}</li>
        <li className="list-group-item" style={{width: '30%'}}><strong>Doctor:</strong>  {resume?.Doctor}</li>
        <li className="list-group-item" style={{width: '30%'}}> <strong>Presentacion:</strong>  {resume?.Presentacion}</li>
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
         <tr>
            <td>{base?.base?.name}</td>
            <td>{base?.base?.unit}</td>
            <td>{baseConcentration}%</td>
          </tr>
          {edited1 &&
          <tr>
            <td>{edited1?.name}</td>
            <td>{edited1?.unit}</td>
            <td>{edited1?.concentration}%</td>
          </tr>
          }
          {edited2 &&
          <tr>
            <td>{edited2?.name}</td>
            <td>{edited2?.unit}</td>
            <td>{edited2?.concentration}%</td>
          </tr>
          }
          {edited3 &&
            <tr>
              <td>{edited3?.name}</td>
              <td>{edited3?.unit}</td>
              <td>{edited3?.concentration}%</td>
            </tr>
          }
        </tbody>
        </table>
        <ul className="list-group list-group-vertical">
          <li className="list-group-item"> <strong>Fullprice: </strong>{fullPrice?.toLocaleString('es-CO', {style: 'currency',currency: 'COP'})} COP</li>
          <li className="list-group-item"> <strong>Precio Paciente: </strong>{patientPrice?.toLocaleString('es-CO', {style: 'currency',currency: 'COP'})} COP</li>
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
