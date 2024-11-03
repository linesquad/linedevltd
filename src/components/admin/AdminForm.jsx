import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import supabase from "../../services/supabase";
import { BackgroundLines } from "../ui/background-lines";

const AdminForm = ({ onLogin }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: data.username,
      password: data.password,
    });

    if (error) {
      toast.error("Incorrect username or password.");
    } else {
      onLogin();
      navigate("/admin");
      toast.success("Logged in successfully.");
    }
  };

  return (
    <BackgroundLines svgOptions={"#ccc"}>
      <ToastContainer />
      <section className="relative h-screen w-full bg-primary-bg z-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-Nunito border border-[#ccc] p-10 rounded-lg">
          <h1 className="gradient-main text-lg pb-8">Admin Panel</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 w-[265px] max-w-full">
            <label htmlFor="username" className="gradient-main">Email</label>
            <input
              type="text"
              id="username"
              {...register("username", { required: "Email is required" })}
              className="border border-[#ccc] bg-transparent rounded-md p-2 outline-none"
              placeholder="Email"
            />
            {errors.username && <p className="text-red-500">{errors.username.message}</p>}

            <label htmlFor="password" className="gradient-main">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className="border border-[#ccc] bg-transparent rounded-md p-2 outline-none"
              placeholder="Password"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}

            <button type="submit" className="bg-green-500 text-white p-2 rounded">Login</button>
          </form>
        </div>
      </section>
    </BackgroundLines>
  );
};

export default AdminForm;
