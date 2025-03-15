import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Form_Detalle_Venta = () => {
  const { id } = useParams(); // Obtener el ID del detalle de venta desde la URL
  const navigate = useNavigate();

  // Estado para los campos del formulario
  const [id_venta, setIdVenta] = useState("");
  const [id_producto, setIdProducto] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio_unitario, setPrecioUnitario] = useState("");
  const [subtotal, setSubtotal] = useState("");

  // Cargar los datos del detalle de venta al montar el componente
  useEffect(() => {
    const fetchDetalleVenta = async () => {
      try {
        const response = await fetch(`/api/detalle_ventas/${id}`);
        const data = await response.json();
        setIdVenta(data.id_venta);
        setIdProducto(data.id_producto);
        setCantidad(data.cantidad);
        setPrecioUnitario(data.precio_unitario);
        setSubtotal(data.subtotal);
      } catch (error) {
        console.error("Error al cargar los datos del detalle de venta:", error);
      }
    };

    fetchDetalleVenta();
  }, [id]);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const detalleVentaActualizado = {
      id_venta,
      id_producto,
      cantidad,
      precio_unitario,
      subtotal,
    };

    try {
      const response = await fetch(`/api/detalle_ventas/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(detalleVentaActualizado),
      });

      if (response.ok) {
        navigate("/detalle_ventas"); // Redirigir a la lista de detalles de venta después de guardar
      } else {
        console.error("Error al guardar los cambios");
      }
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
    }
  };

  return (
    <div className="bg-secondary-100 p-8 rounded-xl mb-8">
      <h1 className="text-xl text-gray-100">Registrar Detalle de Venta</h1>
      <hr className="my-8 border-gray-500/30" />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="id_venta">
              ID Venta <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="number"
              id="id_venta"
              value={id_venta}
              onChange={(e) => setIdVenta(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              placeholder="ID Venta"
              required
            />
          </div>
        </div>
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
            <label htmlFor="precio_unitario">
              Precio Unitario <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="number"
              step="0.01"
              id="precio_unitario"
              value={precio_unitario}
              onChange={(e) => setPrecioUnitario(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              placeholder="Precio Unitario"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="subtotal">
              Subtotal <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="number"
              step="0.01"
              id="subtotal"
              value={subtotal}
              onChange={(e) => setSubtotal(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg "
              placeholder="Subtotal"
              required
            />
          </div>
        </div>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <Link to="/detalle_ventas">
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

export default Form_Detalle_Venta;