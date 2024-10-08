import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { PiReadCvLogoLight } from "react-icons/pi";
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <nav className="mb-20 flex flex-wrap items-center justify-between py-6 px-4">
      <div className="flex flex-shrink-0 min-w-0 items-center">
        <h1 className="text-3xl mx-2 whitespace-nowrap">Ankur.dev</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl w-full sm:w-auto sm:justify-start ">
        <motion.a whileHover={{ opacity: 1, y: -8 }} href="https://www.linkedin.com/in/ankur-bhatia-/" target='_blank'>
          <FaLinkedin />
        </motion.a>
        <motion.a whileHover={{ opacity: 1, y: -8 }} href="https://github.com/Ankur2005" target='_blank'>
          <FaGithub />
        </motion.a>
        <motion.a whileHover={{ opacity: 1, y: -8 }} href="https://www.instagram.com/_ankur0_" target='_blank'>
          <FaInstagram />
        </motion.a>
        <motion.a whileHover={{ opacity: 1, y: -8 }} href="https://x.com/anku85097" target='_blank'>
          <FaSquareXTwitter />
        </motion.a>
        <motion.a whileHover={{ opacity: 1, y: -8 }} href="https://drive.google.com/file/d/1seu8cKNJ-wI_mw2O4P_34FMpFPBoiRDC/view?usp=sharing" target='_blank'>
          <PiReadCvLogoLight />
        </motion.a>
      </div>
    </nav>
  );
}

export default Navbar;
