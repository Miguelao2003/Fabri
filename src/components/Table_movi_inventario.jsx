import React, { useState } from "react";
import { Link } from "react-router-dom";

const Table_movi_inventario = () => {
  // Datos de ejemplo para la tabla de movimientos de inventario
  const movimientos = [
    { id_movimiento: 1, id_producto: 101, id_sucursal: 1, cantidad: 20, fecha: "2024-02-10 10:30:00", observacion: "Ingreso de stock", tipo: "entrada" },
    { id_movimiento: 2, id_producto: 102, id_sucursal: 2, cantidad: 5, fecha: "2024-02-09 15:45:00", observacion: "Venta de producto", tipo: "salida" },
    { id_movimiento: 3, id_producto: 103, id_sucursal: 1, cantidad: 10, fecha: "2024-02-08 08:20:00", observacion: "Reposición de inventario", tipo: "entrada" },
  ];

  // Estado del filtro de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Estilos para los tipos de movimiento
  const tipoStyles = {
    entrada: "bg-green-500/10 text-green-500",
    salida: "bg-red-500/10 text-red-500",
  };

  // Función para manejar la eliminación
  const handleEliminar = (id) => {
    console.log(`Eliminar movimiento con ID: ${id}`);
  };

  // Función para manejar la edición
  const handleEditar = (id) => {
    console.log(`Editar movimiento con ID: ${id}`);
  };

  // Función para manejar el cambio en el campo de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Función para filtrar los movimientos
  const filteredMovimientos = movimientos.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      item.id_movimiento.toString().includes(searchLower) ||
      item.id_producto.toString().includes(searchLower) ||
      item.id_sucursal.toString().includes(searchLower) ||
      item.cantidad.toString().includes(searchLower) ||
      item.fecha.includes(searchLower) ||
      item.observacion.toLowerCase().includes(searchLower) ||
      item.tipo.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl text-white mb-6">Movimientos de Inventario</h1>

      <div className="mb-6">
        <Link to="/form_movimiento">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Agregar nuevo movimiento
          </button>
        </Link>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar por ID, Producto, Sucursal, Cantidad, Fecha, Tipo"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 rounded-md w-full"
        />
      </div>

      <div className="bg-secondary-100 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-9 gap-4 mb-10 p-4">
          <h5 className="font-bold">ID</h5>
          <h5 className="font-bold">ID Producto</h5>
          <h5 className="font-bold">ID Sucursal</h5>
          <h5 className="font-bold">Cantidad</h5>
          <h5 className="font-bold">Fecha</h5>
          <h5 className="font-bold">Observación</h5>
          <h5 className="font-bold">Tipo</h5>
          <h5 className="font-bold">Acciones</h5>
        </div>

        {filteredMovimientos.map((item) => (
          <div key={item.id_movimiento} className="grid grid-cols-1 md:grid-cols-9 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-lg">
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
              <span>{item.id_movimiento}</span>
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
              <h5 className="md:hidden text-white font-bold mb-2">Cantidad</h5>
              <p>{item.cantidad}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Fecha</h5>
              <span>{item.fecha}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Observación</h5>
              <p>{item.observacion}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Tipo</h5>
              <span className={`py-1 px-2 rounded-lg ${tipoStyles[item.tipo]}`}>
                {item.tipo}
              </span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Acciones</h5>
              <div className="flex gap-2">
                <Link to={`/form_movimiento_edit`}>
                  <button
                    onClick={() => handleEditar(item.id_movimiento)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    Editar
                  </button>
                </Link>
                <button
                  onClick={() => handleEliminar(item.id_movimiento)}
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

export default Table_movi_inventario;