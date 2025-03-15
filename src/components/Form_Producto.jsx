import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Form_Producto = () => {
  const { id } = useParams(); // Obtener el ID del producto desde la URL
  const navigate = useNavigate();

  // Estado para los campos del formulario
  const [descripcion, setDescripcion] = useState("");
  const [id_proveedor, setIdProveedor] = useState("");
  const [id_categoria, setIdCategoria] = useState("");
  const [fecha_creacion, setFechaCreacion] = useState("");
  const [nombre, setNombre] = useState("");
  const [precio_compra, setPrecioCompra] = useState("");
  const [precio_venta, setPrecioVenta] = useState("");
  const [estado, setEstado] = useState("activo");

  // Cargar los datos del producto al montar el componente
  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(`/api/productos/${id}`);
        const data = await response.json();
        setDescripcion(data.descripcion);
        setIdProveedor(data.id_proveedor);
        setIdCategoria(data.id_categoria);
        setFechaCreacion(data.fecha_creacion);
        setNombre(data.nombre);
        setPrecioCompra(data.precio_compra);
        setPrecioVenta(data.precio_venta);
        setEstado(data.estado);
      } catch (error) {
        console.error("Error al cargar los datos del producto:", error);
      }
    };

    fetchProducto();
  }, [id]);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const productoActualizado = {
      descripcion,
      id_proveedor,
      id_categoria,
      fecha_creacion,
      nombre,
      precio_compra,
      precio_venta,
      estado,
    };

    try {
      const response = await fetch(`/api/productos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productoActualizado),
      });

      if (response.ok) {
        navigate("/productos"); // Redirigir a la lista de productos después de guardar
      } else {
        console.error("Error al guardar los cambios");
      }
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
    }
  };

  return (
    <div className="bg-secondary-100 p-8 rounded-xl mb-8">
      <h1 className="text-xl text-gray-100">Registrar Datos del Producto</h1>
      <hr className="my-8 border-gray-500/30" />
      <form onSubmit={handleSubmit}>
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
              className="w-full py-2 px-4 outline-none rounded-lg "
              placeholder="Descripción"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="id_proveedor">
              ID Proveedor <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="number"
              id="id_proveedor"
              value={id_proveedor}
              onChange={(e) => setIdProveedor(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              placeholder="ID Proveedor"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="id_categoria">
              ID Categoría <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="number"
              id="id_categoria"
              value={id_categoria}
              onChange={(e) => setIdCategoria(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              placeholder="ID Categoría"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="fecha_creacion">
              Fecha de Creación <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="datetime-local"
              id="fecha_creacion"
              value={fecha_creacion}
              onChange={(e) => setFechaCreacion(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="nombre">
              Nombre <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              placeholder="Nombre"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="precio_compra">
              Precio de Compra <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="number"
              id="precio_compra"
              value={precio_compra}
              onChange={(e) => setPrecioCompra(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              placeholder="Precio de Compra"
              step="0.01"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="precio_venta">
              Precio de Venta <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="number"
              id="precio_venta"
              value={precio_venta}
              onChange={(e) => setPrecioVenta(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg "
              placeholder="Precio de Venta"
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
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
            </select>
          </div>
        </div>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <Link to="/productos">
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

export default Form_Producto;