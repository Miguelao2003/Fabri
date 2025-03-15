import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Form_Movimiento_Caja = () => {
  const { id } = useParams(); // Obtener el ID del movimiento de caja desde la URL
  const navigate = useNavigate();

  // Estado para los campos del formulario
  const [id_caja, setIdCaja] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha_hora, setFechaHora] = useState("");
  const [tipo, setTipo] = useState("ingreso");
  const [monto, setMonto] = useState("");

  // Cargar los datos del movimiento de caja al montar el componente
  useEffect(() => {
    const fetchMovimientoCaja = async () => {
      try {
        const response = await fetch(`/api/movimientos_caja/${id}`);
        const data = await response.json();
        setIdCaja(data.id_caja);
        setDescripcion(data.descripcion);
        setFechaHora(data.fecha_hora);
        setTipo(data.tipo);
        setMonto(data.monto);
      } catch (error) {
        console.error("Error al cargar los datos del movimiento de caja:", error);
      }
    };

    fetchMovimientoCaja();
  }, [id]);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const movimientoCajaActualizado = {
      id_caja,
      descripcion,
      fecha_hora,
      tipo,
      monto,
    };

    try {
      const response = await fetch(`/api/movimientos_caja/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movimientoCajaActualizado),
      });

      if (response.ok) {
        navigate("/movi_cajas"); // Redirigir a la lista de movimientos de caja después de guardar
      } else {
        console.error("Error al guardar los cambios");
      }
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
    }
  };

  return (
    <div className="bg-secondary-100 p-8 rounded-xl mb-8">
      <h1 className="text-xl text-gray-100">Registrar Datos del Movimiento de Caja</h1>
      <hr className="my-8 border-gray-500/30" />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="id_caja">
              ID Caja <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="number"
              id="id_caja"
              value={id_caja}
              onChange={(e) => setIdCaja(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              placeholder="ID Caja"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="descripcion">
              Descripción <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <textarea
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              placeholder="Descripción"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="fecha_hora">
              Fecha y Hora <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="datetime-local"
              id="fecha_hora"
              value={fecha_hora}
              onChange={(e) => setFechaHora(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="tipo">
              Tipo <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <select
              id="tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg appearance-none"
              required
            >
              <option value="ingreso">Ingreso</option>
              <option value="egreso">Egreso</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="monto">
              Monto <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="number"
              id="monto"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              placeholder="Monto"
              step="0.01"
              required
            />
          </div>
        </div>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <Link to="/movi_cajas">
            <button
              type="button"
              className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors mr-5"
            >
              Volver
            </button>
          </Link>
          <button
            type="submit"
            className="bg-primary/80 text-white py-2 px-4 rounded-lg hover:bg-primary transition-colors"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form_Movimiento_Caja;