import projectsData from "@/assets/projects.data";
import { ExternalLink } from "lucide-react";
import { FadeProvider } from "../fade-provider/FadeProvider";

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeProvider>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Мої проєкти
          </h2>
          <div className="flex flex-1 max-h-96  justify-center gap-8">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="group w-full relative rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-transform hover:-translate-y-2"
              >
                <img src={project.img} alt={`${project.title} picture`} />
                <div className=" bg-blue-50 dark:bg-gray-800  p-6 absolute bottom-0 left-0 right-0">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-4">
                    {project.tech}
                  </p>
                </div>

                <div className="absolute inset-0 bg-blue-600/90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.desc}</p>
                  <a
                    href={project.href}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition"
                  >
                    Переглянути <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </FadeProvider>
      </div>
    </section>
  );
};
