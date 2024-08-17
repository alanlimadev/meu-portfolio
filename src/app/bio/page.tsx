'use client';

import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Bio() {
  const handleDevelopmentClick = () => {
    toast.info('Em desenvolvimento!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="bg-gradient-to-tr from-zinc-50 via-white to-slate-100 min-h-screen flex flex-col items-center text-zinc-900 py-20">
      <ToastContainer />
      <div className="flex flex-col items-center flex-grow justify-center">
        <motion.img
          src="/perfil.png"
          alt="Perfil Alan Lima"
          className="w-28 rounded-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        <motion.h1
          className="mt-2 text-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          @alanlimadev
        </motion.h1>
        <motion.div
          className="mt-10 text-white flex flex-col text-sm gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.a
            className="bg-gradient-to-r from-orange-300/95 via-orange-400 to-orange-500 w-64 py-3 rounded-sm mx-auto text-center cursor-pointer hover:shadow-md hover:shadow-zinc-300 transition-all duration-300 ease-in-out"
            onClick={handleDevelopmentClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Conheça meu trabalho
          </motion.a>
          <motion.a
            className="bg-gradient-to-r from-orange-300/95 via-orange-400 to-orange-500 w-64 py-3 rounded-sm mx-auto text-center cursor-pointer hover:shadow-md hover:shadow-zinc-300 transition-all duration-300 ease-in-out"
            href="https://api.whatsapp.com/send?phone=558894422223"
            target="_blank"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            Contato direto no WhatsApp
          </motion.a>
          <motion.a
            className="bg-gradient-to-r from-orange-300/95 via-orange-400 to-orange-500 w-64 py-3 rounded-sm mx-auto text-center cursor-pointer hover:shadow-md hover:shadow-zinc-300 transition-all duration-300 ease-in-out"
            onClick={handleDevelopmentClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            Meu currículo
          </motion.a>
        </motion.div>
      </div>
      <motion.footer
        className="p-4 w-full flex justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <motion.a
          href="https://www.instagram.com/alanlimadev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <Instagram className="text-zinc-700 w-5 hover:text-orange-700" />
        </motion.a>
        <motion.a
          href="https://www.github.com/alanlimadev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.5 }}
        >
          <Github className="text-zinc-700 w-5 hover:text-orange-700" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/alanlimadev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <Linkedin className="text-zinc-700 w-5 hover:text-orange-700" />
        </motion.a>
      </motion.footer>
    </div>
  );
}
