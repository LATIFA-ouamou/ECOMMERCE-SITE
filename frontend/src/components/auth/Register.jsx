import { User, Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-2xl shadow-lg w-[350px]"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {/* Name */}
        <div className="flex items-center border rounded-lg px-3 mb-4">
          <User size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 outline-none"
          />
        </div>

        {/* Email */}
        <div className="flex items-center border rounded-lg px-3 mb-4">
          <Mail size={18} className="text-gray-400" />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 outline-none"
          />
        </div>

        {/* Password */}
        <div className="flex items-center border rounded-lg px-3 mb-4">
          <Lock size={18} className="text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 outline-none"
          />
        </div>

        <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
          Register
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?
          <a href="/" className="text-green-600 ml-1">
            Login
          </a>
        </p>
      </motion.div>
    </div>
  );
}