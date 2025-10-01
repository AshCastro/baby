import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Me contacter 📱</h2>
        <p className="mb-6 text-lg">Disponible et à l’écoute, je réponds rapidement via :</p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://www.instagram.com/ashleycastro_17?igsh=MXZnaHVqM2pvemF5Mg=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-pink-500 text-white px-5 py-3 rounded-full shadow-md hover:bg-pink-600 transition"
          >
            <FaInstagram size={22} /> Instagram
          </a>

          <a
            href="https://wa.me/33612353110"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full shadow-md hover:bg-green-600 transition"
          >
            <FaWhatsapp size={22} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
