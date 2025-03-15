import React, { useState } from "react";
import { Link } from "react-router-dom";

const Table_sucursales = () => {
  // Datos de ejemplo para la tabla de sucursales
  const sucursales = [
    { id_sucursal: 1, nombre: "Sucursal Centro", direccion: "Calle Principal #123", telefono: "555-1234", estado: "activo" },
    { id_sucursal: 2, nombre: "Sucursal Norte", direccion: "Avenida Norte #456", telefono: "555-5678", estado: "activo" },
    { id_sucursal: 3, nombre: "Sucursal Sur", direccion: "Calle Sur #789", telefono: "555-9101", estado: "inactivo" },
  ];

  // Estado del filtro de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Estilos para los estados
  const statusStyles = {
    activo: "bg-green-500/10 text-green-500",
    inactivo: "bg-red-500/10 text-red-500",
  };

  // Función para manejar la eliminación
  const handleEliminar = (id) => {
    console.log(`Eliminar sucursal con ID: ${id}`);
    // Aquí puedes agregar la lógica para eliminar la sucursal
  };

  // Función para manejar la edición
  const handleEditar = (id) => {
    console.log(`Editar sucursal con ID: ${id}`);
    // Aquí puedes agregar la lógica para editar la sucursal
  };

  // Función para manejar el cambio en el campo de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Función para filtrar las sucursales
  const filteredSucursales = sucursales.filter((sucursal) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      sucursal.id_sucursal.toString().includes(searchLower) ||  // Compara correctamente la ID convertida a string
      sucursal.nombre.toLowerCase().includes(searchLower) ||
      sucursal.direccion.toLowerCase().includes(searchLower) ||
      sucursal.telefono.includes(searchLower) ||
      sucursal.estado.toLowerCase().includes(searchLower)  // Compara correctamente el estado
    );
  });

  return (
    <div>
      <h1 className="text-2xl text-white my-10">Sucursales</h1>

      {/* Botón para agregar nuevo */}
      <div className="mb-6">
        <Link to="/form_sucursal">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Agregar nueva sucursal
          </button>
        </Link>
      </div>

      {/* Campo único de búsqueda */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar por Nombre, Dirección, Teléfono"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 rounded-md w-full"
        />
      </div>

      <div className="bg-secondary-100 p-8 rounded-xl">
        {/* Encabezado de la tabla */}
        <div className="hidden md:grid grid-cols-6 gap-4 mb-10 p-4">
          <h5>ID</h5>
          <h5>Nombre</h5>
          <h5>Dirección</h5>
          <h5>Teléfono</h5>
          <h5>Estado</h5>
          <h5>Acciones</h5>
        </div>

        {/* Filas dinámicas filtradas */}
        {filteredSucursales.map((sucursal, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
              <span>{sucursal.id_sucursal}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Nombre</h5>
              <p>{sucursal.nombre}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Dirección</h5>
              <p>{sucursal.direccion}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Teléfono</h5>
              <span>{sucursal.telefono}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Estado</h5>
              <span className={`py-1 px-2 rounded-lg ${statusStyles[sucursal.estado]}`}>
                {sucursal.estado}
              </span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Acciones</h5>
              <div className="flex gap-2">
                <Link to={`/from_sucursal_edit`}>
                  <button
                    onClick={() => handleEditar(sucursal.id_sucursal)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    Editar
                  </button>
                </Link>
                <button
                  onClick={() => handleEliminar(sucursal.id_sucursal)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table_sucursales;