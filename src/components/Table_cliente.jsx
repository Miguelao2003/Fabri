import React, { useState } from "react";
import { Link } from "react-router-dom";

const Table_cliente = () => {
  // Datos de ejemplo para la tabla de clientes
  const clientes = [
    { id_cliente: 1, nombre: "Juan Pérez", direccion: "Calle Falsa 123", telefono: "555-1234", email: "juan@example.com", fecha_registro: "2024-01-15" },
    { id_cliente: 2, nombre: "María López", direccion: "Av. Central 456", telefono: "555-5678", email: "maria@example.com", fecha_registro: "2024-02-01" },
    { id_cliente: 3, nombre: "Carlos Gómez", direccion: "Calle Sur 789", telefono: "555-9101", email: "carlos@example.com", fecha_registro: "2024-03-10" },
  ];

  // Estado del filtro de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Función para manejar la eliminación
  const handleEliminar = (id) => {
    console.log(`Eliminar cliente con ID: ${id}`);
    // Aquí puedes agregar la lógica para eliminar el cliente
  };

  // Función para manejar la edición
  const handleEditar = (id) => {
    console.log(`Editar cliente con ID: ${id}`);
    // Aquí puedes agregar la lógica para editar el cliente
  };

  // Función para manejar el cambio en el campo de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Función para filtrar los clientes
  const filteredClientes = clientes.filter((cliente) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      cliente.id_cliente.toString().includes(searchLower) ||
      cliente.nombre.toLowerCase().includes(searchLower) ||
      cliente.direccion.toLowerCase().includes(searchLower) ||
      cliente.telefono.includes(searchLower) ||
      cliente.email.toLowerCase().includes(searchLower) ||
      cliente.fecha_registro.includes(searchLower)
    );
  });

  return (
    <div>
      <h1 className="text-2xl text-white my-10">Clientes</h1>

      {/* Botón para agregar nuevo */}
      <div className="mb-6">
        <Link to="/form_cliente">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Agregar nuevo cliente
          </button>
        </Link>
      </div>

      {/* Campo único de búsqueda */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar por Nombre, Dirección, Teléfono, Email"
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
          <h5>Email</h5>
          <h5>Acciones</h5>
        </div>

        {/* Filas dinámicas filtradas */}
        {filteredClientes.map((cliente, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
              <span>{cliente.id_cliente}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Nombre</h5>
              <p>{cliente.nombre}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Dirección</h5>
              <p>{cliente.direccion}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Teléfono</h5>
              <span>{cliente.telefono}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Email</h5>
              <span>{cliente.email}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Acciones</h5>
              <div className="flex gap-2">
                <Link to={`/form_cliente_edit`}>
                  <button
                    onClick={() => handleEditar(cliente.id_cliente)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    Editar
                  </button>
                </Link>
                <button
                  onClick={() => handleEliminar(cliente.id_cliente)}
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

export default Table_cliente;
