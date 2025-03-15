import React, { useState } from "react";
import { Link } from "react-router-dom";

const Table_venta = () => {
  // Datos de ejemplo para la tabla de ventas
  const ventas = [
    { id_venta: 1, id_cliente: 101, id_sucursal: 1, id_caja: 201, fecha_venta: "2024-02-10 10:30:00", total: 150.75, estado: "pagado" },
    { id_venta: 2, id_cliente: 102, id_sucursal: 2, id_caja: 202, fecha_venta: "2024-02-09 15:45:00", total: 200.50, estado: "pendiente" },
    { id_venta: 3, id_cliente: 103, id_sucursal: 1, id_caja: 203, fecha_venta: "2024-02-08 08:20:00", total: 99.99, estado: "cancelado" },
  ];

  // Estado del filtro de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Estilos para los estados de venta
  const estadoStyles = {
    pendiente: "bg-yellow-500/10 text-yellow-500",
    pagado: "bg-green-500/10 text-green-500",
    cancelado: "bg-red-500/10 text-red-500",
  };

  // Función para manejar la eliminación
  const handleEliminar = (id) => {
    console.log(`Eliminar venta con ID: ${id}`);
  };

  // Función para manejar la edición
  const handleEditar = (id) => {
    console.log(`Editar venta con ID: ${id}`);
  };

  // Función para manejar el cambio en el campo de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Función para filtrar las ventas
  const filteredVentas = ventas.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      item.id_venta.toString().includes(searchLower) ||
      item.id_cliente.toString().includes(searchLower) ||
      item.id_sucursal.toString().includes(searchLower) ||
      item.id_caja.toString().includes(searchLower) ||
      item.fecha_venta.includes(searchLower) ||
      item.total.toString().includes(searchLower) ||
      item.estado.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl text-white mb-6">Ventas</h1>

      <div className="mb-6">
        <Link to="/form_venta">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Agregar nueva venta
          </button>
        </Link>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar por ID, Cliente, Sucursal, Caja, Fecha, Total, Estado"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 rounded-md w-full"
        />
      </div>

      <div className="bg-secondary-100 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-8 gap-4 mb-10 p-4">
          <h5 className="font-bold">ID</h5>
          <h5 className="font-bold">ID Cliente</h5>
          <h5 className="font-bold">ID Sucursal</h5>
          <h5 className="font-bold">ID Caja</h5>
          <h5 className="font-bold">Fecha Venta</h5>
          <h5 className="font-bold">Total</h5>
          <h5 className="font-bold">Estado</h5>
          <h5 className="font-bold">Acciones</h5>
        </div>

        {filteredVentas.map((item) => (
          <div key={item.id_venta} className="grid grid-cols-1 md:grid-cols-8 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-lg">
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
              <span>{item.id_venta}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID Cliente</h5>
              <p>{item.id_cliente}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID Sucursal</h5>
              <p>{item.id_sucursal}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID Caja</h5>
              <p>{item.id_caja}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Fecha Venta</h5>
              <span>{item.fecha_venta}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Total</h5>
              <p>${item.total.toFixed(2)}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Estado</h5>
              <span className={`py-1 px-2 rounded-lg ${estadoStyles[item.estado]}`}>
                {item.estado}
              </span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Acciones</h5>
              <div className="flex justify-center gap-2">
                <Link to={`/form_venta_edit`}>
                  <button
                    onClick={() => handleEditar(item.id_venta)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    Editar
                  </button>
                </Link>
                <button
                  onClick={() => handleEliminar(item.id_venta)}
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

export default Table_venta;