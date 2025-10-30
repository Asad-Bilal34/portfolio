import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Toaster, toast } from "react-hot-toast";

const InputField = ({ label, placeholder, value, onChange, type = "text", error = "" }) => (
  <motion.div
    className="flex flex-col w-full md:w-1/2 p-2"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <label className="font-bold text-sm mb-2 text-gray-700 dark:text-gray-300 text-left">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 ${
        error ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-700"
      }`}
    />
    {error && <p className="text-red-500 text-xs mt-1 text-left">{error}</p>}
  </motion.div>
);

const ContactItem = ({ icon, title, content }) => (
  <motion.div
    className="flex flex-col items-center text-gray-800 dark:text-gray-300"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center gap-3 text-xl font-bold">
      <img src={icon} alt="" className="w-10 h-10" />
      <h3>{title}</h3>
    </div>
    <p className="mt-2 text-gray-600 dark:text-gray-400 text-center">{content}</p>
  </motion.div>
);

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const formRef = useRef();

  const validateForm = () => {
    const newErrors = {
      firstName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    };

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Full name is required";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "Full name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (optional but if provided, validate format)
    if (formData.phoneNumber.trim() && !/^\+?[\d\s-()]{10,}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    // Check if there are any errors
    return !Object.values(newErrors).some(error => error !== "");
  };

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fill all the fields in the form");
      return;
    }

    emailjs
      .send(
        "service_l8aprwm",
        "template_gkestay",
        {
          name: formData.firstName,
          email: formData.email,
          phone: formData.phoneNumber,
          subject: formData.subject,
          message: formData.message,
        },
        "k-O_EPnX8LFiGTSRa"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({
            firstName: "",
            email: "",
            phoneNumber: "",
            subject: "",
            message: "",
          });
          setErrors({
            firstName: "",
            email: "",
            phoneNumber: "",
            subject: "",
            message: "",
          });
        },
        () => {
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };

  const contactData = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/18179b6ac038d84423d4ee4c96386281587fa212096dec52fd422ee065082649",
      title: "Phone",
      content: "+92 302 7823434",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9791065adc6c16870ff4a2dc0b81db91ca10e8583d26b74df0f342958a2a420",
      title: "Email",
      content: "asadbilal0.789@gmail.com",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f06f2bccb9b07bf8a8046586bd9f211dbb71be297a47e5dd6d80a6ee9193342",
      title: "Visit",
      content: "Gulbag3, Lahore, Pakistan",
    },
  ];

  return (
    <motion.section
      id="contact-section"
      className="py-24 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Toaster />
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Contact Me
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Have a project idea or want to collaborate? I'd love to hear from
            you — let's make something great together.
          </p>
        </motion.div>

        {/* Contact Info */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {contactData.map((item, i) => (
            <ContactItem
              key={i}
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-16 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-xl rounded-1xl p-6 sm:p-10 md:p-12 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-4 w-full ">
            <InputField
              label="Full Name"
              value={formData.firstName}
              onChange={(value) => handleChange("firstName", value)}
              error={errors.firstName}
            />
            <InputField
              label="Email"
              value={formData.email}
              type="email"
              onChange={(value) => handleChange("email", value)}
              error={errors.email}
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <InputField
              label="Phone Number"
              value={formData.phoneNumber}
              onChange={(value) => handleChange("phoneNumber", value)}
              error={errors.phoneNumber}
            />
            <InputField
              label="Subject"
              value={formData.subject}
              onChange={(value) => handleChange("subject", value)}
              error={errors.subject}
            />
          </div>

          {/* Message */}
          <motion.div
            className="flex flex-col w-full p-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <label className="font-bold text-sm mb-2 text-gray-700 dark:text-gray-300 text-left">
              Message
            </label>
            <textarea
              placeholder="Type your message here..."
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 ${
                errors.message ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-700"
              }`}
              rows={5}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1 text-left">{errors.message}</p>}
          </motion.div>

          {/* Button */}
          <motion.div
            className="flex justify-center md:justify-start pt-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              type="submit"
              className="text-lg text-white bg-indigo-600 rounded-full px-10 py-3 hover:bg-indigo-700 shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactUsForm;