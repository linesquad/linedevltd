import { useForm } from "react-hook-form";
import Button from "../Button";
import MovingStars_Sphere from "./MovingStars_Sphere";
import useSentEmail from "../../customHooks/useSendEmail";
import { pricing } from "../../constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm();
  const { sendEmail } = useSentEmail();
  const onSubmit = async (data) => {
    try {
      await sendEmail(data);
      toast.success("Email sent successfully!");
      reset();
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to send email. Please try again.");
    }
  };

  const handleTrim = (field) => (e) => {
    setValue(field, e.target.value.trim(), { shouldValidate: true });
  };
  const selectedCategory = watch("category");
  return (
    <div className="w-full z-[100] py-[80px] flex items-center justify-center">
      <MovingStars_Sphere />
      <ToastContainer />
      <form
        className="flex absolute flex-col gap-[10px]  rounded-[8px] md:w-[60%] w-[90%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className={`px-[20px] md:text-[16px] text-[14px] transition-all duration-[1s] ease-in-out py-[15px] bg-transparent border rounded-[8px] ${
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
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
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

        <div className="flex flex-col items-center justify-center">
          <div className="flex  items-center justify-center md:gap-[40px] gap-[20px]">
            {pricing.map((item, index) => (
              <div
                key={index}
                className={`border cursor-pointer rounded-[8px] p-[10px] mb-[10px] transition-all duration-300 ease-in-out ${
                  selectedCategory === item.title
                    ? "border-[green]"
                    : errors.category
                    ? "border-red-500"
                    : "border-[rgb(172 106 255)]"
                }`}
              >
                <label
                  className="cursor-pointer md:text-[16px] text-[12px]"
                  htmlFor={`${item.title}-${index}`}
                >
                  {item.title}
                </label>
                <input
                  className="hidden"
                  type="radio"
                  id={`${item.title}-${index}`}
                  name="category"
                  value={item.title}
                  {...register("category", {
                    required: "Choose one of them",
                  })}
                />
              </div>
            ))}
          </div>
          <div className="h-[10px] mb-[10px]">
            {errors.category && (
              <span className="text-red-500">{errors.category.message}</span>
            )}
          </div>
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
