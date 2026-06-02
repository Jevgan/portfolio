import { FadeProvider } from "../fade-provider/FadeProvider";
export const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-12 md:pt-32 md:pb-24 flex items-center min-h-[80vh]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <FadeProvider>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
            Ласкаво просимо на сайт <br />
            <span className="text-blue-600 dark:text-blue-400">
              Євгенія Алєксєєва
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            Я створюю креативні вебрішення.
          </p>
          <a
            href="#about"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/30"
          >
            Дізнатися більше
          </a>
        </FadeProvider>
        <FadeProvider className="hidden md:flex justify-center">
          <div className="w-72 h-72 lg:w-96 lg:h-96 bg-linear-to-tr from-blue-500 to-purple-500 rounded-full animate-[spin_5s_linear_infinite] opacity-80 blur-2xl absolute"></div>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Web Development"
            className="rounded-2xl shadow-2xl z-10 w-full max-w-md object-cover"
          />
        </FadeProvider>
      </div>
    </section>
  );
};
