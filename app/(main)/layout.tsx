import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

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