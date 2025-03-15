import React, { useState } from "react";
import { Link } from "react-router-dom";

const Table_proveedor = () => {
  // Datos de ejemplo para la tabla de proveedores
  const proveedores = [
    { id_proveedor: 1, nombre: "Proveedor A", descripcion: "Distribuidor de tecnología", contacto: "Juan Pérez", telefono: "555-1234" },
    { id_proveedor: 2, nombre: "Proveedor B", descripcion: "Suministros de oficina", contacto: "María López", telefono: "555-5678" },
    { id_proveedor: 3, nombre: "Proveedor C", descripcion: "Materiales de construcción", contacto: "Carlos Gómez", telefono: "555-9101" },
  ];

  // Estado del filtro de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Función para manejar la eliminación
  const handleEliminar = (id) => {
    console.log(`Eliminar proveedor con ID: ${id}`);
  };

  // Función para manejar la edición
  const handleEditar = (id) => {
    console.log(`Editar proveedor con ID: ${id}`);
  };

  // Función para manejar el cambio en el campo de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Función para filtrar los proveedores
  const filteredProveedores = proveedores.filter((proveedor) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      proveedor.id_proveedor.toString().includes(searchLower) ||
      proveedor.nombre.toLowerCase().includes(searchLower) ||
      proveedor.descripcion.toLowerCase().includes(searchLower) ||
      proveedor.contacto.toLowerCase().includes(searchLower) ||
      proveedor.telefono.includes(searchLower)
    );
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl text-white mb-6">Proveedores</h1>

      <div className="mb-6">
        <Link to="/form_proveedor">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Agregar nuevo proveedor
          </button>
        </Link>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar por Nombre, Descripción, Contacto, Teléfono"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 rounded-md w-full"
        />
      </div>

      <div className="bg-secondary-100 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-6 gap-4 mb-10 p-4">
          <h5>ID</h5>
          <h5>Nombre</h5>
          <h5>Descripción</h5>
          <h5>Contacto</h5>
          <h5>Teléfono</h5>
          <h5>Acciones</h5>
        </div>

        {filteredProveedores.map((proveedor) => (
          <div key={proveedor.id_proveedor} className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-lg">
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
              <span>{proveedor.id_proveedor}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Nombre</h5>
              <p>{proveedor.nombre}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Descripción</h5>
              <p>{proveedor.descripcion}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Contacto</h5>
              <p>{proveedor.contacto}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Teléfono</h5>
              <span>{proveedor.telefono}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Acciones</h5>
              <div className="flex gap-2">
                <Link to={`/form_proveedor_edit`}>
                  <button
                    onClick={() => handleEditar(proveedor.id_proveedor)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    Editar
                  </button>
                </Link>
                <button
                  onClick={() => handleEliminar(proveedor.id_proveedor)}
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

export default Table_proveedor;