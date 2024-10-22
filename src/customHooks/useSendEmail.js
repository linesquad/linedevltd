import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function useSentEmail() {
  const [loader, setLoader] = useState(false);

  const sendEmail = (emailData) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: emailData.fullName,
      from_email: emailData.email,
      to_name: "Mariam",
      message: emailData.message,

      number: emailData.phoneNumber,
    };
    console.log(templateParams);
    setLoader(true);
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)

      .then((response) => {
        console.log("Email sent successfully", response);
      })
      .catch((error) => {
        console.error("Error sending email", error);
      })
      .finally(() => {
        setLoader(false);
      });

    return true;
  };

  return {
    sendEmail,

    loader,
  };
}
