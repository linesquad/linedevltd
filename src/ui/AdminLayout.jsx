import { useState, useEffect } from "react";
import AdminForm from "../components/admin/AdminForm";
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedCredentials = sessionStorage.getItem("adminCredentials");
    if (storedCredentials) {
      const { username, password } = JSON.parse(storedCredentials);

      const adminUsername = import.meta.env.VITE_ADMIN_LOGIN;
      const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

      if (username === adminUsername && password === adminPassword) {
        setIsLoggedIn(true);
      }
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <section className="bg-primary-bg">
      {isLoggedIn ? (
        <div>
          <h1>Hello im Admin Panel yeee</h1>
          <Outlet />
        </div>
      ) : (
        <AdminForm onLogin={handleLogin} />
      )}
    </section>
  );
};

export default AdminLayout;
