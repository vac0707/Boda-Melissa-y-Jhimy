import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import WelcomeScreen from "./components/WelcomeScreen";
import AudioPlayer from "./components/AudioPlayer";
import Hero from "./components/Hero";
import FamilyTribute from "./components/FamilyTribute";
import PhotoDivider from "./components/PhotoDivider";
import EventsAndMaps from "./components/EventsAndMaps";
import Schedule from "./components/Schedule";
import DressCode from "./components/DressCode";
import PhotoGallery from "./components/PhotoGallery";
import Gifts from "./components/Gifts";
import Countdown from "./components/Countdown";
import RSVPForm from "./components/RSVPForm";
import FloatingLeaves from "./components/FloatingLeaves";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import FooterRefined from "./components/FooterRefined";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  // Scroll restore on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleUnlock = () => {
    setUnlocked(true);
    // Add brief smooth scroll trigger
    setTimeout(() => {
      const heroSec = document.getElementById("inicio");
      if (heroSec) {
        heroSec.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#FAF6F0] overflow-x-hidden select-none">
      {/* Cinematic Curtain Transition */}
      <AnimatePresence mode="wait">
        {!unlocked && (
          <motion.div
            key="welcome-curtain"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.05,
              transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
            }}
            className="fixed inset-0 z-50 overflow-hidden"
          >
            <WelcomeScreen onOpen={handleUnlock} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Wedding & Baptism Invitation Page */}
      {unlocked && (
        <motion.main
          key="wedding-invitation-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }}
          className="relative w-full"
        >
          {/* Subtle Ambient Falling Navy Leaves & Sparkles */}
          <FloatingLeaves />

          {/* Persistent Background Music Controller */}
          <AudioPlayer systemUnlocked={unlocked} />

          {/* Floating WhatsApp Quick Action Button */}
          <FloatingWhatsapp systemUnlocked={unlocked} />

          {/* Fullscreen Parallax Header */}
          <Hero />

          {/* Elegant Wedding Portrait above families */}
          <PhotoDivider imageUrl="https://res.cloudinary.com/lfwlqotz/image/upload/v1786922670/PREBODA_01.jpg.jpg" alt="Melissa y Jhimy - Elegancia" />

          {/* Parents & Godparents Family Presentation */}
          <FamilyTribute />

          {/* Interleaved Image 1: Romantic Walk */}
          <PhotoDivider imageUrl="https://res.cloudinary.com/lfwlqotz/image/upload/v1786922666/PREBODA_02.jpg.jpg" alt="Melissa y Jhimy juntos" />

          {/* Countdown Clock & Monthly Calendar Reference */}
          <Countdown />

          {/* Church and Banquet cards + Maps interactive Tab */}
          <EventsAndMaps />

          {/* Interleaved Image 2: Sunset Portrait */}
          <PhotoDivider imageUrl="https://res.cloudinary.com/lfwlqotz/image/upload/v1786922663/PREBODA_04_correcion.jpg.jpg" alt="Sesión de fotos" />

          {/* Timeline Process of the Day */}
          <Schedule />

          {/* Interleaved Image 3: Vintage Portrait */}
          <PhotoDivider imageUrl="https://res.cloudinary.com/lfwlqotz/image/upload/v1786922664/PREBODA_05_corregid.jpg.jpg" alt="Momentos del amor" />

          {/* Attire Etiquette specifications */}
          <DressCode />

          {/* Interleaved Image 4: Garden Embrace */}
          <PhotoDivider imageUrl="https://res.cloudinary.com/lfwlqotz/image/upload/v1786922666/PREBODA_06.jpg.jpg" alt="Amor y Familia" />

          {/* Non-overlapping visual grid / touch slider */}
          <PhotoGallery />

          {/* Gift table / Cash Contributions options */}
          <Gifts />

          {/* Interleaved Image 5: Sunset Sparkle */}
          <PhotoDivider imageUrl="https://res.cloudinary.com/lfwlqotz/image/upload/v1786922689/PREBODA_07.jpg.jpg" alt="La magia de nuestra unión" />

          {/* Interactive registration book connected to WhatsApp */}
          <RSVPForm />

          {/* Cinematic End Banner */}
          <FooterRefined />
        </motion.main>
      )}
    </div>
  );
}
