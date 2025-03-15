import React, { useState } from "react";
import { Link } from "react-router-dom";

const Table_movi_caja = () => {
  // Datos de ejemplo para la tabla de movimientos de caja
  const movimientos = [
    { id_movimiento_caja: 1, id_caja: 101, descripcion: "Venta del día", fecha_hora: "2024-02-10 18:00:00", tipo: "ingreso", monto: 500.00 },
    { id_movimiento_caja: 2, id_caja: 102, descripcion: "Pago de proveedores", fecha_hora: "2024-02-09 14:30:00", tipo: "egreso", monto: 200.50 },
    { id_movimiento_caja: 3, id_caja: 103, descripcion: "Depósito bancario", fecha_hora: "2024-02-08 10:15:00", tipo: "ingreso", monto: 1000.00 },
  ];

  // Estado del filtro de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Estilos para los tipos de movimiento
  const tipoStyles = {
    ingreso: "bg-green-500/10 text-green-500",
    egreso: "bg-red-500/10 text-red-500",
  };

  // Función para manejar la eliminación
  const handleEliminar = (id) => {
    console.log(`Eliminar movimiento de caja con ID: ${id}`);
  };

  // Función para manejar la edición
  const handleEditar = (id) => {
    console.log(`Editar movimiento de caja con ID: ${id}`);
  };

  // Función para manejar el cambio en el campo de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Función para filtrar los movimientos
  const filteredMovimientos = movimientos.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      item.id_movimiento_caja.toString().includes(searchLower) ||
      item.id_caja.toString().includes(searchLower) ||
      item.descripcion.toLowerCase().includes(searchLower) ||
      item.fecha_hora.includes(searchLower) ||
      item.tipo.toLowerCase().includes(searchLower) ||
      item.monto.toString().includes(searchLower)
    );
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl text-white mb-6">Movimientos de Cajas</h1>

      <div className="mb-6">
        <Link to="/form_movimiento_caja">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Agregar nuevo movimiento
          </button>
        </Link>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar por ID, Caja, Descripción, Fecha, Tipo, Monto"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 rounded-md w-full"
        />
      </div>

      <div className="bg-secondary-100 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-7 gap-4 mb-10 p-4">
          <h5 className="font-bold">ID</h5>
          <h5 className="font-bold">ID Caja</h5>
          <h5 className="font-bold">Descripción</h5>
          <h5 className="font-bold">Fecha y Hora</h5>
          <h5 className="font-bold">Tipo</h5>
          <h5 className="font-bold">Monto</h5>
          <h5 className="font-bold">Acciones</h5>
        </div>

        {filteredMovimientos.map((item) => (
          <div key={item.id_movimiento_caja} className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-lg">
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
              <span>{item.id_movimiento_caja}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID Caja</h5>
              <p>{item.id_caja}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Descripción</h5>
              <p>{item.descripcion}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Fecha y Hora</h5>
              <span>{item.fecha_hora}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Tipo</h5>
              <span className={`py-1 px-2 rounded-lg ${tipoStyles[item.tipo]}`}>
                {item.tipo}
              </span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Monto</h5>
              <p>${item.monto.toFixed(2)}</p>
            </div>
            <div className="flex justify-center">
              <h5 className="md:hidden text-white font-bold mb-2">Acciones</h5>
              <div className="flex gap-2">
                <Link to={`/form_movimiento_caja_edit`}>
                  <button
                    onClick={() => handleEditar(item.id_movimiento_caja)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    Editar
                  </button>
                </Link>
                <button
                  onClick={() => handleEliminar(item.id_movimiento_caja)}
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

export default Table_movi_caja;