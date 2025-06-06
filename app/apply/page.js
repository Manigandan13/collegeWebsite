"use client"
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const page = () => {
  

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [formData, setFormData] = useState({});

  const onSubmit = async (data, e) => {
    e.preventDefault(); // Prevent default form submit behavior

    const form = e.target; // Get form element reference
    const formData = new FormData(form); // Create FormData from the form element

    const response = await fetch("https://formsubmit.co/viraltamilan13072005@gmail.com", {
      method: "POST",
      body: formData,  // Pass the FormData object
    });

    if (response.ok) {
      alert("Form submitted successfully!");
      reset(); // Optionally reset the form after submission
    } else {
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <div className="py-12  bg-gray-100 mt-6">
      <div className="max-w-4xl mx-auto p-8 px-13 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl text-center mb-6">Apply Now</h2>
        <form action="https://formsubmit.co/viraltamilan13072005@gmail.com" method="post">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-lg font-semibold">Name</label>
              <input
                type="text"
                className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-600 transition-all ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name.message}</span>
              )}
            </div>

            <div>
              <label className="block text-lg font-semibold">10th Percentage</label>
              <input
                type="text"
                className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-600 transition-all ${
                  errors.tenthPercentage ? "border-red-500" : "border-gray-300"
                }`}
                {...register("tenthPercentage", {
                  required: "10th Percentage is required",
                  pattern: {
                    value: /^[0-9]+(\.[0-9]{1,2})?$/,
                    message: "Invalid percentage",
                  },
                })}
              />
              {errors.tenthPercentage && (
                <span className="text-red-500 text-sm">{errors.tenthPercentage.message}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-lg font-semibold">12th Percentage</label>
              <input
                type="text"
                className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-600 transition-all ${
                  errors.twelfthPercentage ? "border-red-500" : "border-gray-300"
                }`}
                {...register("twelfthPercentage", {
                  required: "12th Percentage is required",
                  pattern: {
                    value: /^[0-9]+(\.[0-9]{1,2})?$/,
                    message: "Invalid percentage",
                  },
                })}
              />
              {errors.twelfthPercentage && (
                <span className="text-red-500 text-sm">{errors.twelfthPercentage.message}</span>
              )}
            </div>

            <div>
              <label className="block text-lg font-semibold">Mobile Number</label>
              <input
                type="text"
                className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-600 transition-all ${
                  errors.mobileNumber ? "border-red-500" : "border-gray-300"
                }`}
                {...register("mobileNumber", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid mobile number",
                  },
                })}
              />
              {errors.mobileNumber && (
                <span className="text-red-500 text-sm">{errors.mobileNumber.message}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-lg font-semibold">Email ID</label>
              <input
                type="email"
                className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-600 transition-all ${
                  errors.emailId ? "border-red-500" : "border-gray-300"
                }`}
                {...register("emailId", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.emailId && (
                <span className="text-red-500 text-sm">{errors.emailId.message}</span>
              )}
            </div>

            <div>
              <label className="block text-lg font-semibold">School Name</label>
              <input
                type="text"
                className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-600 transition-all ${
                  errors.schoolName ? "border-red-500" : "border-gray-300"
                }`}
                {...register("schoolName", { required: "School name is required" })}
              />
              {errors.schoolName && (
                <span className="text-red-500 text-sm">{errors.schoolName.message}</span>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-lg font-semibold">Degree</label>
            <select
              className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-600 transition-all ${
                errors.degree ? "border-red-500" : "border-gray-300"
              }`}
              {...register("degree", { required: "Please select a degree" })}
            >
              <option value="">Select Degree</option>
              <option value="BCA">BCA (Bachelor of Computer Applications) ₹26,000/year</option>
              <option value="B.Sc Computer Science">B.Sc Computer Science ₹25,000/year</option>
              <option value="B.Sc Data Science">B.Sc Data Science ₹26,000/year</option>
              <option value="B.Sc Chemistry">B.Sc Chemistry ₹19,000/year</option>
              <option value="B.Sc Physics">B.Sc Physics ₹18,000/year</option>
              <option value="B.Sc Mathematics">B.Sc Mathematics ₹13,000/year</option>
              <option value="B.Com">B.Com (Bachelor of Commerce) ₹17,000/year</option>
              <option value="B.Com Computer Application">B.Com Computer Application ₹20,000/year</option>
              <option value="BBA">BBA (Bachelor of Business Administration) ₹14,000/year</option>
              <option value="B.A English">B.A English ₹15,000/year</option>
              <option value="B.A Defence Studies">B.A Defence Studies ₹15,000/year</option>
              <option value="B.A Tamil">B.A Tamil ₹15,000/year</option>
              <option value="M.Sc Computer Science">M.Sc Computer Science ₹25,000/year</option>
              <option value="M.Com">M.Com ₹20,000/year</option>
            </select>
            {errors.degree && (
              <span className="text-red-500 text-sm">{errors.degree.message}</span>
            )}
          </div>

          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now
          </motion.button>
        </form>
      </div>
    </div>
  );
};


export default page;

