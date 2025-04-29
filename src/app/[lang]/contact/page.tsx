"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiSend } from "react-icons/fi";

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/John1Souza",
      icon: <FiGithub className="text-2xl" />
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/johnatas-pereira-de-souza-7153b3240/",
      icon: <FiLinkedin className="text-2xl" />
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/johnatassouza.dev/",
      icon: <FiInstagram className="text-2xl" />
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
          Vamos Conversar
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Estou disponível para oportunidades de trabalho, colaborações ou apenas uma conversa sobre tecnologia.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Seção de Redes Sociais */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-900 rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-6 text-white">Minhas Redes</h2>
          
          <div className="space-y-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="p-3 bg-gray-700 rounded-full">
                  {link.icon}
                </div>
                <div>
                  <h3 className="font-medium text-white">{link.name}</h3>
                  <p className="text-sm text-gray-400">{link.url}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <FiMail className="text-blue-400 text-2xl" />
              </div>
              <div>
                <h3 className="font-medium text-white">Email</h3>
                <p className="text-gray-400">seuemail@exemplo.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Formulário de Contato */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-900 rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-6 text-white">Envie uma Mensagem</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="Sobre o que deseja falar?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="Escreva sua mensagem aqui..."
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              <FiSend />
              Enviar Mensagem
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}