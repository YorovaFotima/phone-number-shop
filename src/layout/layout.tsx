
import { Outlet } from 'react-router-dom';
import { Footer } from "./footer";
import { Header } from "./header";

function Layout() {
  return (
    <>
      <Header />
      <main style={{
        backgroundColor: "white",
        height: `calc(100vh - 100px)`
      }}>

        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export { Layout };
