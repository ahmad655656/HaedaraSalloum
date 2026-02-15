/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      padding: '15px',
      center: true,
    },
    screens: {
      sm: "680px",
      md: "760px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        // الوضع الفاتح (Light Mode)
        light: {
          bg: {
            primary: "#FFFFFF",
            secondary: "#F9FAFB",
            tertiary: "#F3F4F6",
          },
          text: {
            primary: "#111827",
            secondary: "#4B5563",
            tertiary: "#9CA3AF",
          },
          border: {
            primary: "#E5E7EB",
            secondary: "#D1D5DB",
          },
          accent: {
            primary: "#0891B2", // cyan-600
            secondary: "#4F46E5", // indigo-600
            hover: {
              primary: "#0E7490", // cyan-700
              secondary: "#4338CA", // indigo-700
            }
          },
          card: {
            bg: "#FFFFFF",
            border: "#E5E7EB",
            shadow: "rgba(0, 0, 0, 0.05)",
          },
          button: {
            primary: "#0891B2",
            secondary: "#4F46E5",
            text: "#FFFFFF",
          }
        },
        // الوضع الداكن (Dark Mode)
        dark: {
          bg: {
            primary: "#111827",
            secondary: "#1F2937",
            tertiary: "#374151",
          },
          text: {
            primary: "#F9FAFB",
            secondary: "#D1D5DB",
            tertiary: "#9CA3AF",
          },
          border: {
            primary: "#374151",
            secondary: "#4B5563",
          },
          accent: {
            primary: "#22D3EE", // cyan-400
            secondary: "#818CF8", // indigo-400
            hover: {
              primary: "#06B6D4", // cyan-500
              secondary: "#6366F1", // indigo-500
            }
          },
          card: {
            bg: "#1F2937",
            border: "#374151",
            shadow: "rgba(0, 0, 0, 0.3)",
          },
          button: {
            primary: "#22D3EE",
            secondary: "#818CF8",
            text: "#111827",
          }
        },
      },
      fontFamily: {
        primary: "var(--font-jetbrainsMono)",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-up': 'scaleUp 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(8, 145, 178, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(8, 145, 178, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #0891B2, #4F46E5)',
        'gradient-dark': 'linear-gradient(to right, #22D3EE, #818CF8)',
      },
    },
  },
  plugins: [],
};