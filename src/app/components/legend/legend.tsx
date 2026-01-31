"use client";

import { motion } from "framer-motion";
import ClientsIcon from "./legend-icons/clients";
import ExperianceIcon from "./legend-icons/experiance";
import LinesOfCodesIcon from "./legend-icons/line-of-codes";
import ProjectsIcon from "./legend-icons/projects";

export default function Legend() {
  const legendItems = [
    { value: "8+", label: "Years Experience", icon: ExperianceIcon },
    { value: "10+", label: "Projects Delivered", icon: ProjectsIcon },
    { value: "100+", label: "Lines of Code", icon: LinesOfCodesIcon },
    { value: "10+", label: "Happy Clients", icon: ClientsIcon },
  ];
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none"></div>
      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {legendItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2 * (index + 1),
              }}
              className="text-center group relative hover:translate-y-[-5px] transition-transform duration-100"
              key={item.label}
            >
              <div className="relative p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:bg-white/[0.05]">
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:border-blue-500/30 transition-all duration-300">
                  <item.icon></item.icon>
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {item.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
