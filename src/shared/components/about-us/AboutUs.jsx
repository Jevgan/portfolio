import { FadeProvider } from "../fade-provider/FadeProvider";
import I from '/src/assets/I.jpg'
export const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeProvider>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Про мене
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shrink-0">
              <img
                src={I}
                alt="Аватар"
                className="w-full h-full object-cover object-[50%_100%] bg-white"
              />
            </div>
            <div className="text-gray-700 dark:text-gray-300 space-y-4 text-lg">
              <p>
                Привіт! Я — Євгеній Алєксєєв, Front-End розробник з пристрастю
                до створення красивих, інтуїтивно зрозумілих та адаптивних
                інтерфейсів. Мій шлях у вебпрограмуванні почався з цікавості до
                того, як працюють сайти, і переріс у професійну діяльність.
              </p>
              <p>
                Я володію сучасним стеком технологій, включаючи{" "}
                <strong>
                  HTML5, CSS3, JavaScript (ES6+), React та Tailwind CSS
                </strong>
                . Завжди намагаюся писати чистий, модульний код і приділяю
                велику увагу користувацькому досвіду (UX) та продуктивності.
              </p>
            </div>
          </div>
        </FadeProvider>
      </div>
    </section>
  );
};
