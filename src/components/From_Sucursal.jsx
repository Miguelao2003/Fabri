import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const From_Sucursal_Edit = () => {
  const { id } = useParams(); // Obtener el ID de la sucursal desde la URL
  const navigate = useNavigate();

  // Estado para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [estado, setEstado] = useState("Activo");

  // Cargar los datos de la sucursal al montar el componente
  useEffect(() => {
    // Aquí puedes hacer una solicitud a la API para obtener los datos de la sucursal
    const fetchSucursal = async () => {
      try {
        const response = await fetch(`/api/sucursales/${id}`);
        const data = await response.json();
        setNombre(data.nombre);
        setDireccion(data.direccion);
        setTelefono(data.telefono);
        setEstado(data.estado);
      } catch (error) {
        console.error("Error al cargar los datos de la sucursal:", error);
      }
    };

    fetchSucursal();
  }, [id]);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const sucursalActualizada = {
      nombre,
      direccion,
      telefono,
      estado,
    };

    try {
      const response = await fetch(`/api/sucursales/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sucursalActualizada),
      });

      if (response.ok) {
        navigate("/sucursales"); // Redirigir a la lista de sucursales después de guardar
      } else {
        console.error("Error al guardar los cambios");
      }
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
    }
  };

  return (
    <div className="bg-secondary-100 p-8 rounded-xl mb-8">
      <h1 className="text-xl text-gray-100">Editar Datos de la Sucursal</h1>
      <hr className="my-8 border-gray-500/30" />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="nombre">
              Nombre de la Sucursal <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg "
              placeholder="Nombre(s)"
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
            <input
              type="text"
              id="direccion"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg "
              placeholder="Dirección"
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
              type="text"
              id="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg "
              placeholder="Teléfono"
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
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>
        </div>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <Link to="/sucursales">
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

export default From_Sucursal_Edit;