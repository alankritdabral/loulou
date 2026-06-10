import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "LOULOU | Fine Pan-Asian Dining in Dehradun",
    template: "%s | LOULOU"
  },
  description: "Experience the exquisite art of Pan-Asian cuisine at LOULOU by Piccolo. Located in Dehradun, we offer a sophisticated atmosphere and authentic Umami flavors.",
  keywords: ["LOULOU", "Pan-Asian Restaurant", "Dehradun Dining", "Fine Dining", "Piccolo", "Asian Food Dehradun"],
  authors: [{ name: "LOULOU Restaurant" }],
  openGraph: {
    title: "LOULOU | Fine Pan-Asian Dining in Dehradun",
    description: "Authentic Pan-Asian flavors meets vintage European elegance.",
    url: "https://loulou.in",
    siteName: "LOULOU Restaurant",
    images: [
      {
        url: "/loulou/images/restaurant.jpg",
        width: 1200,
        height: 630,
        alt: "LOULOU Restaurant Ambiance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#F8E9A8] selection:text-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
