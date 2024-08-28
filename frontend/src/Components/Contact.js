import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, subject, message } = formData;

    // Validate the form
    if (!firstName || !lastName || !email || !subject || !message) {
      setError("All fields are required.");
      return;
    }

    setError(""); // Clear previous errors

    try {
      const response = await axios.post("http://localhost:5000/send", formData);
      if (response.status === 200) {
        toast.success("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      setError("Failed to send message, please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-screen-md p-8 rounded-lg shadow-lg">
        <h2 className="mb-4 font-serif text-2xl lg:text-4xl font-extrabold text-center text-gray-900">
          Contact Us
        </h2>
        <p className="mb-4 font-serif font-light text-left text-purple-900 sm:text-xl">
          Want to Contact us? Need details about your management? Let us know.
        </p>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 lg:pr-2">
              <label
                htmlFor="firstName"
                className="block my-2 font-serif text-sm font-medium text-left text-gray-900"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 font-serif"
                placeholder="Enter First Name"
                required
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-2">
              <label
                htmlFor="lastName"
                className="block my-2 font-serif text-sm font-medium text-left text-gray-900"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 font-serif"
                placeholder="Enter Last Name"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block my-2 font-serif text-sm font-medium text-left text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 font-serif"
              placeholder="abc@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block my-2 font-serif text-sm font-medium text-left text-gray-900"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="block w-full p-3 font-serif text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50"
              placeholder="What issue/suggestion do you have?"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block my-2 font-serif text-sm font-medium text-left text-gray-900"
            >
              Your message
            </label>
            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 font-serif"
              placeholder="Query/Suggestion..."
              required
            />
          </div>
          <button
            type="submit"
            className="p-2 mt-2 mb-6 font-serif text-white bg-purple-500 border-purple-600 rounded-lg hover:scale-105"
          >
            Contact
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
