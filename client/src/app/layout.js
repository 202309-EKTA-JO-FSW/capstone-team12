//import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../app/components/Footer/Footer";
import Navbar from "../app/components/Navbar/Navbar";
import AddBootstrap from "./components/AddBootstrap/AddBootstrap";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HILM",
  description: "Event Planning Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <AddBootstrap />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

