import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function useSentEmail() {
  const [loader, setLoader] = useState(false);

  const sendEmail = async (emailData) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: emailData.name,
      from_email: emailData.gmail,
      to_name: "Line",
      message: emailData.message,
      category: emailData.category,
      number: emailData.number,
      course: emailData.course,
    };

    setLoader(true);

    try {
      emailjs.init(publicKey);

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );
      console.log("Email sent successfully", response);
      return response;
    } catch (error) {
      console.error("Error sending email", error);
      throw new Error("Email sending failed");
    } finally {
      setLoader(false);
    }
  };

  return {
    sendEmail,
    loader,
  };
}
