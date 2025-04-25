import { useState } from "react";
import EditableText from "./EditableText";
import { ContentVariations } from "../types/typs";

const contentVariations: ContentVariations = {
  headlines: [
    "Transform Your Digital Experience Today",
    "Innovate, Create, Dominate Your Market",
    "Unlock Your Business's Full Potential",
    "Revolutionize How You Connect With Customers",
    "Build The Future With Cutting-Edge Solutions",
  ],
  subheadlines: [
    "Our platform combines powerful tools with intuitive design to help you achieve more with less effort. Start your journey now.",
    "Streamline your workflow, enhance productivity, and scale your business with our comprehensive suite of solutions.",
    "Join thousands of satisfied customers who have transformed their operations using our innovative technology.",
    "Designed for modern businesses, our platform offers everything you need to stay ahead in today's competitive landscape.",
    "Leverage AI-powered insights and automation to make smarter decisions and drive meaningful results.",
  ],
  images: [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=crop&h=500&w=500",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=crop&h=500&w=500",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=crop&h=500&w=500",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=crop&h=500&w=500",
    "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?crop=entropy&cs=tinysrgb&fit=crop&h=500&w=500",
  ],
};

export default function Hero() {
  const [headline, setHeadline] = useState<string>(
    localStorage.getItem("hero-h1") || contentVariations.headlines[0]
  );
  const [subheadline, setSubheadline] = useState<string>(
    localStorage.getItem("hero-p") || contentVariations.subheadlines[0]
  );
  const [image, setImage] = useState<string>(contentVariations.images[0]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const regenerateContent = () => {
    setIsLoading(true);
    setTimeout(() => {
      const randomHeadline =
        contentVariations.headlines[
          Math.floor(Math.random() * contentVariations.headlines.length)
        ];
      const randomSubheadline =
        contentVariations.subheadlines[
          Math.floor(Math.random() * contentVariations.subheadlines.length)
        ];

      // Ensure new image is different from current one
      let randomImage =
        contentVariations.images[
          Math.floor(Math.random() * contentVariations.images.length)
        ];
      while (randomImage === image) {
        randomImage =
          contentVariations.images[
            Math.floor(Math.random() * contentVariations.images.length)
          ];
      }

      setHeadline(randomHeadline);
      setSubheadline(randomSubheadline);
      setImage(randomImage);
      localStorage.setItem("hero-h1", randomHeadline);
      localStorage.setItem("hero-p", randomSubheadline);
      setIsLoading(false);
    }, 500);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <section
      className={`w-full min-h-screen py-12 md:py-24 lg:py-32 transition-all duration-500 ${
        theme === "light"
          ? "bg-gradient-to-br from-blue-50 to-purple-50"
          : "bg-gradient-to-br from-gray-800 to-gray-900"
      }`}
    >
      <div className="container px-4 md:px-6 mx-auto animate-fadeIn">
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="flex flex-col space-y-4 md:space-y-6 md:w-1/2">
            <EditableText
              as="h1"
              value={headline}
              onChange={setHeadline}
              className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter font-inter ${
                theme === "light" ? "text-gray-900" : "text-white"
              } transition-all duration-300`}
            />
            <EditableText
              as="p"
              value={subheadline}
              onChange={setSubheadline}
              className={`md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-inter ${
                theme === "light" ? "text-gray-500" : "text-gray-300"
              } transition-all duration-300`}
            />
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button
                className={`px-8 py-2 rounded-md font-semibold transition-transform transform hover:scale-105 ${
                  theme === "light"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Get Started
              </button>
              <button
                onClick={regenerateContent}
                disabled={isLoading}
                className={`flex items-center gap-2 px-8 py-2 rounded-md border font-semibold transition-transform transform hover:scale-105 ${
                  theme === "light"
                    ? "border-gray-300 text-gray-700 hover:bg-gray-100"
                    : "border-gray-600 text-gray-200 hover:bg-gray-700"
                } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {isLoading ? (
                  <span className="animate-spin">⏳</span>
                ) : (
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9H9m-5 5H9m10.418-2A8.001 8.001 0 009.582 15H15m5-5h-5"
                    />
                  </svg>
                )}
                Regenerate with AI
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={image}
              alt="Hero illustration"
              className="rounded-lg object-cover w-full max-w-[400px] sm:max-w-[500px] h-auto shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ animation: "fadeIn 0.5s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
