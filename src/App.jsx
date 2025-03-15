import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import LayoutAuth from "./layouts/LayoutAuth";
import LayoutAdmin from "./layouts/LayoutAdmin";
// Pages auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
// Pages admin
import Home from "./pages/admin/Home";
import Profile from "./pages/admin/Profile";
import Chat from "./pages/admin/Chat";
import Error404 from "./pages/Error404";
import Tickets from "./pages/admin/Tickets";
import Sucursal from "./pages/admin/Sucursal";
import Caja from "./pages/admin/Caja";
import Categoria from "./pages/admin/Categoria";
import Cliente from "./pages/admin/Cliente";
import Detalle_venta from "./pages/admin/Detalle_venta";
import Inventario from "./pages/admin/Inventario";
import Movi_caja from "./pages/admin/Movi_caja";
import Movi_inventario from "./pages/admin/Movi_inventario";
import Producto from "./pages/admin/Producto";
import Proveedor from "./pages/admin/proveedor";
import Venta from "./pages/admin/Venta";
import From_suscursal from "./components/From_Sucursal";
import From_Sucursal_Edit from "./components/From_Sucursal_Edit";
import Form_Cliente from "./components/Form_Cliente";
import Form_Cliente_Edit from "./components/Form_Cliente_Edit";
import Form_Producto from "./components/Form_Producto";
import Form_Producto_Edit from "./components/Form_Producto_Edit";
import Form_Proveedor from "./components/Form_Proveedor";
import Form_Proveedor_Edit from "./components/Form_Proveedor_Edit";
import Form_Inventario from "./components/Form_Inventario";
import Form_Inventario_Edit from "./components/Form_Inventario_Edit";
import Form_Movimiento from "./components/Form_movimiento";
import Form_Movimiento_Edit from "./components/Form_Movimiento_Edit";
import Form_Movimiento_Caja from "./components/Form_Movimiento_Caja";
import Form_Movimiento_Caja_Edit from "./components/Form_Movimiento_Caja_Edit";
import Form_Caja from "./components/Form_Caja";
import Form_Caja_Edit from "./components/Form_Caja_Edit";
import Form_Venta from "./components/Form_Venta";
import Form_Venta_Edit from "./components/Form_Venta_Edit";
import Form_Detalle_Venta from "./components/Form_Detalle_Venta";
import Form_Detalle_Venta_Edit from "./components/Form_Detalle_Venta_Edit";
import Form_Categoria from "./components/Form_Categoria";
import Form_Categoria_Edit from "./components/Form_Categoria_Edit";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/olvide-password" element={<ForgetPassword />} />
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Profile />} />
          <Route path="chat" element={<Chat />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="sucursales" element={<Sucursal />} />
          <Route path="cajas" element={<Caja/>} />
          <Route path="categorias" element={<Categoria/>}/>
          <Route path="clientes" element={<Cliente/>}/>
          <Route path="detalle_ventas" element={<Detalle_venta/>}/>
          <Route path="inventarios" element={<Inventario/>}/>
          <Route path="movi_cajas" element={<Movi_caja/>}/>
          <Route path="movi_inventarios" element={<Movi_inventario/>}/>
          <Route path="productos" element={<Producto/>}/>
          <Route path="proveedores" element={<Proveedor/>}/>
          <Route path="ventas" element={<Venta/>}/>
          <Route path="form_sucursal" element={<From_suscursal/>}/>
          <Route path="from_sucursal_edit" element={<From_Sucursal_Edit/>}/>
          <Route path="form_cliente" element={<Form_Cliente/>}/>
          <Route path="form_cliente_edit" element={<Form_Cliente_Edit/>}/>
          <Route path="form_producto" element={<Form_Producto/>}/>
          <Route path="form_producto_edit" element={<Form_Producto_Edit/>}/>
          <Route path="form_proveedor" element={<Form_Proveedor/>}/>
          <Route path="form_proveedor_edit" element={<Form_Proveedor_Edit/>}/>
          <Route path="form_inventario" element={<Form_Inventario/>}/>
          <Route path="form_inventario_edit" element={<Form_Inventario_Edit/>}/>
          <Route path="form_movimiento" element={<Form_Movimiento/>}/>
          <Route path="form_movimiento_edit" element={<Form_Movimiento_Edit/>}/>
          <Route path="form_movimiento_caja" element={<Form_Movimiento_Caja/>}/>
          <Route path="form_movimiento_caja_edit" element={<Form_Movimiento_Caja_Edit/>}/>
          <Route path="form_caja" element={<Form_Caja/>}/>
          <Route path="form_caja_edit" element={<Form_Caja_Edit/>}/>
          <Route path="form_venta" element={<Form_Venta/>}/>
          <Route path="form_venta_edit" element={<Form_Venta_Edit/>}/>
          <Route path="form_detalle_venta" element={<Form_Detalle_Venta/>}/>
          <Route path="form_detalle_venta_edit" element={<Form_Detalle_Venta_Edit/>}/>
          <Route path="form_categoria" element={<Form_Categoria/>}/>
          <Route path="form_categoria_edit" element={<Form_Categoria_Edit/>}/>
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
