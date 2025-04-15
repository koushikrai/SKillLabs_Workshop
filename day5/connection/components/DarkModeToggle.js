"use client";
//import { useStore } from "../store/useStore";

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useStore();

  return (
    <button 
      onClick={toggleDarkMode} 
      className="p-2 rounded bg-gray-800 text-white transition duration-300 hover:bg-gray-700"
    >
      {darkMode ? '🌙 Dark Mode' : '☀ Light Mode'}
    </button>
  );
}
