import Reservation from "@/components/Reservation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Reservations",
  description: "Book your table at LOULOU and experience the best Pan-Asian dining in Dehradun.",
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <Reservation />
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="section-heading mb-8">Get In Touch</h2>
          <div className="gold-line" />
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div>
              <h4 className="text-xl font-bold mb-4">Location</h4>
              <p className="text-black/60">Khasra No 355/2, Mauza Dakpatti, Rajpur Road, Dehradun</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Phone</h4>
              <p className="text-black/60">+91 97598 10284</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Email</h4>
              <p className="text-black/60">hello@loulou.in</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
