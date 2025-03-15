import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Form_Categoria = () => {
  const { id } = useParams(); // Obtener el ID de la categoría desde la URL
  const navigate = useNavigate();

  // Estado para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  // Cargar los datos de la categoría al montar el componente
  useEffect(() => {
    const fetchCategoria = async () => {
      try {
        const response = await fetch(`/api/categorias/${id}`);
        const data = await response.json();
        setNombre(data.nombre);
        setDescripcion(data.descripcion);
      } catch (error) {
        console.error("Error al cargar los datos de la categoría:", error);
      }
    };

    fetchCategoria();
  }, [id]);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const categoriaActualizada = {
      nombre,
      descripcion,
    };

    try {
      const response = await fetch(`/api/categorias/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoriaActualizada),
      });

      if (response.ok) {
        navigate("/categorias"); // Redirigir a la lista de categorías después de guardar
      } else {
        console.error("Error al guardar los cambios");
      }
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
    }
  };

  return (
    <div className="bg-secondary-100 p-8 rounded-xl mb-8">
      <h1 className="text-xl text-gray-100">Registrar Datos de la Categoría</h1>
      <hr className="my-8 border-gray-500/30" />
      <form onSubmit={handleSubmit}>
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
              rows="4"
              required
            />
          </div>
        </div>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <Link to="/categorias">
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

export default Form_Categoria;