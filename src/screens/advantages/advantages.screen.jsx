import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const cardData = [
  {
    id: 1,
    title: "Schnelle Analyse",
    text: "Erhalten Sie eine schnelle Analyse Ihrer Situation.",
    img: "https://images.unsplash.com/photo-1465447142348-e9952c393450?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhZmZpY3xlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    id: 2,
    title: "Individuelle Beratung",
    text: "Unsere Experten bieten maßgeschneiderte Lösungen.",
    img: "https://images.unsplash.com/photo-1530685932526-48ec92998eaa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZmZpY3xlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    id: 3,
    title: "Maximale Effizienz",
    text: "Optimieren Sie Ihre Prozesse und sparen Zeit.",
    img: "https://images.unsplash.com/photo-1501290301209-7a0323622985?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhZmZpY3xlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    id: 4,
    title: "Innovative Strategien",
    text: "Neue Ansätze für nachhaltigen Erfolg.",
    img: "https://images.unsplash.com/photo-1557404763-69708cd8b9ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYWZmaWN8ZW58MHx8MHx8fDI%3D",
  },
  {
    id: 5,
    title: "Höchste Qualität",
    text: "Unsere Standards sorgen für Exzellenz.",
    img: "https://images.unsplash.com/photo-1699888265738-bd83e6d19355?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmZpYyUyMGFuYWx5c2V8ZW58MHx8MHx8fDI%3D",
  },
];

export const Advantages = () => {
  const sliderRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const animateSlider = async () => {
      while (true) {
        await controls.start({
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 40, // Geschwindigkeit des Scrolls
            repeat: 0, // Kein automatisches Wiederholen
          },
        });
        controls.set({ x: "0%" }); // Zurücksetzen für nahtlosen Loop
      }
    };

    animateSlider();
  }, [controls]);

  return (
    <section className="advantages-container py-16 bg-gray-100" id="advantages">
      <h1 className="text-3xl font-bold text-center mb-10 py-5">
        Ihre Vorteile
      </h1>

      {/* Slider Wrapper */}
      <div className="relative overflow-hidden w-full">
        <motion.div
          ref={sliderRef}
          className="flex gap-6 w-max"
          animate={controls}
        >
          {/* Original + Kopie für nahtlosen Übergang */}
          {[...cardData, ...cardData].map((card, index) => (
            <div
              key={index}
              className="relative w-[24em] h-[22em] rounded-[2.25em] bg-white shadow-lg overflow-hidden flex-shrink-0 flex flex-col"
            >
              {/* Overlay für Text (oben fixiert) */}
              <div className="absolute top-0 left-0 right-0 text-white p-4 rounded-t-[2.25em] z-10">
                <h3 className="text-lg font-bold text-gray-900">
                  {card.title}
                </h3>
                <p className="text-white text-sm mt-1">{card.text}</p>
              </div>

              {/* Hintergrundbild */}
              <div
                className="absolute inset-0 bg-cover bg-gray-900 opacity-80 bg-center"
                style={{ backgroundImage: `url(${card.img})` }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
