import React, { useState } from "react";
import { Link } from "react-router-dom";

const Table_detalle_venta = () => {
  // Datos de ejemplo para la tabla de detalles de ventas
  const detallesVentas = [
    { id_detalle: 1, id_venta: 101, id_producto: 201, cantidad: 2, precio_unitario: 50.00, subtotal: 100.00 },
    { id_detalle: 2, id_venta: 102, id_producto: 202, cantidad: 1, precio_unitario: 75.50, subtotal: 75.50 },
    { id_detalle: 3, id_venta: 103, id_producto: 203, cantidad: 3, precio_unitario: 30.00, subtotal: 90.00 },
  ];

  // Estado del filtro de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Función para manejar la eliminación
  const handleEliminar = (id) => {
    console.log(`Eliminar detalle con ID: ${id}`);
  };

  // Función para manejar la edición
  const handleEditar = (id) => {
    console.log(`Editar detalle con ID: ${id}`);
  };

  // Función para manejar el cambio en el campo de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Función para filtrar los detalles de ventas
  const filteredDetallesVentas = detallesVentas.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      item.id_detalle.toString().includes(searchLower) ||
      item.id_venta.toString().includes(searchLower) ||
      item.id_producto.toString().includes(searchLower) ||
      item.cantidad.toString().includes(searchLower) ||
      item.precio_unitario.toString().includes(searchLower) ||
      item.subtotal.toString().includes(searchLower)
    );
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl text-white mb-6">Detalles de Ventas</h1>

      <div className="mb-6">
        <Link to="/form_detalle_venta">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Agregar nuevo detalle
          </button>
        </Link>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar por ID, Venta, Producto, Cantidad, Precio, Subtotal"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 rounded-md w-full"
        />
      </div>

      <div className="bg-secondary-100 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-7 gap-4 mb-10 p-4">
          <h5 className="font-bold">ID</h5>
          <h5 className="font-bold">ID Venta</h5>
          <h5 className="font-bold">ID Producto</h5>
          <h5 className="font-bold">Cantidad</h5>
          <h5 className="font-bold">Precio Unitario</h5>
          <h5 className="font-bold">Subtotal</h5>
          <h5 className="font-bold">Acciones</h5>
        </div>

        {filteredDetallesVentas.map((item) => (
          <div key={item.id_detalle} className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-lg">
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
              <span>{item.id_detalle}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID Venta</h5>
              <p>{item.id_venta}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID Producto</h5>
              <p>{item.id_producto}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Cantidad</h5>
              <p>{item.cantidad}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Precio Unitario</h5>
              <p>${item.precio_unitario.toFixed(2)}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Subtotal</h5>
              <p>${item.subtotal.toFixed(2)}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Acciones</h5>
              <div className="flex justify-center gap-2">
                <Link to={`/form_detalle_venta_edit`}>
                  <button
                    onClick={() => handleEditar(item.id_detalle)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    Editar
                  </button>
                </Link>
                <button
                  onClick={() => handleEliminar(item.id_detalle)}
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

export default Table_detalle_venta;