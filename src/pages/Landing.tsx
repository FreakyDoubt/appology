import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FloatingSticker from "@/components/FloatingSticker";
import stickerStar from "@/assets/sticker-star.png";
import stickerHeart from "@/assets/sticker-heart.png";
import stickerCloud from "@/assets/sticker-cloud.png";

const Landing = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center" style={{
      background: "linear-gradient(135deg, hsl(15 100% 75%), hsl(45 100% 80%), hsl(350 100% 85%))"
    }}>
      {/* Decorative floating stickers */}
      <div className="fixed top-10 left-10 opacity-60">
        <FloatingSticker src={stickerStar} alt="Star sticker" size="sm" />
      </div>
      <div className="fixed top-32 right-20 opacity-60">
        <FloatingSticker src={stickerCloud} alt="Cloud sticker" size="sm" delay />
      </div>
      <div className="fixed bottom-20 left-16 opacity-60">
        <FloatingSticker src={stickerHeart} alt="Heart sticker" size="sm" delay />
      </div>
      <div className="fixed bottom-32 right-12 opacity-60">
        <FloatingSticker src={stickerStar} alt="Star sticker" size="sm" />
      </div>
      <div className="fixed top-1/2 left-10 opacity-40">
        <FloatingSticker src={stickerHeart} alt="Heart sticker" size="sm" />
      </div>
      <div className="fixed top-1/3 right-10 opacity-40">
        <FloatingSticker src={stickerCloud} alt="Cloud sticker" size="sm" delay />
      </div>

      {/* Main content */}
      <div className={`max-w-2xl w-full px-6 transition-all duration-1000 transform ${
        showContent ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}>
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-primary/20 text-center">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 animate-bounce-slow">
              💌
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Ada Pesan Spesial...
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Untuk
            </p>
            <p className="text-2xl md:text-3xl font-bold text-primary">
              Pipu & Pipi
            </p>
          </div>

          <div className="my-8 flex justify-center gap-3">
            <FloatingSticker src={stickerHeart} alt="Heart" size="sm" delay />
            <FloatingSticker src={stickerStar} alt="Star" size="sm" />
            <FloatingSticker src={stickerHeart} alt="Heart" size="sm" delay />
          </div>

          <button
            onClick={() => navigate("/pesan")}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-xl md:text-2xl font-bold text-white bg-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-secondary hover:text-foreground"
          >
            <span className="relative z-10">Buka Pesan 💕</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <p className="mt-8 text-sm text-muted-foreground">
            Dari: seseorang yang ingin minta maaf ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
