import MenuSection from "@/components/MenuSection";
import Specials from "@/components/Specials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Menu",
  description: "Explore our exquisite Pan-Asian menu featuring Dim Sum, Sushi, Appetizers, and more.",
};

export default function MenuPage() {
  return (
    <main className="pt-20">
      <MenuSection />
      <Specials />
    </main>
  );
}
