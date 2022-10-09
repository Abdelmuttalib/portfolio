import Footer from "@/components/layout/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Header /> */}
      <main className="min-h-main">{children}</main>
      <Footer />
    </>
  );
}
