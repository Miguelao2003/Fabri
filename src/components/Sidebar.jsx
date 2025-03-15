import React, { useState } from "react";
import { Link } from "react-router-dom";
// Icons
import {
  RiBarChart2Line,
  RiStore3Line,
  RiUser3Line,
  RiShoppingCart2Line,
  RiTruckLine,
  RiArchiveLine,
  RiRepeat2Line,
  RiExchangeDollarLine,
  RiWalletLine,
  RiMoneyDollarCircleLine,
  RiFileList3Line,
  RiListCheck2,
  RiLogoutCircleRLine,
  RiMenu3Line,
  RiCloseLine,
} from "react-icons/ri";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          <h1 className="text-center text-2xl font-bold text-white mb-10">
            Admin GRUPO3<span className="text-primary text-4xl">.</span>
          </h1>
          <ul>
            <li>
              <Link to="/" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                <RiBarChart2Line className="text-primary" /> Análisis
              </Link>
            </li>
            <li>
              <Link to="/sucursales" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                <RiStore3Line className="text-primary" /> Sucursales
              </Link>
            </li>
            <li>
              <Link to="/clientes" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                <RiUser3Line className="text-primary" /> Clientes
              </Link>
            </li>
            <li>
              <Link to="/productos" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                <RiShoppingCart2Line className="text-primary" /> Productos
              </Link>
            </li>
            <li>
              <Link to="/proveedores" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                <RiTruckLine className="text-primary" /> Proveedores
              </Link>
            </li>
            <li>
              <Link to="/inventarios" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                <RiArchiveLine className="text-primary" /> Inventario
              </Link>
            </li>
            <li>
              <Link to="/movi_inventarios" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                <RiRepeat2Line className="text-primary" /> Movimientos Inventario
              </Link>
            </li>
            <li>
              <Link to="/movi_cajas" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                <RiExchangeDollarLine className="text-primary" /> Movimientos Caja
              </Link>
            </li>
            <li>
              <Link to="/cajas" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                <RiWalletLine className="text-primary" /> Cajas
              </Link>
            </li>
            <li>
              <Link to="/ventas" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                <RiMoneyDollarCircleLine className="text-primary" /> Ventas
              </Link>
            </li>
            <li>
              <Link to="/detalle_ventas" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                <RiFileList3Line className="text-primary" /> Detalle Ventas
              </Link>
            </li>
            <li>
              <Link to="/categorias" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                <RiListCheck2 className="text-primary" /> Categorías
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <Link to="/login" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
            <RiLogoutCircleRLine className="text-primary" /> Cerrar sesión
          </Link>
        </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
};

export default Sidebar;
