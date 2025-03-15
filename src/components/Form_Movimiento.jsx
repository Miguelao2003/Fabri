import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Form_Movimiento = () => {
  const { id } = useParams(); // Obtener el ID del movimiento desde la URL
  const navigate = useNavigate();

  // Estado para los campos del formulario
  const [id_producto, setIdProducto] = useState("");
  const [id_sucursal, setIdSucursal] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [fecha, setFecha] = useState("");
  const [observacion, setObservacion] = useState("");
  const [tipo, setTipo] = useState("entrada");

  // Cargar los datos del movimiento al montar el componente
  useEffect(() => {
    const fetchMovimiento = async () => {
      try {
        const response = await fetch(`/api/movimientos_inventario/${id}`);
        const data = await response.json();
        setIdProducto(data.id_producto);
        setIdSucursal(data.id_sucursal);
        setCantidad(data.cantidad);
        setFecha(data.fecha);
        setObservacion(data.observacion);
        setTipo(data.tipo);
      } catch (error) {
        console.error("Error al cargar los datos del movimiento:", error);
      }
    };

    fetchMovimiento();
  }, [id]);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const movimientoActualizado = {
      id_producto,
      id_sucursal,
      cantidad,
      fecha,
      observacion,
      tipo,
    };

    try {
      const response = await fetch(`/api/movimientos_inventario/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movimientoActualizado),
      });

      if (response.ok) {
        navigate("/movi_inventarios"); // Redirigir a la lista de movimientos después de guardar
      } else {
        console.error("Error al guardar los cambios");
      }
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
    }
  };

  return (
    <div className="bg-secondary-100 p-8 rounded-xl mb-8">
      <h1 className="text-xl text-gray-100">Registrar Datos del Movimiento</h1>
      <hr className="my-8 border-gray-500/30" />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="id_producto">
              ID Producto <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="number"
              id="id_producto"
              value={id_producto}
              onChange={(e) => setIdProducto(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              placeholder="ID Producto"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="id_sucursal">
              ID Sucursal <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="number"
              id="id_sucursal"
              value={id_sucursal}
              onChange={(e) => setIdSucursal(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              placeholder="ID Sucursal"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="cantidad">
              Cantidad <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="number"
              id="cantidad"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              placeholder="Cantidad"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="fecha">
              Fecha <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="datetime-local"
              id="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="observacion">
              Observación <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <textarea
              id="observacion"
              value={observacion}
              onChange={(e) => setObservacion(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              placeholder="Observación"
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
              <option value="entrada">Entrada</option>
              <option value="salida">Salida</option>
            </select>
          </div>
        </div>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <Link to="/movi_inventarios">
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

export default Form_Movimiento;