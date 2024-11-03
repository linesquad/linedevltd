import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import supabase from "../../services/supabase";
import { toast } from "react-toastify";

const AdminNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Logout failed.");
    } else {
      toast.success("Logged out successfully.");
      navigate("/admin");
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full sm:bg-primary-bg py-4 md:max-w-[1140px] 
    lg:mx-auto sm:static border-t border-white sm:border-none flex justify-center items-center gap-20">
      <div className="text-[#000] flex justify-center items-center">
        <div className="sm:bg-[#323232] py-0 rounded-[31px] flex justify-center items-center gap-[14px] sm:gap-[40px] font-Nunito w-fit">
          <NavLink
            to="/admin/blogs"
            className={
              location.pathname === "/admin" ||
              location.pathname === "/admin/blogs"
                ? "bg-[#4b1a6e] px-3 py-[13px] rounded-2xl sm:rounded-3xl font-bold"
                : "px-3 py-[13px] rounded-2xl sm:rounded-3xl text-white text-base font-bold"
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="/admin/delete-blogs"
            className={({ isActive }) =>
              isActive
                ? "bg-[#4b1a6e] px-3 py-[13px] rounded-2xl sm:rounded-3xl font-bold"
                : "px-3 py-[13px] rounded-2xl sm:rounded-3xl text-white text-base font-bold"
            }
          >
            DeleteBlogs
          </NavLink>
        </div>
      </div>
      <CiLogout
        onClick={handleLogout}
        className="text-2xl text-purple-500 cursor-pointer"
      />
    </nav>
  );
};

export default AdminNav;
