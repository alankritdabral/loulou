import CustomerReviews from "@/components/CustomerReviews";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guest Experiences",
  description: "Read what our customers have to say about their dining experience at LOULOU.",
};

export default function ReviewsPage() {
  return (
    <main className="pt-20">
      <CustomerReviews />
    </main>
  );
}
