import React from "react";
import { Link } from "react-router-dom";
import { 
  RiTicketLine, 
  RiMore2Fill, 
  RiAddLine, 
  RiStore3Line, 
  RiUser3Line, 
  RiShoppingCartLine, 
  RiMoneyDollarCircleLine, 
  RiArchiveLine, 
  RiShoppingBagLine, 
  RiBankCardLine 
} from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const CardTicket = ({ category, total, text }) => {
  const categoryStyles = {
    sucursales: {
      icon: <RiStore3Line className="text-4xl p-2 box-content rounded-xl" />,
      color: "bg-purple-500/10 text-purple-500"
    },
    clientes: {
      icon: <RiUser3Line className="text-4xl p-2 box-content rounded-xl" />,
      color: "bg-blue-500/10 text-blue-500"
    },
    ventas: {
      icon: <RiShoppingCartLine className="text-4xl p-2 box-content rounded-xl" />,
      color: "bg-green-500/10 text-green-500"
    },
    ingresos: {
      icon: <RiMoneyDollarCircleLine className="text-4xl p-2 box-content rounded-xl" />,
      color: "bg-yellow-500/10 text-yellow-500"
    },
    inventario: {
      icon: <RiArchiveLine className="text-4xl p-2 box-content rounded-xl" />,
      color: "bg-orange-500/10 text-orange-500"
    },
    productos: {
      icon: <RiShoppingBagLine className="text-4xl p-2 box-content rounded-xl" />,
      color: "bg-pink-500/10 text-pink-500"
    },
    cajas: {
      icon: <RiBankCardLine className="text-4xl p-2 box-content rounded-xl" />,
      color: "bg-cyan-500/10 text-cyan-500"
    },
    default: {
      icon: <RiTicketLine className="text-4xl p-2 box-content rounded-xl" />,
      color: "bg-gray-500/10 text-gray-500"
    }
  };

  const { icon, color } = categoryStyles[category] || categoryStyles.default;

  return (
    <div className="bg-secondary-100 p-8 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div className={`${color}`}>
          {icon}
        </div>
        <div>
          <Menu
            menuButton={
              <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-900 p-2 rounded-lg transition-colors">
                <RiMore2Fill />
              </MenuButton>
            }
            align="end"
            arrow
            arrowClassName="bg-secondary-100"
            transition
            menuClassName="bg-secondary-100 p-4"
          >

          </Menu>
        </div>
      </div>
      {/* Número de registros */}
      <div>
        <h1 className="text-4xl text-white font-bold mb-4">{total}</h1>
        <p className={color}>{text}</p>
      </div>
      <hr className="border border-dashed border-gray-500/50 my-4" />
      <div className="bg-purple-500/10 text-purple-500">
      </div>
    </div>
  );
};

export default CardTicket;
