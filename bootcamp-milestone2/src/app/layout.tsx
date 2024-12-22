import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


export const metadata: Metadata = {
  title: "James Personal Website",
  description: "A personal website for James Lamkin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
      <div id="root">
        <Navbar />
        <div className="content">
          {children}
        </div>
        <Footer />
      </div>
    </body>
  </html>
  );
}
