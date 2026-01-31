import { motion } from "framer-motion";
import GitHub from "./social-links-icons/githubIcon";
import LinkedInIcon from "./social-links-icons/linkedIn";
import MailIcon from "./social-links-icons/mailIcon";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/SenthilnathanMani/",
      icon: GitHub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/senthilnathan-mani-b7068685/",
      icon: LinkedInIcon,
    },
    {
      name: "Mail",
      url: "mailto:senthilnathan.mani@gmail.com",
      icon: MailIcon,
    },
  ];
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link, index) => (
        <motion.a
          href={link.url}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2 * (index + 1),
          }}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:text-blue-500 text-gray-400 hover:scale-105"
          key={link.name}
        >
          <link.icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  );
}
