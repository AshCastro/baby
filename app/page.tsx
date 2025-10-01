import Image from "next/image";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Zones from "./components/Zones";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
 <main className="min-h-screen bg-pink-50 text-gray-800">
      <About />
      <Services />
      <Zones />
      <Contact />
      {/* <Footer /> */}
      <footer className="p-4 text-center text-sm bg-gray-200 mt-6">
        © {new Date().getFullYear()} Ashley – Baby-sitting à Roanne, Le Coteau, Riorges, Mably et Perreux
      </footer>
    </main>
  );
}
