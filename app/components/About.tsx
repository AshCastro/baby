export default function About() {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Photo */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/ashley.jpg"
            alt="Ashley - Babysitter à Roanne"
            className="rounded-3xl shadow-lg object-cover w-64 h-64 md:w-80 md:h-80"
          />
        </div>

        {/* Texte */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">À propos de moi ✨</h2>
          <p className="text-lg leading-relaxed">
            <strong>Bonjour, je suis Ashley 👩‍🍼</strong>, votre baby-sitter dans la région roannaise.
            Passionnée et attentionnée, j’apporte une présence rassurante et bienveillante pour vos enfants 💕.
          </p>
        </div>
      </div>
    </section>
  );
}
