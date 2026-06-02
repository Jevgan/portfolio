import { useState, useEffect } from "react";
import { About } from "@/shared/components/about-us/AboutUs";
import { Contact } from "@/shared/components/contacts/Contacts";
import { Footer } from "@/shared/components/footer/Footer";
import { Header } from "@/shared/components/header/Header";
import { Hero } from "@/shared/components/hero/Hero";
import { Projects } from "@/shared/components/projects/Projects";

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
