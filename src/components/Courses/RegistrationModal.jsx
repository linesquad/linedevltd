import { useForm } from "react-hook-form";
import Button from "../Button";
import { IoClose } from "react-icons/io5";
import useSentEmail from "../../customHooks/useSendEmail";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function RegistrationModal({
  course,
  setShowRegistrationModal,
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
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.7 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 0.8,
        duration: 0.6,
        ease: "anticipate",
      },
    },
    exit: {
      opacity: 0,
      y: 100,
      scale: 0.7,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="fixed top-[80px] right-0 bottom-0 left-0 flex justify-center items-center bg-[#000]/50"
      onClick={() => setShowRegistrationModal(false)}
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        ref={modalRef}
        className="absolute z-30 bg-[#040414] border-n-1/10 border rounded-[8px] pt-[50px] pb-[20px] flex items-center justify-center w-full max-w-[800px]"
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div
          ref={butref}
          onClick={() => setShowRegistrationModal(false)}
          className="absolute   cursor-pointer top-[20px] right-[30px]"
        >
          <IoClose size={30} />
        </div>

        <form
          className="flex flex-col gap-[10px]  justify-center rounded-[8px] md:w-[60%] w-[90%]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className={`px-[20px] md:text-[16px] text-[14px] transition-all duration-[1s] ease-in-out py-[10px] bg-transparent border rounded-[8px] ${
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
            className={`px-[20px] transition-all md:text-[16px] text-[14px] duration-[1s] ease-in-out py-[10px] bg-transparent border rounded-[8px] ${
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
            className={`px-[20px] md:text-[16px] text-[14px] transition-all duration-[1s] ease-in-out py-[10px] bg-transparent border rounded-[8px] ${
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

          <input
            className={`px-[20px] md:text-[16px] text-[14px] transition-all duration-[1s] ease-in-out py-[10px] bg-transparent border rounded-[8px] ${
              errors.courseTitle
                ? "border-red-500"
                : "border-[rgb(172 106 255)]"
            }`}
            value={course}
            {...register("courseTitle", {
              required: "courseTitle is required",
            })}
          />
          <div className="h-[10px] mb-[10px]">
            {errors.courseTitle && (
              <span className="text-red-500">{errors.courseTitle.message}</span>
            )}
          </div>

          <div className="flex flex-col items-center justify-center"></div>
          <textarea
            rows={3}
            className={`px-[20px] md:text-[16px] text-[14px] transition-all duration-[1s] ease-in-out py-[10px] h-[80px] bg-transparent border rounded-[8px] ${
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
      </motion.div>
    </motion.div>
  );
}
