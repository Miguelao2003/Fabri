import React, { useState } from "react";
import { Link } from "react-router-dom";

const Table_producto = () => {
  // Datos de ejemplo para la tabla de productos
  const productos = [
    { id_producto: 1, nombre: "Laptop", descripcion: "Laptop de gama alta", id_proveedor: 101, id_categoria: 5, fecha_creacion: "2024-01-10", precio_compra: 800.00, precio_venta: 1000.00, estado: "activo" },
    { id_producto: 2, nombre: "Mouse", descripcion: "Mouse inalámbrico", id_proveedor: 102, id_categoria: 3, fecha_creacion: "2024-02-15", precio_compra: 20.00, precio_venta: 35.00, estado: "activo" },
    { id_producto: 3, nombre: "Teclado", descripcion: "Teclado mecánico", id_proveedor: 103, id_categoria: 3, fecha_creacion: "2024-03-05", precio_compra: 50.00, precio_venta: 80.00, estado: "inactivo" },
  ];

  // Estado del filtro de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Estilos para los estados
  const statusStyles = {
    activo: "bg-green-500/10 text-green-500",
    inactivo: "bg-red-500/10 text-red-500",
  };

  // Función para manejar la eliminación
  const handleEliminar = (id) => {
    console.log(`Eliminar producto con ID: ${id}`);
  };

  // Función para manejar la edición
  const handleEditar = (id) => {
    console.log(`Editar producto con ID: ${id}`);
  };

  // Función para manejar el cambio en el campo de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Función para filtrar los productos
  const filteredProductos = productos.filter((producto) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      producto.id_producto.toString().includes(searchLower) ||
      producto.nombre.toLowerCase().includes(searchLower) ||
      producto.descripcion.toLowerCase().includes(searchLower) ||
      producto.estado.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div>
      <h1 className="text-2xl text-white my-10">Productos</h1>

      <div className="mb-6">
        <Link to="/form_producto">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Agregar nuevo producto
          </button>
        </Link>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar por Nombre, Descripción, Estado"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 rounded-md w-full"
        />
      </div>

      <div className="bg-secondary-100 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-8 gap-4 mb-10 p-4">
          <h5>ID</h5>
          <h5>Nombre</h5>
          <h5>Descripción</h5>
          <h5>Precio Compra</h5>
          <h5>Precio Venta</h5>
          <h5>Estado</h5>
          <h5>Acciones</h5>
        </div>

        {filteredProductos.map((producto, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-8 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
              <span>{producto.id_producto}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Nombre</h5>
              <p>{producto.nombre}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Descripción</h5>
              <p>{producto.descripcion}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Precio Compra</h5>
              <span>${producto.precio_compra.toFixed(2)}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Precio Venta</h5>
              <span>${producto.precio_venta.toFixed(2)}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Estado</h5>
              <span className={`py-1 px-2 rounded-lg ${statusStyles[producto.estado]}`}>
                {producto.estado}
              </span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Acciones</h5>
              <div className="flex gap-2">
                <Link to={`/form_producto_edit`}>
                  <button
                    onClick={() => handleEditar(producto.id_producto)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    Editar
                  </button>
                </Link>
                <button
                  onClick={() => handleEliminar(producto.id_producto)}
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

export default Table_producto;
