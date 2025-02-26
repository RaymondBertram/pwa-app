import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
const teamMembers = [
  {
    id: 1,
    name: "Anna Müller",
    role: "CEO & Founder",
    img: "https://plus.unsplash.com/premium_photo-1661758211006-d41106e4be4d?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Max Schmidt",
    role: "Lead Developer",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Lisa Becker",
    role: "Marketing Manager",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Thomas Wagner",
    role: "Project Manager",
    img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const Team = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const animateSlider = async () => {
      while (true) {
        await controls.start({
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 40, // Geschwindigkeit der Animation
            repeat: 0, // Keine Wiederholung hier
          },
        });
        controls.set({ x: "0%" }); // Zurücksetzen, um den Loop zu erzeugen
      }
    };

    animateSlider();
  }, [controls]);

  return (
    <section className="team-container py-16 bg-gray-100" id="team">
      <h1 className="text-3xl font-bold text-center mb-10 py-4">Unser Team</h1>

      {/* Slider Container */}
      <div className="relative overflow-hidden w-full">
        <motion.div
          ref={containerRef}
          className="flex gap-8 w-max"
          animate={controls}
        >
          {/* Original + Kopie für nahtlosen Übergang */}
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div
              key={index}
              className="relative w-[26em] h-[21.5em] rounded-[2.25em] shadow-lg overflow-hidden flex-shrink-0"
            >
              {/* Hintergrundbild */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${member.img})` }}
              />

              {/* Overlay für Name & Rolle */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md text-center py-4">
                <h3 className="text-lg font-bold text-gray-700">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
