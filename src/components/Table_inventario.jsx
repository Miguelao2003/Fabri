import React, { useState } from "react";
import { Link } from "react-router-dom";

const Table_inventario = () => {
  // Datos de ejemplo para la tabla de inventario
  const inventario = [
    { id_inventario: 1, id_producto: 101, id_sucursal: 1, stock: 50, stock_minimo: 10, fecha_actualizacion: "2024-02-10 10:30:00" },
    { id_inventario: 2, id_producto: 102, id_sucursal: 2, stock: 20, stock_minimo: 5, fecha_actualizacion: "2024-02-09 15:45:00" },
    { id_inventario: 3, id_producto: 103, id_sucursal: 1, stock: 5, stock_minimo: 2, fecha_actualizacion: "2024-02-08 08:20:00" },
  ];

  // Estado del filtro de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Función para manejar la eliminación
  const handleEliminar = (id) => {
    console.log(`Eliminar inventario con ID: ${id}`);
  };

  // Función para manejar la edición
  const handleEditar = (id) => {
    console.log(`Editar inventario con ID: ${id}`);
  };

  // Función para manejar el cambio en el campo de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Función para filtrar los inventarios
  const filteredInventario = inventario.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      item.id_inventario.toString().includes(searchLower) ||
      item.id_producto.toString().includes(searchLower) ||
      item.id_sucursal.toString().includes(searchLower) ||
      item.stock.toString().includes(searchLower) ||
      item.stock_minimo.toString().includes(searchLower) ||
      item.fecha_actualizacion.includes(searchLower)
    );
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl text-white mb-6">Inventario</h1>

      <div className="mb-6">
        <Link to="/form_inventario">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Agregar nuevo inventario
          </button>
        </Link>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar por ID, Producto, Sucursal, Stock, Fecha"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 rounded-md w-full"
        />
      </div>

      <div className="bg-secondary-100 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-7 gap-4 mb-10 p-4">
          <h5 className="font-bold">ID</h5>
          <h5 className="font-bold">ID Producto</h5>
          <h5 className="font-bold">ID Sucursal</h5>
          <h5 className="font-bold">Stock</h5>
          <h5 className="font-bold">Stock Mínimo</h5>
          <h5 className="font-bold">Fecha Actualización</h5>
          <h5 className="font-bold">Acciones</h5>
        </div>

        {filteredInventario.map((item) => (
          <div key={item.id_inventario} className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-lg">
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
              <span>{item.id_inventario}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID Producto</h5>
              <p>{item.id_producto}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID Sucursal</h5>
              <p>{item.id_sucursal}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Stock</h5>
              <p>{item.stock}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Stock Mínimo</h5>
              <p>{item.stock_minimo}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Fecha Actualización</h5>
              <span>{item.fecha_actualizacion}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Acciones</h5>
              <div className="flex justify-center gap-2">
                <Link to={`/form_inventario_edit`}>
                  <button
                    onClick={() => handleEditar(item.id_inventario)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    Editar
                  </button>
                </Link>
                <button
                  onClick={() => handleEliminar(item.id_inventario)}
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

export default Table_inventario;