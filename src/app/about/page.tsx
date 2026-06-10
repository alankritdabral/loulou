import About from "@/components/About";
import Team from "@/components/Team";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Heritage",
  description: "Learn about the vision of Loulou by Piccolo and our journey to bring authentic Pan-Asian flavors to Dehradun.",
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      <About />
      <Team />
    </main>
  );
}
