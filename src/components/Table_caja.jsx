import React, { useState } from "react";
import { Link } from "react-router-dom";

const Table_caja = () => {
  // Datos de ejemplo para la tabla de cajas
  const cajas = [
    { id_caja: 1, id_sucursal: 101, fecha: "2024-02-10", saldo_inicial: 500.00, saldo_final: 800.00, estado: "abierta" },
    { id_caja: 2, id_sucursal: 102, fecha: "2024-02-09", saldo_inicial: 700.00, saldo_final: 900.00, estado: "cerrada" },
    { id_caja: 3, id_sucursal: 103, fecha: "2024-02-08", saldo_inicial: 300.00, saldo_final: 600.00, estado: "abierta" },
  ];

  // Estado del filtro de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Estilos para los estados de caja
  const estadoStyles = {
    abierta: "bg-green-500/10 text-green-500",
    cerrada: "bg-red-500/10 text-red-500",
  };

  // Función para manejar la eliminación
  const handleEliminar = (id) => {
    console.log(`Eliminar caja con ID: ${id}`);
  };

  // Función para manejar la edición
  const handleEditar = (id) => {
    console.log(`Editar caja con ID: ${id}`);
  };

  // Función para manejar el cambio en el campo de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Función para filtrar las cajas
  const filteredCajas = cajas.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      item.id_caja.toString().includes(searchLower) ||
      item.id_sucursal.toString().includes(searchLower) ||
      item.fecha.includes(searchLower) ||
      item.saldo_inicial.toString().includes(searchLower) ||
      item.saldo_final.toString().includes(searchLower) ||
      item.estado.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl text-white mb-6">Cajas</h1>

      <div className="mb-6">
        <Link to="/form_caja">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Agregar nueva caja
          </button>
        </Link>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar por ID, Sucursal, Fecha, Saldo, Estado"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 rounded-md w-full"
        />
      </div>

      <div className="bg-secondary-100 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-7 gap-4 mb-10 p-4">
          <h5 >ID</h5>
          <h5 >ID Sucursal</h5>
          <h5 >Fecha</h5>
          <h5 >Saldo Inicial</h5>
          <h5 >Saldo Final</h5>
          <h5 >Estado</h5>
          <h5 >Acciones</h5>
        </div>

        {filteredCajas.map((item) => (
          <div key={item.id_caja} className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-lg">
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
              <span>{item.id_caja}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID Sucursal</h5>
              <p>{item.id_sucursal}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Fecha</h5>
              <p>{item.fecha}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Saldo Inicial</h5>
              <p>${item.saldo_inicial.toFixed(2)}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Saldo Final</h5>
              <p>${item.saldo_final.toFixed(2)}</p>
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
                <Link to={`/form_caja_edit`}>
                  <button
                    onClick={() => handleEditar(item.id_caja)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    Editar
                  </button>
                </Link>
                <button
                  onClick={() => handleEliminar(item.id_caja)}
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

export default Table_caja;