import { useForm } from "react-hook-form";
import Button from "../Button";
import { IoClose } from "react-icons/io5";
import useSentEmail from "../../customHooks/useSendEmail";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef } from "react";

export default function RegistrationModal({
  onclose,
  course,
  showRegistrationModal,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,

    reset,
  } = useForm();
  console.log(course);
  const { sendEmail } = useSentEmail();
  const onSubmit = async (data) => {
    const newData = { ...data, course };

    try {
      await sendEmail(newData);
      toast.success("Email sent successfully!");
      reset();
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to send email. Please try again.");
    } finally {
      onclose();
    }
  };

  const handleTrim = (field) => (e) => {
    setValue(field, e.target.value.trim(), { shouldValidate: true });
  };
  const modalRef = useRef(null);
  const butref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        butref &&
        butref.current.contains(event.target)
      ) {
        onclose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onclose]);
  const close = () => {
    onclose();
    console.log("LL");
  };
  console.log(showRegistrationModal, "showRegistrationModal");
  return (
    <div
      ref={modalRef}
      className="absolute top-0 z-30 bg-[#040414] border-n-1/10 border   rounded-[8px] pt-[50px] pb-[20px] flex items-center justify-center w-full max-w-[800px]"
    >
      <div
        ref={butref}
        onClick={() => close()}
        className="absolute   cursor-pointer top-[20px] right-[30px]"
      >
        <IoClose size={30} />
      </div>

      <form
        className="flex flex-col gap-[10px]  justify-center rounded-[8px] md:w-[60%] w-[90%]"
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

        <div className="flex flex-col items-center justify-center"></div>
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
