// constants/processData.jsx
import { FiClipboard, FiPenTool, FiCode, FiCheckCircle } from "react-icons/fi";

export const processSteps = [
  {
    icon: <FiClipboard className="w-8 h-8" />,
    title: "Planning",
    description: "I start by sketching the website structure (Wireframe) and defining goals to ensure a smooth and logical user experience.",
    color: "from-cyan-500 to-indigo-500",
    delay: 0.2
  },
  {
    icon: <FiPenTool className="w-8 h-8" />,
    title: "Design",
    description: "I choose calm colors and elegant fonts, and design a user interface that reflects the brand identity.",
    color: "from-cyan-500 to-indigo-500",
    delay: 0.4
  },
  {
    icon: <FiCode className="w-8 h-8" />,
    title: "Development",
    description: "I write clean code using the latest technologies, ensuring fast performance and full responsiveness across all devices.",
    color: "from-cyan-500 to-indigo-500",
    delay: 0.6
  },
  {
    icon: <FiCheckCircle className="w-8 h-8" />,
    title: "Testing",
    description: "I test every detail thoroughly and make additional optimizations to ensure a perfect user experience.",
    color: "from-cyan-500 to-indigo-500",
    delay: 0.8
  }
];