import { useEffect, useState } from "react";
import FloatingSticker from "@/components/FloatingSticker";
import stickerBear from "@/assets/sticker-bear.png";
import stickerStar from "@/assets/sticker-star.png";
import stickerHeart from "@/assets/sticker-heart.png";
import stickerCloud from "@/assets/sticker-cloud.png";

const Apology = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
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

      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div 
          className={`max-w-4xl w-full transition-all duration-1000 transform ${
            showMessage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main sticker */}
          <div className="flex justify-center mb-8">
            <FloatingSticker src={stickerBear} alt="Bear sticker" size="lg" />
          </div>

          {/* Main message card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-primary/20">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-primary">
              Maaf Ya... 🥺
            </h1>
            
            <div className="space-y-6 text-center text-foreground">
              <p className="text-xl md:text-2xl leading-relaxed">
                Kepada <span className="font-bold text-primary">Pipu</span> dan{" "}
                <span className="font-bold text-primary">Pipi</span> yang tersayang...
              </p>
              
              <div className="my-8 flex justify-center gap-4">
                <FloatingSticker src={stickerHeart} alt="Heart" size="sm" delay />
                <FloatingSticker src={stickerHeart} alt="Heart" size="sm" />
                <FloatingSticker src={stickerHeart} alt="Heart" size="sm" delay />
              </div>

              <p className="text-lg md:text-xl leading-relaxed">
                Aku <span className="font-bold text-secondary">dobi</span>, mau minta maaf banget 🙏
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                Maafin dobi pliss, semalem ketiduran karna nungguin upload repository lama sekali💔
              </p>

              <div className="bg-accent/20 rounded-2xl p-6 my-8">
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                  Semoga maafnya diterima ✨
                </p>
              </div>

              <p className="text-lg md:text-xl leading-relaxed">
                Thank uuuu 💕
              </p>

              <p className="text-lg md:text-xl leading-relaxed font-semibold text-primary">
                Maafkan aku ya, Pipu & Pipi! 🌟
              </p>
            </div>

            {/* Bottom decorative stickers */}
            <div className="flex justify-center gap-6 mt-10">
              <FloatingSticker src={stickerStar} alt="Star" size="sm" />
              <FloatingSticker src={stickerCloud} alt="Cloud" size="sm" delay />
              <FloatingSticker src={stickerStar} alt="Star" size="sm" delay />
            </div>
          </div>

          {/* Footer message */}
          <div className="text-center mt-8">
            <p className="text-white text-lg md:text-xl font-medium drop-shadow-lg">
              Dari: dobi yang menyesal 🐻
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apology;
