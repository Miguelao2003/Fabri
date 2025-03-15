import React, { useState } from "react";
import { Link } from "react-router-dom";

const Table_Categoria = () => {
  // Datos de ejemplo para la tabla de categorías
  const categorias = [
    { id_categoria: 1, nombre: "Electrónica", descripcion: "Productos electrónicos" },
    { id_categoria: 2, nombre: "Ropa", descripcion: "Prendas de vestir" },
    { id_categoria: 3, nombre: "Hogar", descripcion: "Artículos para el hogar" },
  ];

  // Estado del filtro de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Función para manejar la eliminación
  const handleEliminar = (id) => {
    console.log(`Eliminar categoría con ID: ${id}`);
    // Aquí puedes agregar la lógica para eliminar la categoría
  };

  // Función para manejar la edición
  const handleEditar = (id) => {
    console.log(`Editar categoría con ID: ${id}`);
    // Aquí puedes agregar la lógica para editar la categoría
  };

  // Función para manejar el cambio en el campo de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Función para filtrar las categorías
  const filteredCategorias = categorias.filter((categoria) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      categoria.id_categoria.toString().includes(searchLower) ||  // Compara correctamente la ID convertida a string
      categoria.nombre.toLowerCase().includes(searchLower) ||
      categoria.descripcion.toLowerCase().includes(searchLower));
  });

  return (
    <div>
      <h1 className="text-2xl text-white my-10">Categorías</h1>

      {/* Botón para agregar nuevo */}
      <div className="mb-6">
        <Link to="/form_categoria">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Agregar nueva categoría
          </button>
        </Link>
      </div>

      {/* Campo único de búsqueda */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar por Nombre, Descripción"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 rounded-md w-full"
        />
      </div>

      <div className="bg-secondary-100 p-8 rounded-xl">
        {/* Encabezado de la tabla */}
        <div className="hidden md:grid grid-cols-4 gap-4 mb-10 p-4">
          <h5>ID</h5>
          <h5>Nombre</h5>
          <h5>Descripción</h5>
          <h5>Acciones</h5>
        </div>

        {/* Filas dinámicas filtradas */}
        {filteredCategorias.map((categoria, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
              <span>{categoria.id_categoria}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Nombre</h5>
              <p>{categoria.nombre}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Descripción</h5>
              <p>{categoria.descripcion}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Acciones</h5>
              <div className="flex gap-2">
                <Link to={`/form_categoria_edit`}>
                  <button
                    onClick={() => handleEditar(categoria.id_categoria)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    Editar
                  </button>
                </Link>
                <button
                  onClick={() => handleEliminar(categoria.id_categoria)}
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

export default Table_Categoria;