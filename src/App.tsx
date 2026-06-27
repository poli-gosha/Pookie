import { motion, AnimatePresence } from "motion/react";
import React, { useEffect, useState, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

const destinations = [
  {
    city: "Paris",
    desc: "A mesmerizing view of the Eiffel Tower lighting up the night sky, a promise awaiting fullfilment.",
    img: "/Eiffel.jpeg",
    location: [48.8584, 2.2945] as [number, number]
  },
  {
    city: "Rome",
    desc: "Pasta, history, and the timeless magic of the Colosseum.",
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop",
    location: [41.9028, 12.4964] as [number, number]
  },
  {
    city: "Barcelona",
    desc:"White stone ribs curved like a prayer over stillness, capturing the light of a future our souls already remember.",
    img: "/Barcelona.jpg",
    location: [39.4532, -0.3526] as [number, number]
  }
];

const tracks = [
  { 
    artist: "Lana Del Rey", 
    title: "Art Deco", 
    img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop", 
    desc: "Wild, artsy, befitting a creative soul like yours" 
  },
  { 
    artist: "Måneskin", 
    title: "Torna a casa", 
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop", 
    desc: "A passionate, raw, and soulful melody that speaks directly to the heart." 
  },
  { 
    artist: "Sade", 
    title: "Like a Tattoo", 
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop", 
    desc: "An eternal reminder of you, like a tattoo" 
  }
];

const loves = [
  {
    title: "Cherry & Peonies",
    subtitle: "A world painted in the deepest reds and the softest pinks.",
    description: "There is a quiet elegance in the way a peony blooms, unfurling its petals like a closely guarded secret. It is a visual poetry that matches your vibrant soul, reflecting a love for beauty that doesn't demand attention, but simply exists in its own breathtaking grace. The color cherry—bold, timeless, and unapologetically alive—is the exact shade of your lips.",
    imgPrimary: "/Cherries.png",
    imgSecondary: "/Peonies.png",
    theme: "bg-[var(--color-cream-100)] text-[var(--color-cherry-900)]",
    align: "left"
  },
  {
    title: "Italian Summers",
    subtitle: "Dreaming of cobblestones, pasta, and golden hours.",
    description: "It’s the romance of a life lived slowly. It’s sipping espresso at a corner café, the sound of vespas echoing through narrow, sun-drenched alleys, and the feeling of ancient history beneath your feet. La dolce vita, the final destination after a youth of adventure.",
    imgPrimary: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=1973&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1974&auto=format&fit=crop",
    theme: "bg-[var(--color-cherry-900)] text-[var(--color-cream-50)]",
    align: "right"
  },
  {
    title: "Quiet Purrs",
    subtitle: "Pufffff",
    description: "Nu ar fi fost posibil să fi încheiat această felicitare fără Romeo desigur, cel mai majestic și frumos motan din toți care există. La mulți ani miau miau <3",
    imgPrimary: "/Romeo2.jpeg",
    imgSecondary: "/Romeo.jpeg",
    theme: "bg-[#1a1a1a] text-[#f0f0f0]",
    align: "left"
  }
];

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeDestIndex, setActiveDestIndex] = useState(0);
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextDest = () => {
    setActiveDestIndex((prev) => (prev + 1) % destinations.length);
  };

  const prevDest = () => {
    setActiveDestIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  const nextTrack = () => {
    setActiveTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const prevTrack = () => {
    setActiveTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextDest();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-cream-50)] text-gray-900 font-sans selection:bg-[var(--color-cherry-300)] selection:text-white relative">
      <div className="film-grain"></div>

      {/* Hero Section */}
      <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0 bg-[var(--color-cherry-900)]"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1974&auto=format&fit=crop" 
            alt="Beautiful Peonies" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cherry-900)] to-transparent opacity-80"></div>
        </div>

        <div className="relative z-10 text-center text-[var(--color-cream-50)] space-y-8 px-4 flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="uppercase tracking-[0.3em] text-xs md:text-sm text-[var(--color-cherry-100)] opacity-80"
          >
            A Celebration of You
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-serif text-6xl md:text-9xl italic tracking-tight font-light leading-none">
              Danielle
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2, ease: "easeOut" }}
            className="font-serif italic text-xl md:text-3xl text-[var(--color-cherry-100)] opacity-90"
          >
            Happy 19th Birthday
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
        >
          <div className="w-px h-16 bg-gradient-to-b from-[var(--color-cherry-100)] to-transparent opacity-50"></div>
        </motion.div>
      </section>

      {/* The Letter Section */}
      <section className="relative min-h-screen bg-[#FDF9F6] overflow-hidden py-32 md:py-48">
        
        {/* Ambient floating flowers/petals */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
           {[...Array(10)].map((_, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 100, rotate: 0 }}
               whileInView={{ opacity: 0.3, y: -200, rotate: i % 2 === 0 ? 90 : -90 }}
               viewport={{ once: false, margin: "200px" }}
               transition={{ duration: 15 + i * 2, ease: "linear", repeat: Infinity }}
               className="absolute"
               style={{ 
                 left: `${5 + (i * 10)}%`, 
                 top: `${10 + (i * 20)}%`,
               }}
             >
               <img 
                 src="https://images.unsplash.com/photo-1583272630857-bfdf14e21415?q=80&w=200&auto=format&fit=crop" 
                 className={`w-24 md:w-48 h-24 md:h-48 object-cover mix-blend-multiply rounded-full blur-[2px] ${i % 3 === 0 ? 'scale-150' : 'scale-100'}`}
                 alt=""
               />
             </motion.div>
           ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 space-y-[30vh]">
          
          {/* Block 1 */}
          <div className="flex flex-col items-center text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-serif text-6xl md:text-8xl text-[var(--color-cherry-900)] italic font-light tracking-tight mb-8"
            >
              My dearest Pookie,
            </motion.h2>
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: "120px", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="w-px bg-[var(--color-cherry-300)]"
            />
          </div>

          {/* Block 2: The Spark */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="max-w-2xl mx-auto text-center font-serif text-3xl md:text-5xl text-[var(--color-cherry-950)] leading-relaxed font-light"
            >
              This is a letter about you, about this very special day you turn 19.<span className="italic text-[var(--color-cherry-600)] block mt-4 text-4xl md:text-6xl">A letter meant to capture the tiniest fraction of the beautiful things that complete you. An attempt of portraying the way I see you, the way I feel about you, the way I worship you.</span>
            </motion.div>
          </div>

          <div className="w-full flex justify-center py-12 md:py-24">
             <motion.div 
               initial={{ height: 0 }}
               whileInView={{ height: "150px" }}
               viewport={{ once: true }}
               transition={{ duration: 1.5 }}
               className="w-px bg-gradient-to-b from-[var(--color-cherry-300)] to-transparent"
             />
          </div>

          {/* Block 3: The Little Things */}
          <div className="flex flex-col items-center gap-16 md:gap-32 text-center max-w-4xl mx-auto">
            <div className="w-full space-y-8">
               <motion.h3 
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5 }}
                 className="font-serif text-3xl md:text-5xl text-[var(--color-cherry-800)] italic"
               >
                 Happy birthday
               </motion.h3>
               <motion.div 
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, delay: 0.2 }}
                 className="space-y-6 text-xl md:text-3xl text-[var(--color-cherry-950)] font-light leading-relaxed"
               >
                 <p>To the love of my life, I wish all the happiness in the world, the warmest sun kissing her cheeks, the softest wind blowing through her hair, the kindest of people surrounding her, the tasties foods filling her plate, the happiest of moments overwhelming her days, the most success in achieving her goals, for her wildest dreams to come true, with all the luck in the world following her footsteps.</p>
                 <p>O domnișoară care încă ma îndoiesc că există, perfecțiune mult prea rară ca să poate exista în această lume imperfectă. Un suflet pur, pe care ascultându-l te poți topi. E lucru cert, că ai apărut din praf de stele. Pentru tine soarele ar răsări de două ori, de trei ori, de ori de câte ori ai vrea să îl admiri.</p>
                 <p>Your deep blue eyes are the deepest ocean my heart would willingly drown in, a smile that would have nations going to war for, a body that even the greatest sculptors couldn't carve, that is what I am mesmerised by every time I look at you. “- Vreau să-ţi intru în sânge, pricepi?”  </p>
               </motion.div>
            </div>
          </div>

          <div className="w-full flex justify-center py-12 md:py-24">
             <motion.div 
               initial={{ height: 0 }}
               whileInView={{ height: "150px" }}
               viewport={{ once: true }}
               transition={{ duration: 1.5 }}
               className="w-px bg-gradient-to-b from-transparent via-[var(--color-cherry-300)] to-transparent"
             />
          </div>

          {/* Block 4: The Promise */}
          <div className="relative text-center max-w-4xl mx-auto py-24">
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 2, ease: "easeOut" }}
               className="absolute inset-0 flex items-center justify-center -z-10 opacity-10"
            >
               <div className="w-96 h-96 rounded-full border border-[var(--color-cherry-900)] scale-150"></div>
               <div className="absolute w-64 h-64 rounded-full border border-[var(--color-cherry-900)] scale-150"></div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              className="font-serif text-4xl md:text-6xl text-[var(--color-cherry-950)] leading-[1.4] font-light italic"
            >
              To the girl who adds colour to my life, to the girl who deserves the entire world and more, to the girl who stars are born for.
            </motion.p>
          </div>
          
        </div>
      </section>

      {/* The Melody Section */}
      <section className="py-24 md:py-32 bg-[var(--color-cherry-900)] text-[var(--color-cream-50)] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center gap-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="space-y-4"
          >
            <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-cherry-300)] block">The Melody of Us</span>
            <h2 className="font-serif text-4xl md:text-5xl italic font-light leading-tight">
              Your life is a beautiful soundtrack.
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-full flex flex-col items-center"
          >
            {/* Abstract Spinning Vinyl */}
            <div className={`w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-[var(--color-cherry-700)] p-4 relative ${isPlaying ? 'animate-[spin_10s_linear_infinite]' : ''} transition-all duration-1000 mx-auto`}>
              <div className="w-full h-full rounded-full border border-[var(--color-cherry-500)] p-6 opacity-80">
                 <div className="w-full h-full rounded-full border border-[var(--color-cherry-300)] p-8 opacity-60">
                    <div className="w-full h-full rounded-full bg-[var(--color-cherry-800)] relative overflow-hidden shadow-2xl">
                       <AnimatePresence mode="wait">
                         <motion.img 
                            key={activeTrackIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            src={tracks[activeTrackIndex].img}
                            alt="Record cover texture"
                            referrerPolicy="no-referrer"
                            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay scale-110"
                         />
                       </AnimatePresence>
                       {/* Center label */}
                       <div className="absolute inset-0 flex items-center justify-center z-10">
                          <div className="w-24 h-24 rounded-full bg-[var(--color-cherry-900)] border-2 border-[var(--color-cherry-700)] flex items-center justify-center shadow-xl">
                             <div className="w-4 h-4 rounded-full bg-[var(--color-cream-50)]"></div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              
              {/* Floating decorative elements */}
              <motion.div 
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-4 w-12 h-12 text-[var(--color-cherry-300)] opacity-60"
              >
                ✦
              </motion.div>
              <motion.div 
                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -left-8 text-2xl text-[var(--color-cherry-500)] opacity-40"
              >
                ✧
              </motion.div>
            </div>

            <div className="w-full mt-12 flex flex-col items-center">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTrackIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4 flex flex-col items-center text-center"
                >
                  <h3 className="font-serif text-4xl md:text-5xl text-[var(--color-cherry-100)] italic">
                    {tracks[activeTrackIndex].title}
                  </h3>
                  <p className="text-2xl text-[var(--color-cherry-300)] font-light">
                    {tracks[activeTrackIndex].artist}
                  </p>
                  <p className="text-gray-400 font-light text-lg max-w-md">
                    {tracks[activeTrackIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Music Player Controls */}
              <div className="flex items-center justify-center gap-8 pt-8">
                <button onClick={prevTrack} className="text-[var(--color-cherry-300)] hover:text-white transition-colors" aria-label="Previous track">
                  <SkipBack size={28} strokeWidth={1.5} />
                </button>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-[var(--color-cherry-700)] flex items-center justify-center text-white hover:bg-[var(--color-cherry-500)] transition-all border border-[var(--color-cherry-500)] hover:scale-105 shadow-xl"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={28} strokeWidth={1.5} fill="currentColor" /> : <Play size={28} strokeWidth={1.5} fill="currentColor" className="ml-1" />}
                </button>
                <button onClick={nextTrack} className="text-[var(--color-cherry-300)] hover:text-white transition-colors" aria-label="Next track">
                  <SkipForward size={28} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* World Travel Section (Interactive Globe) */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Animated Background Image */}
        <AnimatePresence mode="popLayout">
          <motion.img
            key={activeDestIndex}
            src={destinations[activeDestIndex].img}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover z-0"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>

        {/* Dramatic Vignette / Blur Overlay */}
        <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-[2px] mix-blend-multiply"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--color-cherry-900)]/80 via-transparent to-transparent opacity-80"></div>

        <div className="relative z-20 w-full max-w-7xl mx-auto h-full flex flex-col justify-center overflow-hidden">
          <motion.div 
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset }) => {
              if (offset.x < -50) nextDest();
              if (offset.x > 50) prevDest();
            }}
            className="w-full h-full flex items-center justify-center px-6 md:px-12 cursor-grab active:cursor-grabbing"
          >
            <div className="flex flex-col items-center text-[var(--color-cream-50)] space-y-6 max-w-2xl text-center w-full pointer-events-none">
              <span className="uppercase tracking-[0.3em] text-xs md:text-sm text-[var(--color-cherry-300)] block">
                Adventures Await
              </span>
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeDestIndex} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -20 }} 
                  transition={{ duration: 0.8 }}
                  className="flex flex-col items-center text-center"
                >
                  <h2 className="font-serif text-6xl md:text-8xl italic font-light tracking-tight">
                    {destinations[activeDestIndex].city}
                  </h2>
                  <p className="mt-8 text-lg md:text-xl font-light opacity-90 max-w-md border-t-2 border-[var(--color-cherry-500)] pt-6 leading-relaxed">
                    {destinations[activeDestIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Indicators */}
              <div className="flex gap-3 mt-12 pointer-events-auto">
                {destinations.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveDestIndex(idx)}
                    className={`h-1 transition-all duration-500 ${idx === activeDestIndex ? 'w-8 bg-[var(--color-cherry-300)]' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Essence (Gallery) Section */}
      <section className="relative">
        {loves.map((love, i) => (
          <div key={i} className={`sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden ${love.theme}`}>
            {/* Background elements */}
            <div className="absolute inset-0 z-0 opacity-30 md:opacity-40">
              <motion.img 
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 10, ease: "easeOut" }}
                src={love.imgPrimary} 
                className="w-full h-full object-cover blur-sm mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col ${love.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 h-full py-24`}>
              {/* Images */}
              <div className="w-full md:w-1/2 relative h-[40vh] md:h-[70vh] flex items-center justify-center">
                 <motion.div
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true, margin: "-10%" }}
                   transition={{ duration: 1.2, ease: "easeOut" }}
                   className={`absolute ${love.align === 'left' ? 'top-0 left-0' : 'top-0 right-0'} w-3/4 h-3/4 z-10 shadow-2xl p-2 bg-white/10 backdrop-blur-sm`}
                 >
                   <img src={love.imgPrimary} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                 </motion.div>
                 <motion.div
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true, margin: "-10%" }}
                   transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                   className={`absolute ${love.align === 'left' ? 'bottom-0 right-0' : 'bottom-0 left-0'} w-2/3 h-2/3 z-20 shadow-2xl p-2 bg-white/10 backdrop-blur-sm`}
                 >
                   <img src={love.imgSecondary} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                 </motion.div>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <span className="uppercase tracking-[0.3em] text-xs opacity-70 mb-4 block">Her Universe</span>
                  <h2 className="font-serif text-5xl md:text-7xl italic tracking-tight mb-6 leading-tight">
                    {love.title}
                  </h2>
                  <p className="text-xl md:text-2xl font-light opacity-90 mb-8 italic border-l-2 border-current pl-4">
                    "{love.subtitle}"
                  </p>
                  <p className="text-base md:text-lg opacity-80 leading-relaxed font-light">
                    {love.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Outro Section */}
      <section className="py-32 px-4 text-center bg-[var(--color-cherry-900)] text-[var(--color-cream-50)] relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 space-y-8"
        >
          <p className="uppercase tracking-[0.2em] text-sm text-[var(--color-cherry-300)]">Forever & Always</p>
          <h2 className="font-serif text-5xl md:text-7xl italic font-light">Happy 19th, Danielle</h2>
        </motion.div>
      </section>
    </div>
  );
}

