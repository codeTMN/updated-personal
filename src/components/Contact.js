import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaTelegramPlane } from "react-icons/fa";
import "./Contact.css";
import { IoClose } from "react-icons/io5";

const Contact = ({ handleClose }) => {
  // Getting HTML elements for message successfully
  const success = document.getElementById("success");
  const failed = document.getElementById("failed");

  // Form Validation Schema with yup
  const schema = yup.object().shape({
    fullname: yup.string().required("Please enter your Full Name"),
    email: yup.string().email().required("Please a correct email address"),
    message: yup.string().required("Enter a message for Kosy"),
  });

  //   React-Hook-Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  //   Sending email using EmailJS
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");

  // EmailJS service_id, template_id and public_key
  const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const sendEmail = async (formData) => {
    // e.preventDefault();
    // return false;

    //   const onSubmit = (data) => {
    //     console.log(data);
    //   };

    const data = {
      service_id: service_id,
      template_id: template_id,
      user_id: public_key,
      template_params: {
        from_name: formData.fullname,
        from_email: formData.email,
        to_name: "Kosisochukwu",
        message: formData.message,
      },
    };

    // Send the Email
    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      success.style.display = "block";
      console.log(res.data);
      reset();
      setTimeout(() => {
        success.style.display = "none";
      }, 3000);
    } catch (error) {
      console.log(error);
    }

    // const templateParams = {
    //   from_name: name,
    //   from_email: email,
    //   to_name: "Kosisochukwu",
    //   message: message,
    // };

    // emailjs
    //   .send(service_id, template_id, templateParams, public_key)
    //   .then((response) => {
    //     console.log("SUCCESS!", response);
    //     setName("");
    //     setEmail("");
    //     setMessage("");
    //   })
    //   .catch((error) => {
    //     console.log("FAILED...", error.text);
    //   });
  };
  const navigate = useNavigate();

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 100,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  //   Creates a new object that contains dynamic template params

  return (
    <motion.div
      className="contact"
      variants={dropIn}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form className="forms-section" onSubmit={handleSubmit(sendEmail)}>
        <IoClose
          className="close-button"
          onClick={() => {
            navigate("/header");
          }}
        />
        <h4>Send a message</h4>
        <div className="contact-section">
          <p className="write-up">
            Please contact me directly at{" "}
            <a href="mailto:kosisochukwuaniekwe09@gmail.com">
              kosisochukwuaniekwe09@gmail.com
            </a>{" "}
            or through this form.
          </p>
          <input
            type="text"
            placeholder="Fullname..."
            {...register("fullname")}
          ></input>
          <p className="errors">{errors.fullname?.message}</p>
          <input
            type="text"
            placeholder="Email..."
            {...register("email")}
          ></input>
          <p className="errors">{errors.email?.message}</p>
          <textarea
            id="message"
            placeholder="Drop a message for Kosy"
            {...register("message")}
          ></textarea>
          <p className="errors">{errors.message?.message}</p>
          <button type="submit">
            Submit
            <FaTelegramPlane className="icon" />
          </button>
          {/* <input type="submit" className="submit"></input> */}
          <div className="message">
            <div className="success" id="success">
              Your Message was Successfully Sent!
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
