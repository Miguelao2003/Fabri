import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Form_Inventario = () => {
  const { id } = useParams(); // Obtener el ID del inventario desde la URL
  const navigate = useNavigate();

  // Estado para los campos del formulario
  const [id_producto, setIdProducto] = useState("");
  const [id_sucursal, setIdSucursal] = useState("");
  const [stock, setStock] = useState("");
  const [stock_minimo, setStockMinimo] = useState("");
  const [fecha_actualizado, setFechaActualizado] = useState("");

  // Cargar los datos del inventario al montar el componente
  useEffect(() => {
    const fetchInventario = async () => {
      try {
        const response = await fetch(`/api/inventarios/${id}`);
        const data = await response.json();
        setIdProducto(data.id_producto);
        setIdSucursal(data.id_sucursal);
        setStock(data.stock);
        setStockMinimo(data.stock_minimo);
        setFechaActualizado(data.fecha_actualizado);
      } catch (error) {
        console.error("Error al cargar los datos del inventario:", error);
      }
    };

    fetchInventario();
  }, [id]);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const inventarioActualizado = {
      id_producto,
      id_sucursal,
      stock,
      stock_minimo,
      fecha_actualizado,
    };

    try {
      const response = await fetch(`/api/inventarios/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inventarioActualizado),
      });

      if (response.ok) {
        navigate("/inventarios"); // Redirigir a la lista de inventarios después de guardar
      } else {
        console.error("Error al guardar los cambios");
      }
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
    }
  };

  return (
    <div className="bg-secondary-100 p-8 rounded-xl mb-8">
      <h1 className="text-xl text-gray-100">Registrar Datos del Inventario</h1>
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
            <label htmlFor="stock">
              Stock <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="number"
              id="stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              placeholder="Stock"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="stock_minimo">
              Stock Mínimo <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="number"
              id="stock_minimo"
              value={stock_minimo}
              onChange={(e) => setStockMinimo(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              placeholder="Stock Mínimo"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="fecha_actualizado">
              Fecha Actualizado <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1 text-black">
            <input
              type="datetime-local"
              id="fecha_actualizado"
              value={fecha_actualizado}
              onChange={(e) => setFechaActualizado(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              required
            />
          </div>
        </div>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <Link to="/Inventarios">
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

export default Form_Inventario;