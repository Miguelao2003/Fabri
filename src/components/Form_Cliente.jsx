import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Form_Cliente = () => {
  const { id } = useParams(); // Obtener el ID del cliente desde la URL
  const navigate = useNavigate();

  // Estado para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [fecha_registro, setFechaRegistro] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  // Cargar los datos del cliente al montar el componente
  useEffect(() => {
    const fetchCliente = async () => {
      try {
        const response = await fetch(`/api/clientes/${id}`);
        const data = await response.json();
        setNombre(data.nombre);
        setDireccion(data.direccion);
        setFechaRegistro(data.fecha_registro);
        setEmail(data.email);
        setTelefono(data.telefono);
      } catch (error) {
        console.error("Error al cargar los datos del cliente:", error);
      }
    };

    fetchCliente();
  }, [id]);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const clienteActualizado = {
      nombre,
      direccion,
      fecha_registro,
      email,
      telefono,
    };

    try {
      const response = await fetch(`/api/clientes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clienteActualizado),
      });

      if (response.ok) {
        navigate("/clientes"); // Redirigir a la lista de clientes después de guardar
      } else {
        console.error("Error al guardar los cambios");
      }
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
    }
  };

  return (
    <div className="bg-secondary-100 p-8 rounded-xl mb-8">
      <h1 className="text-xl text-gray-100">Registrar Datos del Cliente</h1>
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
            <label htmlFor="fecha_registro">
              Fecha de Registro <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="datetime-local"
              id="fecha_registro"
              value={fecha_registro}
              onChange={(e) => setFechaRegistro(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg "
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
          <Link to="/clientes">
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

export default Form_Cliente;