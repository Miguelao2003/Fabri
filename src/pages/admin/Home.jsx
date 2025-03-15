import React, { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import CardTicket from "../../components/CardTicket";
import axios from "axios"; // Importamos axios

const Home = () => {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadHistory, setUploadHistory] = useState([]); // Estado para almacenar el historial de archivos subidos

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles(uploadedFiles);
  };

  const handleFileSubmit = async () => {
    if (files.length === 0) {
      alert("Por favor, seleccione un archivo antes de subir.");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("file", file); // Añadimos el archivo al FormData
    });

    try {
      // Realizamos la solicitud POST a la API de Flask
      const response = await axios.post("http://localhost:8000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Aseguramos que el tipo de contenido sea 'multipart/form-data'
        },
      });

      // Al recibir una respuesta exitosa, agregamos el archivo subido a la tabla de historial
      const newHistory = files.map((file) => ({
        name: file.name,
        date: new Date().toLocaleString(), // Fecha de subida
        url: response.data.url,
      }));

      setUploadHistory((prevHistory) => [...prevHistory, ...newHistory]);
      alert("Archivo subido con éxito.");
      setFiles([]); // Limpiamos los archivos seleccionados
    } catch (error) {
      console.error("Error al subir el archivo:", error);
      alert("Hubo un error al subir el archivo.");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-white">Análisis de la Empresa</h1>
        <div className="flex items-center gap-2 text-3xl">
          <RiArrowLeftSLine className="hover:cursor-pointer hover:text-white transition-colors" />
          <RiArrowRightSLine className="hover:cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
      
      <input 
        type="file" 
        multiple 
        onChange={handleFileUpload} 
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <button 
        onClick={handleFileSubmit} 
        className="mb-4 gap-8 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Subir Archivo
      </button>
      
      <h2 className="text-white text-xl mt-4">Archivos Subidos:</h2>
      <ul className="mb-4 text-white">
        {uploadedFiles.map((file, index) => (
          <li key={index} className="border p-2 mt-2 rounded bg-gray-800">
            <a href={file} target="_blank" rel="noopener noreferrer">{file}</a>
          </li>
        ))}
      </ul>

      {/* Tabla de historial de archivos subidos */}
      <h2 className="text-white text-xl mt-6">Historial de Archivos Subidos:</h2>
      <table className="min-w-full text-white mt-4 border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Nombre del Archivo</th>
            <th className="border p-2">Fecha de Subida</th>
            <th className="border p-2">Enlace</th>
          </tr>
        </thead>
        <tbody>
          {uploadHistory.map((entry, index) => (
            <tr key={index}>
              <td className="border p-2">{entry.name}</td>
              <td className="border p-2">{entry.date}</td>
              <td className="border p-2">
                <a href={entry.url} target="_blank" rel="noopener noreferrer">
                  {entry.url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <CardTicket category="sucursales" total="15" text="Total de Sucursales" />
        <CardTicket category="clientes" total="5000" text="Clientes Registrados" />
        <CardTicket category="ventas" total="1200" text="Ventas Realizadas" />
        <CardTicket category="ingresos" total="$15,000" text="Ingresos Totales" />
        <CardTicket category="inventario" total="350" text="Stock en Inventario" />
        <CardTicket category="productos" total="75" text="Productos en Catálogo" />
        <CardTicket category="cajas" total="3" text="Cajas Activas" />
      </div>
    </div>
  );
};

export default Home;
