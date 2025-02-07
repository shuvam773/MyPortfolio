import { CONTACT } from '../constants';
import { motion } from 'motion/react';
import Swal from "sweetalert2"

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "36229217-b01b-4c80-aa2d-12811a6fb64a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent succesfully!",
        icon: "success"
      }).then(() => {
        event.target.reset(); 
      });
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Contact
      </motion.h2>
      <motion.section 
       whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      className="flex justify-center items-center  ">
        <form className="w-full max-w-lg  backdrop-blur-lg rounded-2xl p-8 shadow-lg" onSubmit={onSubmit}>
          <div className="mb-6">
            <label
              className="block text-neutral-300 text-lg font-medium mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full bg-transparent border border-neutral-400 text-neutral-100 placeholder-neutral-500 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-neutral-300 text-lg font-medium mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="w-full bg-transparent border border-neutral-400 text-neutral-100 placeholder-neutral-500 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-neutral-300 text-lg font-medium mb-2"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              name="message"
              className="w-full bg-transparent border border-neutral-400 text-neutral-100 placeholder-neutral-500 p-3 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Enter your message"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-400 text-neutral-900 font-semibold py-3 rounded-md hover:bg-cyan-500 transition duration-300"
          >
            Submit
          </button>
        </form>
      </motion.section>

      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href="mailto:shuvam.sk25@gmail.com" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
