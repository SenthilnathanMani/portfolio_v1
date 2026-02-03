"use client";

import { motion } from "framer-motion";

const contacts = [
  {
    href: "mailto:senthilnathan722@gmail.com",
    title: "Email",
    subtitle: "senthilnathan722@gmail.com",
    desc: "Best for detailed inquiries",
    gradient: "from-blue-500 to-cyan-500",
    borderHover: "hover:border-blue-500/50",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-mail w-7 h-7 text-white"
        aria-hidden="true"
      >
        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/senthilnathan-mani-b7068685/",
    title: "LinkedIn",
    subtitle: "Let's connect",
    desc: "Professional networking",
    gradient: "from-blue-600 to-blue-700",
    borderHover: "hover:border-blue-600/50",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-linkedin w-7 h-7 text-white"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  },
  {
    href: "https://github.com/SenthilnathanMani/",
    title: "GitHub",
    subtitle: "View my work",
    desc: "Open source projects",
    gradient: "from-gray-600 to-gray-800",
    borderHover: "hover:border-gray-500/50",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-github w-7 h-7 text-white"
        aria-hidden="true"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
        <path d="M9 18c-4.51 2-5-2-7-2"></path>
      </svg>
    ),
  },
];

export default function LetsConnect() {
  return (
    <section className="py-32 px-6 relative" id="contact-section">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-6xl mx-auto relative"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            Get In Touch
          </motion.div>
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            id="contact-heading"
          >
            Let's Connect<span className="text-blue-400">.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to chat about technology? I'm always
            open to discussing new opportunities and ideas.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {contacts.map((c, idx) => (
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 + idx * 0.5 }}
              key={idx}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div
                className={`text-card-foreground shadow-sm bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.06] transition-all duration-500 h-full ${c.borderHover}`}
              >
                <div className="p-6 text-center">
                  <div
                    className={`w-14 h-14 mx-auto mb-5 bg-gradient-to-br ${c.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                  >
                    {c.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {c.title}
                  </h4>
                  <p className="text-blue-400 font-medium text-sm mb-2">
                    {c.subtitle}
                  </p>
                  <p className="text-gray-500 text-xs">{c.desc}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
              <div className="absolute inset-0 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-gray-300 text-sm">
              Usually responds within a few hours
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-send w-4 h-4 text-gray-500"
              aria-hidden="true"
            >
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
              <path d="m21.854 2.147-10.94 10.939"></path>
            </svg>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
