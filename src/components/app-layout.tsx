import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export default function AppLayout() {
  return(
    <div className="flex flex-col gap-10 justify-between h-screen">
      <Header />
      <div className="flex flex-col gap-5 w-11/12 mx-auto">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}