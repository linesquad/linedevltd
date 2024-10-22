import { useForm } from "react-hook-form";
import Button from "../Button";
import MovingStars_Sphere from "./MovingStars_Sphere";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const handleTrim = (field) => (e) => {
    setValue(field, e.target.value.trim(), { shouldValidate: true });
  };
  return (
    <div className="w-full z-[1000]  py-[100px] flex items-center justify-center">
      <MovingStars_Sphere />
      <form
        className="flex absolute flex-col md:gap-[10px] gap-[5px] rounded-[8px] w-[60%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className={`px-[20px] md:text-[16px] text-[14px]  transition-all duration-[1s] ease-in-out py-[15px] bg-transparent border rounded-[8px] ${
            errors.name ? "border-red-500" : "border-[rgb(172 106 255)]"
          }`}
          placeholder="Name or Company"
          {...register("name", { required: "Name or company is required" })}
          onBlur={handleTrim("name")}
        />
        <div className="h-[10px] mb-[10px]">
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>
        <input
          className={`px-[20px] transition-all md:text-[16px] text-[14px] duration-[1s] ease-in-out py-[15px] bg-transparent border rounded-[8px] ${
            errors.gmail ? "border-red-500" : "border-[rgb(172 106 255)]"
          }`}
          onBlur={handleTrim("gmail")}
          placeholder="Email"
          {...register("gmail", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
              message: "Please enter a valid Gmail address",
            },
          })}
        />
        <div className="h-[10px] mb-[10px]">
          {errors.gmail && (
            <span className="text-red-500">{errors.gmail.message}</span>
          )}
        </div>
        <input
          className={`px-[20px] md:text-[16px] text-[14px] transition-all duration-[1s] ease-in-out py-[15px] bg-transparent border rounded-[8px] ${
            errors.number ? "border-red-500" : "border-[rgb(172 106 255)]"
          }`}
          placeholder="Phone Number"
          {...register("number", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]+$/,
              message: "Please enter a valid phone number",
            },
          })}
          onBlur={handleTrim("number")}
        />
        <div className="h-[10px] mb-[10px]">
          {errors.number && (
            <span className="text-red-500">{errors.number.message}</span>
          )}
        </div>

        <textarea
          rows={3}
          className={`px-[20px] md:text-[16px] text-[14px] transition-all duration-[1s] ease-in-out py-[15px] bg-transparent border rounded-[8px] ${
            errors.message ? "border-red-500" : "border-[rgb(172 106 255)]"
          }`}
          placeholder="About Your expectations"
          {...register("message", { required: "Message is required" })}
          onBlur={handleTrim("message")}
        />
        <div className="h-[10px] mb-[10px]">
          {errors.message && (
            <span className="text-red-500">{errors.message.message}</span>
          )}
        </div>

        <div className="flex justify-center">
          <div className="pt-[40px] flex items-center justify-center w-full">
            <Button className="lg:py-[20px] transition-all duration-[1s] ease-in-out lg:w-[500px] md:w-[300px] w-[200px] py-[10px]">
              SUBMIT
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
