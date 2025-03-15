import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Form_Caja = () => {
  const { id } = useParams(); // Obtener el ID de la caja desde la URL
  const navigate = useNavigate();

  // Estado para los campos del formulario
  const [id_sucursal, setIdSucursal] = useState("");
  const [fecha, setFecha] = useState("");
  const [saldo_inicial, setSaldoInicial] = useState("");
  const [saldo_final, setSaldoFinal] = useState("");
  const [estado, setEstado] = useState("abierta");

  // Cargar los datos de la caja al montar el componente
  useEffect(() => {
    const fetchCaja = async () => {
      try {
        const response = await fetch(`/api/cajas/${id}`);
        const data = await response.json();
        setIdSucursal(data.id_sucursal);
        setFecha(data.fecha);
        setSaldoInicial(data.saldo_inicial);
        setSaldoFinal(data.saldo_final);
        setEstado(data.estado);
      } catch (error) {
        console.error("Error al cargar los datos de la caja:", error);
      }
    };

    fetchCaja();
  }, [id]);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const cajaActualizada = {
      id_sucursal,
      fecha,
      saldo_inicial,
      saldo_final,
      estado,
    };

    try {
      const response = await fetch(`/api/cajas/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cajaActualizada),
      });

      if (response.ok) {
        navigate("/cajas"); // Redirigir a la lista de cajas después de guardar
      } else {
        console.error("Error al guardar los cambios");
      }
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
    }
  };

  return (
    <div className="bg-secondary-100 p-8 rounded-xl mb-8">
      <h1 className="text-xl text-gray-100">Registrar Datos de la Caja</h1>
      <hr className="my-8 border-gray-500/30" />
      <form onSubmit={handleSubmit}>
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
            <label htmlFor="fecha">
              Fecha <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="date"
              id="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg "
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="saldo_inicial">
              Saldo Inicial <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="number"
              id="saldo_inicial"
              value={saldo_inicial}
              onChange={(e) => setSaldoInicial(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              placeholder="Saldo Inicial"
              step="0.01"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
          <div className="w-full md:w-1/4">
            <label htmlFor="saldo_final">
              Saldo Final <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="number"
              id="saldo_final"
              value={saldo_final}
              onChange={(e) => setSaldoFinal(e.target.value)}
              className="w-full py-2 px-4 outline-none rounded-lg"
              placeholder="Saldo Final"
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
              <option value="abierta">Abierta</option>
              <option value="cerrada">Cerrada</option>
            </select>
          </div>
        </div>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <Link to="/cajas">
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

export default Form_Caja;