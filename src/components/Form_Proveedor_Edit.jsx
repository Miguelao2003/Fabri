import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Form_Proveedor_Edit = () => {
  const { id } = useParams(); // Obtener el ID del proveedor desde la URL
  const navigate = useNavigate();

  // Estado para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  // Cargar los datos del proveedor al montar el componente
  useEffect(() => {
    const fetchProveedor = async () => {
      try {
        const response = await fetch(`/api/proveedores/${id}`);
        const data = await response.json();
        setNombre(data.nombre);
        setDireccion(data.direccion);
        setEmail(data.email);
        setTelefono(data.telefono);
      } catch (error) {
        console.error("Error al cargar los datos del proveedor:", error);
      }
    };

    fetchProveedor();
  }, [id]);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const proveedorActualizado = {
      nombre,
      direccion,
      email,
      telefono,
    };

    try {
      const response = await fetch(`/api/proveedores/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(proveedorActualizado),
      });

      if (response.ok) {
        navigate("/proveedores"); // Redirigir a la lista de proveedores después de guardar
      } else {
        console.error("Error al guardar los cambios");
      }
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
    }
  };

  return (
    <div className="bg-secondary-100 p-8 rounded-xl mb-8">
      <h1 className="text-xl text-gray-100">Editar Datos del Proveedor</h1>
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
            <label htmlFor="direccion">
              Dirección <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <textarea
              id="direccion"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              placeholder="Dirección"
              rows="4"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="telefono">
              Teléfono <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="tel"
              id="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              placeholder="Teléfono"
              required
            />
          </div>
        </div>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <Link to="/proveedores">
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


export default Form_Proveedor_Edit;