import { ArrowUp } from "lucide-react";
import { FadeProvider } from "../fade-provider/FadeProvider";
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t  border-gray-300 dark:border-gray-800 py-8 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
          &copy; 2026 Вебстудія Eugene Inc.
        </p>
        <button
          onClick={scrollToTop}
          className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 rounded-full transition-colors group flex items-center gap-2"
        >
          <span className="md:hidden">Догори</span>
          <ArrowUp
            size={20}
            className="group-hover:-translate-y-1 transition-transform"
          />
        </button>
      </div>
    </footer>
  );
};
