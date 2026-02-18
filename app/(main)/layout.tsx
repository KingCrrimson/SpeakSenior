import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SpeakSenior – Professional English Coaching",
  description:
    "Online English programs for professionals.",
  verification: {
    google: "googlebbb8999517a1dbc1",
  },
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex-1">{children}</main>
      <Footer />
    </>
  );
}