import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Information</h3>

        <div className="mt-12 flex flex-col gap-8">
          <p className="text-white font-medium">
            <strong>Email:</strong> duranjitbharadwaj@gmail.com
          </p>
          <p className="text-white font-medium">
            <strong>Phone:</strong> +91 7002938395
          </p>
          <p className="text-white font-medium">
            <strong>LinkedIn:</strong>
            <a
              href="https://www.linkedin.com/in/duranjit-bharadwaj-8053b32a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Visit my LinkedIn Profile
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
