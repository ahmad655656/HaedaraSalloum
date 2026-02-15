import Header from "@/components/Header";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Inter } from "next/font/google";
import ThreeBackground from "@/components/ThreeBackground";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Haedara Salloum | Frontend Developer",
  description:
    "Haedara Salloum - Frontend Developer specializing in React, Next.js, Three.js, and modern UI/UX. Explore my projects, skills, and experience.",
  keywords: [
    "Haedara Salloum",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Three.js Portfolio",
    "Web Developer",
    "UI UX Developer",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Haedara Salloum" }],
  creator: "Haedara Salloum",
  metadataBase: new URL("https://haedarasalloum.vercel.app"), // غيره لدومينك الحقيقي

  openGraph: {
    title: "Haedara Salloum | Frontend Developer",
    description:
      "Professional portfolio of Haedara Salloum. Discover my frontend projects and interactive 3D experience.",
    url: "https://haedarasalloum.vercel.app",
    siteName: "Haedara Salloum Portfolio",
    images: [
      {
        url: "/seo-image.png", // صورة لازم تضيفها في public
        width: 1200,
        height: 630,
        alt: "Haedara Salloum Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Haedara Salloum | Frontend Developer",
    description:
      "Explore my portfolio projects built with React, Next.js, and modern web technologies.",
    images: ["/seo-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
    <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
        {/* Header + Transitions */}
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
