
import { Outlet } from 'react-router-dom';
import { Menu } from './menu'; 
function Layout() {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
}

export { Layout };
