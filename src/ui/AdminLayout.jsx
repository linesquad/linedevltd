import { useState, useEffect } from "react";
import AdminForm from "../components/admin/AdminForm";
import { Outlet } from "react-router-dom";
import supabase from "../services/supabase";
import AdminNav from "../components/admin/AdminNav";

const AdminLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
    };

    checkSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setIsLoggedIn(!!session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogin = () => setIsLoggedIn(true);

  return (
    <section className="bg-primary-bg">
      {isLoggedIn ? (
        <div>
          <AdminNav />
          <Outlet />
        </div>
      ) : (
        <AdminForm onLogin={handleLogin} />
      )}
    </section>
  );
};

export default AdminLayout;
