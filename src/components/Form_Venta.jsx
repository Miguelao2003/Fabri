import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Form_Venta = () => {
  const { id } = useParams(); // Obtener el ID de la venta desde la URL
  const navigate = useNavigate();

  // Estado para los campos del formulario
  const [id_cliente, setIdCliente] = useState("");
  const [id_sucursal, setIdSucursal] = useState("");
  const [id_caja, setIdCaja] = useState("");
  const [fecha_venta, setFechaVenta] = useState("");
  const [total, setTotal] = useState("");
  const [estado, setEstado] = useState("pendiente");

  // Cargar los datos de la venta al montar el componente
  useEffect(() => {
    const fetchVenta = async () => {
      try {
        const response = await fetch(`/api/ventas/${id}`);
        const data = await response.json();
        setIdCliente(data.id_cliente);
        setIdSucursal(data.id_sucursal);
        setIdCaja(data.id_caja);
        setFechaVenta(data.fecha_venta);
        setTotal(data.total);
        setEstado(data.estado);
      } catch (error) {
        console.error("Error al cargar los datos de la venta:", error);
      }
    };

    fetchVenta();
  }, [id]);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const ventaActualizada = {
      id_cliente,
      id_sucursal,
      id_caja,
      fecha_venta,
      total,
      estado,
    };

    try {
      const response = await fetch(`/api/ventas/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ventaActualizada),
      });

      if (response.ok) {
        navigate("/ventas"); // Redirigir a la lista de ventas después de guardar
      } else {
        console.error("Error al guardar los cambios");
      }
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
    }
  };

  return (
    <div className="bg-secondary-100 p-8 rounded-xl mb-8">
      <h1 className="text-xl text-gray-100">Registrar Datos de la Venta</h1>
      <hr className="my-8 border-gray-500/30" />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="id_cliente">
              ID Cliente <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="number"
              id="id_cliente"
              value={id_cliente}
              onChange={(e) => setIdCliente(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              placeholder="ID Cliente"
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
              className="w-full py-2 px-4 outline-none rounded-lg "
              placeholder="ID Sucursal"
              required
            />
          </div>
        </div>
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
              className="w-full py-2 px-4 outline-none rounded-lg "
              placeholder="ID Caja"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="fecha_venta">
              Fecha de Venta <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="datetime-local"
              id="fecha_venta"
              value={fecha_venta}
              onChange={(e) => setFechaVenta(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg "
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="total">
              Total <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="number"
              id="total"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg "
              placeholder="Total"
              step="0.01"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="estado">
              Estado <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <select
              id="estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg appearance-none"
              required
            >
              <option value="pendiente">Pendiente</option>
              <option value="pagado">Pagado</option>
              <option value="cancelado">Cancelado</option>
            </select>
          </div>
        </div>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <Link to="/ventas">
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

export default Form_Venta;