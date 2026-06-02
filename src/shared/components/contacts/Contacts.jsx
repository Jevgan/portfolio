import { useState, useEffect } from "react";
import { FadeProvider } from "../fade-provider/FadeProvider";
import { isValidEmail, isEmpty } from "@/shared/utils/validate";
import { Mail } from "lucide-react";
import Linkedin from "@/assets/linkedin.svg";
import Github from "@/assets/github.svg";

const emptyDoc = {
  name: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const savedData =
    JSON.parse(localStorage.getItem("contactFormData")) || emptyDoc;

  const [formData, setFormData] = useState(savedData);
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    localStorage.setItem("contactFormData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validate = () => {
    const newErrors = {};
    const { name, email, message } = formData;

    if (isEmpty(name)) {
      newErrors.name = "Ім'я обов'язкове";
    }

    if (isEmpty(email)) {
      newErrors.email = "Email обов'язковий";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Невірний формат email";
    }

    if (isEmpty(message)) {
      newErrors.message = "Повідомлення не може бути порожнім";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSuccess(true);
      setFormData(emptyDoc);
      localStorage.removeItem("contactFormData");

      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <section
      id="contacts"
      className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeProvider>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Контакти
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Давайте співпрацювати!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Завжди відкритий до нових пропозицій та цікавих проєктів.
                Зв'яжіться зі мною будь-яким зручним способом.
              </p>
              <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-sm">
                  <Mail
                    size={32}
                    className=" text-blue-600 dark:text-blue-400"
                  />
                </div>
                <a
                  className="text-blue-600 hover:text-blue-400"
                  href="mailto:alieksieiev.yevhenii.ipz@rshu.edu.ua"
                >
                  alieksieiev.yevhenii.ipz@rshu.edu.ua
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-sm">
                  <img className="w-8 h-8" src={Github} />
                </div>
                <a
                  className="text-blue-600 hover:text-blue-400"
                  href="https://github.com/Jevgan"
                >
                  Jevgan
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-sm">
                  <img className="w-8 h-8" src={Linkedin} />
                </div>
                <a
                  className="text-blue-600 hover:text-blue-400"
                  href="https://www.linkedin.com/in/eugene-aliexieiev/"
                >
                  Eugene Alieksieiev
                </a>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              {isSuccess && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg border border-green-200">
                  Повідомлення успішно надіслано! Дякую за звернення.
                </div>
              )}

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Ім'я
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-700"}`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-700"}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Повідомлення
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-700"}`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Надіслати
              </button>
            </form>
          </div>
        </FadeProvider>
      </div>
    </section>
  );
};
