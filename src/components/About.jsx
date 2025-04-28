import aboutImg from "../assets/about.png"
import { ABOUT_TEXT } from "../constants"
import { motion } from "motion/react"
import Tilt from 'react-parallax-tilt' // import Tilt

const About = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex p-4 flex-wrap">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex p-8 justify-center">
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.45}
              scale={1.05}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              transitionSpeed={2500}
              className="rounded-2xl "
            >
              <img 
                className="rounded-2xl shadow-inner"  
                src={aboutImg} 
                alt="About"
              />
            </Tilt>
          </div>
        </motion.div>

        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full flex items-center justify-center lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-lg">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
