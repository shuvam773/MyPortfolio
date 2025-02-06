import { CONTACT } from '../constants';
import { motion } from "motion/react"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.5}}
      className="my-10 text-center text-4xl">Contact</motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1}}
        className="my-4">{CONTACT.address}</motion.p>
        <motion.p 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:1}}
        className="my-4">{CONTACT.phoneNo}</motion.p>
        <a href="mailto:shuvam.sk25@gmail.com" className="border-b">
          {CONTACT.email}
        </a>
        {/* <p className=" -rotate-90 fixed right-0 transform -translate-y-20 font-serif bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-2xl">
          <a
            href="https://flowcv.com/resume/q5671gtm0u"
            target="_blank"
            title="Resume"
          >
            RESUME
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default Contact;
