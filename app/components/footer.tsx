import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center mb-5 border-green-500 border-2">
      <a href="mailto:hassanshahzad2002sm@gmail.com" rel="noopener noreferrer">
        <MdEmail className="text-white w-6 h-6 hover:scale-110 transition-transform" />
      </a>
      <a href="https://www.linkedin.com/in/thehassanshahzad/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-white w-6 h-6 hover:scale-110 transition-transform" />
      </a>
      <a href="https://www.github.com/hassanshahzad5/" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-white w-6 h-6 hover:scale-110 transition-transform" />
      </a>
      <a href="https://www.instagram.com/thehassanshahzad/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-white w-6 h-6 hover:scale-110 transition-transform" />
      </a>
    </footer>
  )
}